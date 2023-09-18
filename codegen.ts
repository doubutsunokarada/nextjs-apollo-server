import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "src/libs/graphql/schema.graphql",
  documents: ["src/**/*.tsx", "src/**/*.ts"],
  ignoreNoDocuments: true,
  generates: {
    "src/libs/graphql/generated/resolvers-types.ts": {
      config: {
        useIndexSignature: true,
      },
      plugins: ["typescript", "typescript-resolvers"],
    },
  },
};

export default config;
