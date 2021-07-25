import { Resolver, Query, Mutation, Args } from 'type-graphql';
// const bcrypt = require('bcrypt');

import { Farmer } from '../queries/queries';
const Farmers = require('../../Models/farmer');
import { farmerArgs } from '../argsTypes';

@Resolver()
class HelloResolver {
    @Query(() => [Farmer], { nullable: true })
    async getAllFarmers(): Promise<Farmer> {
        return Farmers.find({});
    }
    // @Query(() => Farmer, { nullable: true })
    // async login(): Promise<Farmer> {
    //     return { name, phone, city };
    // }
    @Mutation(() => Farmer)
    async createFarmer(
        @Args()
        { name, phone, city, email, password, confirmPassword }: farmerArgs
    ): Promise<{}> {
        // const hashedPassword = await bcrypt.hash(password, 10);
        // if (bcrypt.compare(hashedPassword, confirmPassword)) {
        const newFarmer = Farmers({
            name: name,
            phone: phone,
            city: city,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        });
        newFarmer.save();
        console.log(newFarmer);
        return { name, phone, city, email, password, confirmPassword };
        // }
        // return {};
    }
}
export { HelloResolver };
