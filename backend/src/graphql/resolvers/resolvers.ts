import { Resolver, Query } from 'type-graphql';
import { Farmer } from '../queries/queries';
const Farmers = require('../../Models/farmer');
@Resolver()
class HelloResolver {
    @Query(() => [Farmer], { nullable: true })
    async getAllFarmers(): Promise<Farmer> {
        return Farmers.find({});
    }
}
export { HelloResolver };
