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
    async createFarmer(@Args() { name, phone, city }: farmerArgs): Promise<{}> {
        // if (Farmers.findOne({ name: name })) {
        //     return 'farmer data already exists';
        // }
        // if (req.session.userId) {
        //     console.log('working without intellisense');
        // }
        const newFarmer = Farmers({
            name: name,
            phone: phone,
            city: city
        });
        newFarmer.save();
        console.log(newFarmer);
        return { name, phone, city };
    }
}
export { HelloResolver };
