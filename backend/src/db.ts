import { connect } from "mongoose";

export const connectToDb = async (mongodbUri: string) => {
  // create connection to database
  const mongoose = await connect(mongodbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  return await mongoose.connection;
};
