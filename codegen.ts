import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://rickandmortyapi.com/graphql",
  documents: "**/*.gql.ts",
  generates: {
    "./graphql-types/": {
      preset: "client",
      plugins: ["typescript", "typescript-operations"],
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
