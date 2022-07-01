import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import path from "path";
import { buildSchema } from "type-graphql";
import CreateConnnectionMongodb from "./database/mongodb";
import { UserResolver } from "./resolvers/User";

async function main() {
  await CreateConnnectionMongodb();

  const schema = await buildSchema({
    resolvers: [UserResolver],
    emitSchemaFile: path.resolve(__dirname, "utils", "schema.gql"),
  });

  const server = new ApolloServer({
    schema,
  });

  const { url } = await server.listen();

  console.log(`running in url: ${url}`);
}

main();
