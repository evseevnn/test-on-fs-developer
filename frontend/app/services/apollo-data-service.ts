import { ApolloClient, InMemoryCache } from '@apollo/client';
console.log(process.env.GRAPHQL_URL);
export const apolloDataService = new ApolloClient({
  uri: process.env.GRAPHQL_URL,
  cache: new InMemoryCache(),
});
