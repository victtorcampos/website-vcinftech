// src/pages/api/graphql.ts
// Endpoint GraphQL usando Apollo Server com Next.js

import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { NextApiRequest, NextApiResponse } from 'next';

import { typeDefs } from '@/graphql/schema';
import { resolvers } from '@/graphql/resolvers';
import { createContext, GraphQLContext } from '@/graphql/context';

// Cria a instância do Apollo Server
const server = new ApolloServer<GraphQLContext>({
  typeDefs,
  resolvers,
  introspection: true, // Habilita introspection para ferramentas como Insomnia
});

// Handler para Next.js API Routes
const handler = startServerAndCreateNextHandler<NextApiRequest, NextApiResponse>(server, {
  context: async (req, res) => createContext({ req, res }),
});

export default handler;

// Configuração necessária para Apollo Server no Next.js
export const config = {
  api: {
    bodyParser: false,
  },
};
