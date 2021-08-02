import { ObjectType, Field, InterfaceType } from 'type-graphql';

@InterfaceType()
abstract class farmer {
    @Field(() => String, { nullable: true })
    id: String;
    @Field(() => String, { nullable: true })
    name: String;
    @Field(() => String, { nullable: true })
    phone: String;
    @Field(() => String, { nullable: true })
    email: String;
    @Field(() => String, { nullable: true })
    city: String;
    @Field(() => String, { nullable: true })
    password: String;
    @Field(() => String, { nullable: true })
    confirmPassword: String;
    @Field(() => String, { nullable: true })
    token: String;
    @Field(() => String, { nullable: true })
    redirect: String;
    @Field(() => String, { nullable: true })
    image: String;
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
    redirect: String;
    image: String;
}

// posts
@InterfaceType()
abstract class post {
    @Field(() => String, { nullable: true })
    farmerId: String;
    @Field(() => String, { nullable: true })
    title: String;
    @Field(() => String, { nullable: true })
    des: String;
}

@ObjectType({ implements: post, description: 'nothing here' })
class Post implements post {
    title: String;
    farmerId: String;
    des: String;
}

//
@InterfaceType()
abstract class user {
    @Field(() => String, { nullable: true })
    id: String;
    @Field(() => String, { nullable: true })
    name: String;
    @Field(() => String, { nullable: true })
    phone: String;
    @Field(() => String, { nullable: true })
    email: String;
    @Field(() => String, { nullable: true })
    city: String;
    @Field(() => String, { nullable: true })
    password: String;
    @Field(() => String, { nullable: true })
    confirmPassword: String;
    @Field(() => String, { nullable: true })
    token: String;
    @Field(() => String, { nullable: true })
    redirect: String;
    @Field(() => String, { nullable: true })
    image: String;
    @Field(() => post, { nullable: true })
    post: Post[];
}
@ObjectType({ implements: user })
class User extends Post {
    id: String;
    name: String;
    phone: String;
    email: String;
    city: String;
    password: String;
    confirmPassword: String;
    token: String;
    redirect: String;
    image: String;
    post: Post[];
}
export { Farmer, Post, User };
