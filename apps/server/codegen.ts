import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "src/schema/typeDefs.graphql",
  generates: {
    "src/graphql/__generated__/graphql.ts": {
      plugins: ["typescript", "typescript-resolvers"],
    },
  },
  ignoreNoDocuments: true,
};

export default config;
