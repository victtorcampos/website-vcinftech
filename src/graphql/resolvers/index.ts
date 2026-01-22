// src/graphql/resolvers/index.ts
// Arquivo central que exporta todos os resolvers

import { helloResolver } from './helloResolver';

// Função para fazer merge de múltiplos resolvers
function mergeResolvers(...resolverObjects: Record<string, unknown>[]) {
  const merged: Record<string, Record<string, unknown>> = {};

  for (const resolver of resolverObjects) {
    for (const [type, fields] of Object.entries(resolver)) {
      if (!merged[type]) {
        merged[type] = {};
      }
      Object.assign(merged[type], fields);
    }
  }

  return merged;
}

// Exporta todos os resolvers combinados
// Adicione novos resolvers aqui conforme o projeto cresce
export const resolvers = mergeResolvers(
  helloResolver,
  // futureResolver,
  // userResolver,
  // productResolver,
);
