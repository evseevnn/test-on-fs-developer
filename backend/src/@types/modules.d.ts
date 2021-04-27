import { ApolloServerTestClient } from "apollo-server-testing";
import { MongoMemoryServer } from "mongodb-memory-server";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      HOST?: string;
      MONGO_URI: string;
    }
  }
}
