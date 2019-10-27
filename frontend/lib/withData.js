import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';

const createClient = ({ headers }) => new ApolloClient({
  uri: process.env.ENDPOINT,
  request: (operation) => {
    operation.setContext({
      fetchOptions: {
        credentials: 'include'
      },
      headers
    });
  }
});

export default withApollo(createClient);
