import { ObjectType, Field, InterfaceType } from "type-graphql";

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
  id: string;
  name: string;
  phone: string;
  city: string;
  email: string;
  password: string;
  confirmPassword: string;
  token: string;
  redirect: string;
  image: string;
}

// posts
@InterfaceType()
abstract class post {
  @Field(() => String, { nullable: true })
  farmerId?: String;
  @Field(() => String, { nullable: true })
  cropType?: String;
  @Field(() => String, { nullable: true })
  title: String;
  @Field(() => String, { nullable: true })
  des: String;
  @Field(() => String, { nullable: true })
  price: String;
  @Field(() => String, { nullable: true })
  city?: String;
  @Field(() => String, { nullable: true })
  url?: String;
}

@ObjectType({ implements: post, description: "nothing here" })
class Post implements post {
  title: String;
  farmerId?: String;
  cropType?: String;
  des: String;
  price: String;
  city?: String;
  url?: String;
}

//
@InterfaceType()
abstract class user extends post {
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
}
export { Farmer, Post, User };
