import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv();

const url = process.env.MONGO_URL;
export const dbConnetion = mongoose
  .connect(url)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));
