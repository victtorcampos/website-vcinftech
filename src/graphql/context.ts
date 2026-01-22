// src/graphql/context.ts
// Contexto do GraphQL - preparado para auth, db, etc.

import { NextApiRequest, NextApiResponse } from 'next';

export interface GraphQLContext {
  req: NextApiRequest;
  res: NextApiResponse;
  // Adicione aqui conforme necessário:
  // user?: User;
  // db?: Database;
  // token?: string;
}

export async function createContext({
  req,
  res,
}: {
  req: NextApiRequest;
  res: NextApiResponse;
}): Promise<GraphQLContext> {
  // Aqui você pode adicionar lógica de autenticação, 
  // conexão com banco de dados, etc.
  
  // Exemplo futuro:
  // const token = req.headers.authorization || '';
  // const user = await validateToken(token);
  
  return {
    req,
    res,
    // user,
    // db,
  };
}
