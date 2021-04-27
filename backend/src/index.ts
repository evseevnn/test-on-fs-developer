require("dotenv").config();
import runApolloServer from "./apollo-server";
import { connectToDb } from "./db";

const main = async () => {
  // Connect to database
  await connectToDb(process.env.MONGO_URI);

  // Running apollo server
  await runApolloServer();
};

main().catch((error) => {
  console.log(error, "error");
});

process.on("unhandledRejection", (error) => {
  console.log("unhandledRejection", error);
});
