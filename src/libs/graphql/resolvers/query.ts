import { QueryResolvers } from "../generated/resolvers-types";

const users: QueryResolvers["users"] = (parent, args, contextValue, info) => {
  return contextValue.prisma.user.findMany({
    profile: true,
    posts: {
      where: {
        published: args.published
      }
    }
  })
}