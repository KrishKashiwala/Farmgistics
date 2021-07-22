import { ObjectType, Field, InterfaceType } from 'type-graphql';

@InterfaceType()
abstract class farmer {
    @Field({ nullable: true })
    name: String;
}

@ObjectType({ implements: farmer })
class Farmer implements farmer {
    name: String;
}
export { Farmer };
