import { Resolver, Query, Mutation, Args } from 'type-graphql';
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
    async createUser(@Args() { name }: farmerArgs): Promise<{}> {
        const newFarmer = Farmers({
            name: name
        });
        newFarmer.save();
        return { name };
    }
}
export { HelloResolver };
