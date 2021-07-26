import { ArgsType, Field } from 'type-graphql';
import { MaxLength } from 'class-validator';
@ArgsType()
class farmerArgs {
    @Field({ nullable: true })
    @MaxLength(30)
    name?: string;
    @Field({ nullable: true })
    @MaxLength(30)
    phone?: string;
    @Field({ nullable: true })
    @MaxLength(30)
    city?: string;
    @Field({ nullable: true })
    @MaxLength(30)
    email?: string;
    @Field({ nullable: true })
    @MaxLength(30)
    password?: string;
    @Field({ nullable: true })
    @MaxLength(30)
    confirmPassword?: string;
}
@ArgsType()
class loginArgs {
    @Field({ nullable: true })
    @MaxLength(30)
    email?: string;
    @Field({ nullable: true })
    @MaxLength(30)
    password?: string;
}
export { farmerArgs, loginArgs };
