import { Resolver, Query, Mutation, Args, Arg } from 'type-graphql';
const bcrypt = require('bcrypt');
import { Farmer } from '../queries/queries';
const Farmers = require('../../Models/farmer');
import { farmerArgs, loginArgs } from '../argsTypes';
const jwt = require('jsonwebtoken');
const { UserInputError } = require('apollo-server-express');

@Resolver()
class HelloResolver {
    @Query(() => Farmer)
    async getByEmailFarmers(
        @Arg('email', { nullable: true }) email: String
    ): Promise<Farmer | {}> {
        try {
            const farmer = await Farmers.findOne({ email });
            if (farmer) {
                return farmer;
            }
            return {};
        } catch (e: any) {
            throw new Error(e);
        }
    }
    @Query(() => [Farmer], { nullable: true })
    async getAllFarmers(): Promise<[Farmer]> {
        return Farmers.find({});
    }
    @Mutation(() => Farmer)
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
            id: oneFarmer.id
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
}

const errors = {
    error: 'farmer not found'
};

export { HelloResolver };
