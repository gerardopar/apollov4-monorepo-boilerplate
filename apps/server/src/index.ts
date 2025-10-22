import path from "path";
import { ApolloServer } from "@apollo/server";
import { loadSchema } from "@graphql-tools/load";
import { startStandaloneServer } from "@apollo/server/standalone";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";

import { resolvers } from "./resolvers/resolvers";

const schemaPath = path.resolve("src/schema/typeDefs.graphql");

export const startServer = async () => {
  const typeDefs = await loadSchema(schemaPath, {
    loaders: [new GraphQLFileLoader()],
  });

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀 Schema-first server ready at ${url}`);
};

startServer();
