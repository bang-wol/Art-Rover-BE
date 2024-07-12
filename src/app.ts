import express from 'express';
import dotenv from 'dotenv';
import mongoose from "mongoose";
import searchBookRoutes from "./routes/searchBooks";

dotenv.config();

const app = express();

const db: string = process.env.MONGODB_CONNECTION || "";

mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));
app.use("/api/books/search", searchBookRoutes);
export default app;
