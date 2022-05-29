import { createUploadLink } from 'apollo-upload-client';
import { setContext } from '@apollo/client/link/context';

export const uploadLink = createUploadLink({
  uri: `${process.env.API_GATEWAY}/graphql`,
});

export const authLink = setContext((_, { headers, token }) => {
  return {
    headers: {
      ...headers,
    },
  };
});
