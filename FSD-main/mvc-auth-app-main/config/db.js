import mongoose from "mongoose";

const connectDB = async (mongoURI, dbName) => {
  try {
    await mongoose.connect(mongoURI, {
      dbName: dbName
    });

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};

export default connectDB;