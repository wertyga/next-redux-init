import { useMemo } from 'react';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { uploadLink, authLink } from './links';

let apolloClient;

export const createApolloClient = () =>
  new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: authLink.concat(uploadLink),
    cache: new InMemoryCache(),
  });

export const initializeApollo = (initialState = null): ApolloClient<any> => {
  const _apolloClient = apolloClient ?? createApolloClient();
  if (initialState) {
    const existingCache = _apolloClient.extract();
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }

  if (typeof window === 'undefined') return _apolloClient;
  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
};

export const useApollo = (initialState = null) =>
  useMemo(() => initializeApollo(initialState), [initialState]);
