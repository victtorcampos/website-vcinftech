// src/app/api/graphql/route.ts
// Endpoint GraphQL usando Apollo Server com Next.js App Router

import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { NextRequest } from 'next/server';

import { typeDefs } from '@/graphql/schema';
import { resolvers } from '@/graphql/resolvers';

// Cria a instância do Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true, // Habilita introspection para ferramentas como Insomnia
});

// Handler para Next.js App Router
const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req) => ({ req }),
});

export { handler as GET, handler as POST };
