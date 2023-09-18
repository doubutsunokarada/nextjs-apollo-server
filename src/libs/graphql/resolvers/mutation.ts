import { MutationResolvers } from "../generated/resolvers-types";

const createData: MutationResolvers["createData"] = (
  parent,
  args,
  contextValue,
  info
) => {
  return contextValue.prisma.user.create({
    data: {
      name: args.name,
      email: args.email,
      posts: {
        create: { title: args.title, content: args.content },
      },
      profile: {
        create: { bio: args.bio },
      },
    },
  });
};

const createPost: MutationResolvers["createPost"] = (
  parent,
  args,
  contextValue,
  info
) => {
  return contextValue.prisma.post.create({
    data: {
      author_id: Number(args.author_id),
      title: args.title,
    },
  });
};

const upsertPost: MutationResolvers["upsertPost"] = (
  parent,
  args,
  contextValue,
  info
) => {
  return contextValue.prisma.post.upsert({
    where: {
      id: Number(args.id),
    },
    update: {
      author_id: Number(args.author_id),
      title: args.title,
      content: args.content,
    },
    create: {
      author_id: Number(args.author_id),
      title: args.title,
      content: args.content,
    },
  });
};

const updatePost: MutationResolvers["updatePost"] = (
  parent,
  args,
  contextValue,
  info
) => {
  return contextValue.prisma.post.update({
    where: {
      id: Number(args.id),
    },
    data: {
      content: args.content,
      published: args.published,
    },
  });
};

const deletePost: MutationResolvers["deletePost"] = (
  parent,
  args,
  contextValue,
  info
) => {
  return contextValue.prisma.post.delete({
    where: {
      id: Number(args.id),
    },
  });
};

const updateProfile: MutationResolvers["updateProfile"] = (
  parent,
  args,
  contextValue,
  info
) => {
  return contextValue.prisma.profile.update({
    where: {
      id: Number(args.id),
    },
    data: {
      bio: args.bio,
    },
  });
};

export {
  createData,
  createPost,
  upsertPost,
  updatePost,
  deletePost,
  updateProfile,
};
