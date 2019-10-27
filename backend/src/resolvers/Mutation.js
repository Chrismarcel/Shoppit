const Mutations = {
  createItem: async (parent, args, ctx, info) => {
    // TODO: Check if uses are logged in
    const { mutation } = ctx.db;
    const item = await mutation.createItem({ data: { ...args } }, info);
    return item;
  }
};

module.exports = Mutations;
