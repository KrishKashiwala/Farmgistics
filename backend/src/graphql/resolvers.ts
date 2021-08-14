import {
    Resolver,
    Query,
    Mutation,
    Args,
    Arg,
    MiddlewareFn,
    UseMiddleware,
    Ctx
} from 'type-graphql';
import { Farmer, Post, User } from './queries';
import { farmerArgs, loginArgs, postTypes, simpleId } from './argsTypes';
import { farmer } from '../serverInterface';
import { MyContext } from 'src/types/MyContext';
const bcrypt = require('bcrypt');
const Farmers = require('../Models/farmer');
const Posts = require('../Models/post');
const jwt = require('jsonwebtoken');
const { UserInputError } = require('apollo-server-express');
export const MiddlewareFun: MiddlewareFn = async ({ context }, next) => {
    console.log('first middleware implementated successfully!..');
    console.log(context);
    return next();
};
@Resolver()
class HelloResolver {
    @Query(() => Farmer)
    @UseMiddleware(MiddlewareFun)
    async helloWorld(@Ctx() ctx: MyContext): Promise<Farmer | undefined> {
        if (!ctx.req.session!.id) return undefined;
        return Farmers.findOne(ctx.req.session!.id);
    }
    @Query(() => [User])
    async allFarmers(): Promise<[User]> {
        return Farmers.find({});
    }
    @Query(() => [Post])
    async getAllPosts(): Promise<Post[]> {
        return await Posts.find({});
    }
    @Mutation(() => [Post], { nullable: true })
    async getAllFarmers(@Args() { farmerId }: postTypes): Promise<[Post]> {
        return await Posts.find({ farmerId });
    }
    @Mutation(() => Post)
    async getPostByFarmer(@Args() { farmerId }: simpleId): Promise<Post> {
        return Posts.findOne(farmerId);
    }
    @Mutation(() => Farmer)
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
                id: farmer.id
            };
            if (farmer) {
                console.log('right data in placed wrong');
                return { ...returnData };
            }
            console.log('error');
            return { errors };
        } catch (e: any) {
            console.log('thrown error');
            throw new Error(e);
        }
    }
    @Mutation(() => User)
    async createFarmer(
        @Args()
        { name, phone, city, email, password, confirmPassword }: farmerArgs
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
                confirmPassword: confirmPassword
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
                token
            };
        }
        return { name, phone, city, email, password, confirmPassword };
    }
    @Mutation(() => Farmer)
    async login(
        @Args() { email, password }: loginArgs,
        @Ctx() ctx: MyContext
    ): Promise<{} | null> {
        const oneFarmer: Farmer = await Farmers.findOne({ email });
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
            if (!valid) return null;
            if (valid) {
                // jwt token
                const token = jwt.sign(
                    {
                        email: email
                    },
                    process.env.SECRET,
                    { expiresIn: '1h' }
                );

                console.log('successfully logged in ', oneFarmer);
                ctx.req.session!.id = oneFarmer.id;
                return {
                    ...returnData,
                    email,
                    token,
                    redirect: '/home'
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
        @Args() { farmerId, title, des, price, city }: postTypes
    ): Promise<Post> {
        await Farmers.findById(farmerId);
        const newPost = new Posts({
            farmerId: farmerId,
            title: title,
            des: des,
            price: price,
            city: city
        });
        newPost.save();
        console.log(newPost);
        return { farmerId, title, des, price, city };
    }
}

const errors = {
    error: 'farmer not found'
};

export { HelloResolver };