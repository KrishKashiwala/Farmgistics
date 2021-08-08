import { Resolver, Query, Mutation, Args, Arg } from 'type-graphql';
const bcrypt = require('bcrypt');
import { Farmer, Post, User } from '../queries/queries';
const Farmers = require('../../Models/farmer');
const Posts = require('../../Models/post');
import { farmerArgs, loginArgs, postTypes, simpleId } from '../argsTypes';

const jwt = require('jsonwebtoken');
const { UserInputError } = require('apollo-server-express');

interface farmer {
    name: String;
    id: String;
    email: String;
    token?: String;
    password: String;
    city: String;
}

@Resolver()
class HelloResolver {
    @Query(() => [User])
    async allFarmers(): Promise<[User]> {
        return Farmers.find({});
    }
    @Query(() => [User] || User, { nullable: true })
    async getAllFarmers(
        @Args() { farmerId }: postTypes
    ): Promise<User | [User]> {
        return Posts.find({ farmerId });
    }
    @Query(() => [Post])
    async getAllPosts(): Promise<Post[]> {
        return await Posts.find({});
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
    async login(@Args() { email, password }: loginArgs): Promise<{}> {
        const oneFarmer: Farmer = await Farmers.findOne({ email });
        const returnData = {
            name: oneFarmer.name,
            email: oneFarmer.email,
            password: oneFarmer.password,
            city: oneFarmer.city,
            id: oneFarmer.id,
            image: oneFarmer.image
        };
        if (oneFarmer) {
            if (await bcrypt.compare(password, oneFarmer.password)) {
                // jwt token
                const token = jwt.sign(
                    {
                        email: email
                    },
                    process.env.SECRET,
                    { expiresIn: '1h' }
                );

                console.log('successfully logged in ', oneFarmer);
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
