import { Arg, Mutation, Query, Resolver } from "type-graphql";
import userSchema from "../schemas/userSchema";
import { v4 as uuid } from "uuid";
import { TypeCreateUser, TypeShowUser } from "../objectsType/User";
import { AES } from "crypto-js";

type User = {
  id?: string;
  email: string;
  firstName: string;
  lastName: string;
  password?: string;
  games: string[];
};

@Resolver()
export class UserResolver {
  @Query(() => TypeShowUser)
  async showUser(@Arg("id") id: string): Promise<User | {}> {
    const user = await userSchema.findOne({ id });

    if (!user) {
      return {};
    }

    return user;
  }

  @Mutation(() => TypeCreateUser)
  async createUser(
    // @Args() { email, firstName, lastName, password, games }: User
    @Arg("email") email: string,
    @Arg("firstName") firstName: string,
    @Arg("lastName") lastName: string,
    @Arg("password") password: string,
    @Arg("games") games: string
  ) {
    const hashPassword = AES.encrypt("584jj028844", password).toString();

    const user = {
      id: uuid(),
      email,
      firstName,
      lastName,
      games: eval(games) as Array<string>,
    };

    try {
      await userSchema.create({ ...user, password: hashPassword });

      return user;
    } catch (err) {
      return user;
    }
  }

  @Query(() => [TypeShowUser])
  async showUsers(): Promise<User[]> {
    const users = await userSchema.find();

    if (!users) {
      return [];
    }

    return users;
  }
}
