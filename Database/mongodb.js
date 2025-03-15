import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config(); // Load .env variables

import { DB_URI, NODE_ENV } from "../config/env.js";

if (!DB_URI) {
  throw new Error(
    "please define mongodb_uri env inside .env.<development/production>.local"
  );
}

const connectToDatabase = async () => {
  // console.log("🔄 Attempting to connect to MongoDB...");
  try {
    await mongoose.connect(DB_URI);
    console.log(
      `✅ Connected to database in ${NODE_ENV || "development"} mode`
    );
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    process.exit(1);
  }
};

export default connectToDatabase;
