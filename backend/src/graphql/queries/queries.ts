import { ObjectType, Field, InterfaceType} from 'type-graphql';

@InterfaceType()
abstract class farmer {
    @Field({ nullable: true })
    id: String;
    @Field({ nullable: true })
    name: String;
    @Field({ nullable: true })
    phone: String;
    @Field({ nullable: true })
    email: String;
    @Field({ nullable: true })
    city: String;
    @Field({ nullable: true })
    password: String;
    @Field({ nullable: true })
    confirmPassword: String;
    @Field({ nullable: true })
    token: String;
}

@ObjectType({ implements: farmer })
class Farmer implements farmer {
    id: String;
    name: String;
    phone: String;
    city: String;
    email: String;
    password: String;
    confirmPassword: String;
    token: String;
}
export { Farmer };
