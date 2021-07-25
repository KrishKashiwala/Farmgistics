import { Resolver, Query, Mutation, Args } from 'type-graphql';
const bcrypt = require('bcrypt');
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
        const hashedPassword = await bcrypt.hash(password, 10);

        if (await bcrypt.compare(confirmPassword, hashedPassword)) {
            const newFarmer = Farmers({
                name: name,
                phone: phone,
                city: city,
                email: email,
                password: hashedPassword,
                confirmPassword: confirmPassword
            });
            newFarmer.save();
            console.log(newFarmer);
            console.log(
                'this is password check' +
                    (await bcrypt.compare(confirmPassword, hashedPassword))
            );
            return { name, phone, city, email, password, confirmPassword };
        }
        return { name, phone, city, email, password, confirmPassword };
    }
}
export { HelloResolver };
