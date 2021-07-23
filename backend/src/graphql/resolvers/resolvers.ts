import { Resolver, Query, Mutation, Args, Ctx } from 'type-graphql';
import { Farmer } from '../queries/queries';
const Farmers = require('../../Models/farmer');
import { farmerArgs } from '../argsTypes';

@Resolver()
class HelloResolver {
    @Query(() => [Farmer], { nullable: true })
    async getAllFarmers(): Promise<Farmer> {
        return Farmers.find({});
    }
    @Mutation(() => Farmer)
    async createUser(
        @Args() { name }: farmerArgs,
        @Ctx() { req }: any
    ): Promise<{}> {
        // if (Farmers.findOne({ name: name })) {
        //     return 'farmer data already exists';
        // }
        if (req.session.userId) {
            console.log('working without intellisense');
        }
        const newFarmer = Farmers({
            name: name
        });
        newFarmer.save();
        console.log(newFarmer);
        return { name };
    }
}
export { HelloResolver };
