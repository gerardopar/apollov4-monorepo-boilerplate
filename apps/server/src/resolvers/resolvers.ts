import { Resolvers } from "../generated/graphql.js";

export const resolvers: Resolvers = {
  Query: {
    hello: (_parent, args, _ctx) => {
      return `Hello ${args.name ?? "stranger"}`;
    },
  },
};
