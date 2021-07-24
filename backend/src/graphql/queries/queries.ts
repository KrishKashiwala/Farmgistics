import { ObjectType, Field, InterfaceType } from 'type-graphql';

@InterfaceType()
abstract class farmer {
    @Field({ nullable: true })
    name: String;
    @Field({ nullable: true })
    phone: String;
    @Field({ nullable: true })
    city: String;
}

@ObjectType({ implements: farmer })
class Farmer implements farmer {
    name: String;
    phone: String;
    city: String;
}
export { Farmer };
