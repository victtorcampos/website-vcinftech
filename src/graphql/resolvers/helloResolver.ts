// src/graphql/resolvers/helloResolver.ts
// Resolver para a query Hello

export const helloResolver = {
  Query: {
    hello: (): string => {
      return 'Hello World!';
    },
  },
};
