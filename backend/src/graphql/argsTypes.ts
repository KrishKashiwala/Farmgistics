import { ArgsType, Field } from 'type-graphql';
import { MaxLength } from 'class-validator';
@ArgsType()
class farmerArgs {
    @Field({ nullable: true })
    @MaxLength(30)
    name: string;
}
export { farmerArgs };
