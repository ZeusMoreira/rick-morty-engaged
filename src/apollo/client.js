import { ApolloClient, InMemoryCache } from '@apollo/client/core';
export const apolloClient = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache()
});
