import { ApolloServer } from 'apollo-server-express/dist/ApolloServer';
import {
  ApolloServerTestClient,
  createTestClient,
} from 'apollo-server-testing';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { Connection } from 'mongoose';
import runApolloServer from '../apollo-server';
import { connectToDb } from '../db';

export type InitializedInternalServices = {
  db: MongoMemoryServer;
  dbConnection: Connection;
  apolloServer: ApolloServer;
  apolloClient: ApolloServerTestClient;
};

const beforeAllSetup = async (): Promise<InitializedInternalServices> => {
  // Start in memory db
  const db = new MongoMemoryServer({ autoStart: true });
  const mongodbUri = await db.getUri();

  // create connection to in memory database
  const dbConnection = await connectToDb(mongodbUri);

  // append mock data
  const collection = await dbConnection.createCollection('library');
  await collection.insertMany(require('../tests/mock-data/books.json'), {
    w: 'majority',
  });

  // Run GraphQL server
  const apolloServer = await runApolloServer();

  // Init apollo client
  const apolloClient = createTestClient(apolloServer);

  return { db, dbConnection, apolloServer, apolloClient };
};

export default beforeAllSetup;
