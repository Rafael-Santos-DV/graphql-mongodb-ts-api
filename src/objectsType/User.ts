import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class TypeShowUser {
  @Field((type) => ID)
  id: string;

  @Field()
  email: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field((type) => [String])
  games: string[];
}

@ObjectType()
export class TypeCreateUser {
  @Field((type) => ID)
  id: string;

  @Field()
  email: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  password: string;

  @Field((type) => [String])
  games: string[];
}
