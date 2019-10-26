const { GraphQLServer } = require('graphql-yoga');
const { Query, Mutations } = require('./resolvers');
const db = require('./db');

const createServer = () => new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers: {
    Mutations,
    Query
  },
  resolverValidationOptions: {
    requireResolversForResolveType: false
  },
  context: (req) => ({ ...req, db })
});

module.exports = createServer;
