require("dotenv").config();

import { ApolloServer } from "apollo-server-express";
import express from "express";
import "reflect-metadata";
import { buildSchema } from "type-graphql";

// resolvers
import { BooksResolver } from "./resolvers/books.resolver";

const runApolloServer = async (): Promise<ApolloServer> => {
  const schema = await buildSchema({
    resolvers: [BooksResolver],
    emitSchemaFile: true,
    validate: false,
  });

  const server = new ApolloServer({ schema });
  const app = express();
  await server.start();

  server.applyMiddleware({ app });

  const host = process.env.HOST || "localhost";
  const port = process.env.PORT || 4000;

  app.listen({ port: process.env.PORT }, () =>
    console.log(
      `🚀 Server ready and listening at http://${host}:${port}${server.graphqlPath}`
    )
  );

  return server;
};

export default runApolloServer;
