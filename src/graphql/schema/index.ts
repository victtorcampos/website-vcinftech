// src/graphql/schema/index.ts
// Arquivo central que exporta todos os typeDefs

import { helloTypeDefs } from './hello';

// Array de typeDefs para fácil extensão
// Adicione novos typeDefs aqui conforme o projeto cresce
export const typeDefs = [
  helloTypeDefs,
  // futureTypeDefs,
  // userTypeDefs,
  // productTypeDefs,
];
