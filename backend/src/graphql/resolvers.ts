import {
    Resolver,
    Query,
    Args,
    Arg,
    MiddlewareFn,
    Ctx,
    Mutation,
} from 'type-graphql';
import { Farmer, Post, Simple, User, Cart } from './queries';
import { farmerArgs, loginArgs, postTypes, simpleId, cartTypes } from './argsTypes';
import { farmer } from '../serverInterface';
import { MyContext } from 'src/types/MyContext';
// import {Auth} from '../utils/checkAuth'
const bcrypt = require('bcrypt');
const Farmers = require('../Models/farmer');
const Posts = require('../Models/post');
const Carts = require('../Models/cart');
const jwt = require('jsonwebtoken');
const { UserInputError } = require('apollo-server-express');
export const MiddlewareFun: MiddlewareFn = async ({ context }: any, next) => {
    console.log('first middleware....');
    console.log(context);
    return next();
};


@Resolver()
class HelloResolver {
    // queries

    @Query(() => [Cart])
    async getCartItems(@Args() { farmerId }: simpleId): Promise<[Cart]> {
        return Carts.find({ farmerId: farmerId });
    }

    @Query(() => [User])
    async getAllFarmers(): Promise<[User]> {
        return Farmers.find({});
    }
    @Query(() => [Post])
    async getAllPosts(): Promise<Post[]> {
        return await Posts.find({});
    }
    @Query(() => [Post])
    async getPostByFarmer(@Args() { farmerId }: simpleId): Promise<Post[]> {
        return await Posts.find({ farmerId: farmerId });
    }
    @Query(() => Farmer)
    async getFarmerByFarmerId(@Args() { farmerId }: simpleId): Promise<Farmer> {
        return await Farmers.find({ _id: farmerId });
    }
    @Query(() => [Post])
    async getAllThings(@Args() { cropType }: postTypes): Promise<Post[]> {
        return await Posts.find({ cropType: cropType });
    }
    @Query(() => Post)
    async getRandomPost(): Promise<Post> {
        return await Posts.find().limit(1).lean()
    }
    @Query(() => Post)
    async getPostById(@Args() { id }: simpleId): Promise<Post> {
        return await Posts.findById(id)
    }
    @Query(() => Farmer)
    async getByIdFarmers(
        @Arg('id', { nullable: true }) id: String
    ): Promise<Farmer | {}> {
        try {
            console.log(id);
            const farmer: farmer = await Farmers.findById(id, () => {
                console.log('not found');
            });
            console.log('this is farmer', farmer);
            let returnData = {
                name: farmer.name,
                email: farmer.email,
                password: farmer.password,
                city: farmer.city,
                id: farmer.id,
                token: farmer.token,
                image: farmer.image
            };
            if (farmer) {
                return { ...returnData };
            }
            console.log('error');
            return { errors };
        } catch (e: any) {
            console.log('thrown error');
            throw new Error(e);
        }
    }

    // delete queries
    @Mutation(() => Simple)
    async deleteCartItem(@Arg('id', { nullable: true }) id: String): Promise<any> {
        await Carts.deleteOne({ _id: id })
        return { id }
    }
    @Mutation(() => Simple)
    async deletePostItem(@Arg('id', { nullable: true }) id: String): Promise<any> {
        console.log('here')
        await Posts.deleteOne({ _id: id })
        return { id }
    }


    // mutations

    @Mutation(() => User)
    async createFarmer(
        @Args()
        {
            name,
            phone,
            city,
            email,
            password,
            confirmPassword,
            image
        }: farmerArgs
    ): Promise<{}> {
        const hashedPassword = await bcrypt.hash(password, 12);
        // check for existing user's data.
        const oneFarmer: Farmer = await Farmers.findOne({ email });

        if (oneFarmer) {
            console.log('email matched and user already registered!!');
            throw new UserInputError('Account already exists!!', {
                errors: {
                    email: 'this email is taken'
                }
            });
        }
        // validate if password's match
        if (await bcrypt.compare(confirmPassword, hashedPassword)) {
            const newFarmer = new Farmers({
                name: name,
                phone: phone,
                city: city,
                email: email,
                password: hashedPassword,
                confirmPassword: confirmPassword,
                image: image
            });
            newFarmer.save();

            // jwt token
            const token = jwt.sign(
                {
                    email: email
                },
                process.env.SECRET,
                { expiresIn: '1h' }
            );

            console.log(newFarmer);
            console.log(
                'this is password check' +
                (await bcrypt.compare(confirmPassword, hashedPassword))
            );
            return {
                name,
                city,
                email,
                password,
                confirmPassword,
                token,
                image
            };
        }
        return { name, phone, city, email, image, password, confirmPassword };
    }

    @Mutation(() => Farmer)
    async login(
        @Args() { email, password }: loginArgs,
        @Ctx() ctx: MyContext
    ): Promise<{} | null | Farmer> {
        const oneFarmer: Farmer = await Farmers.findOne({ email: email });
        const returnData = {
            name: oneFarmer.name,
            email: oneFarmer.email,
            password: oneFarmer.password,
            city: oneFarmer.city,
            id: oneFarmer.id,
            image: oneFarmer.image
        };
        if (!oneFarmer) return null;
        if (oneFarmer) {
            const valid = await bcrypt.compare(password, oneFarmer.password);
            if (!valid) {
                console.log('wrong password: ' + oneFarmer.password);
                return null;
            }
            if (valid) {
                // jwt token
                const token = jwt.sign(
                    {
                        email: email
                    },
                    process.env.SECRET,
                    { expiresIn: '1h' }
                );

                console.log(ctx);
                console.log('successfully logged in ', oneFarmer);
                // ctx.req.session!.id = oneFarmer.id;
                return {
                    ...returnData,
                    email,
                    token
                };
            } else
                return {
                    password: 'password incorrect',
                    ...errors
                };
        }
        return errors.error;
    }

    @Mutation(() => Post)
    async UserPost(
        @Args() { farmerId, title, des, cropType, price, city, url }: postTypes
    ): Promise<Post> {
        await Farmers.findById(farmerId);
        const newPost = new Posts({
            farmerId: farmerId,
            title: title,
            des: des,
            price: price,
            city: city,
            url: url,
            cropType: cropType
        });
        newPost.save();
        console.log(newPost);
        return { farmerId, cropType, url, title, des, price, city };
    }

    @Mutation(() => Cart)
    async cartItems(
        @Args() { description, name, rate, photo, city, farmerId, quantity }: cartTypes
    ): Promise<Cart | {}> {
        const newCart = new Carts({
            description: description,
            name: name,
            rate: rate,
            photo: photo,
            city: city,
            farmerId: farmerId,
            quantity: quantity,
        });
        newCart.save();
        return { description, name, rate, photo, city, farmerId, quantity }
    }
}
const errors = {
    error: 'farmer not found'
};

export { HelloResolver };