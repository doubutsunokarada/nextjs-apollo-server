import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { NextRequest } from "next/server";
import { users } from "@/libs/graphql/resolvers/query";
import { Resolvers } from "@/libs/graphql/generated/resolvers-types";
import {
  createData,
  createPost,
  deletePost,
  updatePost,
  updateProfile,
  upsertPost,
} from "@/libs/graphql/resolvers/mutation";
import { readFileSync } from "fs";
import { join } from "path";

const resolvers: Resolvers = {
  Query: {
    users,
  },
  Mutation: {
    createData,
    createPost,
    upsertPost,
    updatePost,
    deletePost,
    updateProfile,
  },
};

const typeDefs = readFileSync(
  join(process.cwd(), "src", "libs", "graphql", "schema.graphql")
).toString("utf-8");

const server = new ApolloServer<{}>({
  resolvers,
  typeDefs,
});

const apolloServer = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req) => ({ req }),
});

export { apolloServer as GET, apolloServer as POST };
