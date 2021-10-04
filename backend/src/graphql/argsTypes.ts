import { ArgsType, Field } from "type-graphql";
import { MaxLength } from "class-validator";
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
  @Field({ nullable: true })
  @MaxLength(1000)
  image?: string;
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
@ArgsType()
class postTypes {
  @Field({ nullable: true })
  @MaxLength(30)
  farmerId?: String;
  @Field({ nullable: true })
  @MaxLength(30)
  title: string;
  @Field({ nullable: true })
  @MaxLength(30)
  des: string;
  @Field({ nullable: true })
  @MaxLength(30)
  price: string;
  @Field({ nullable: true })
  @MaxLength(30)
  city: string;
  @Field({ nullable: true })
  @MaxLength(1000)
  url: string;
}
@ArgsType()
class simpleId {
  @Field({ nullable: true })
  @MaxLength(30)
  farmerId: String;
  @Field({ nullable: true })
  @MaxLength(30)
  id: String;
}
export { farmerArgs, loginArgs, postTypes, simpleId };
