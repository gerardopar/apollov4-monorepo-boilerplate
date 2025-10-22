import { Resolvers } from "../graphql/__generated__/graphql.js";

export const resolvers: Resolvers = {
  Query: {
    hello: (_parent, args, _ctx) => {
      return `Hello ${args.name ?? "stranger"}`;
    },
  },
};
