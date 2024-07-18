import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import searchBookRoutes from "./routes/searchBooks";
import readBookRoutes from "./routes/readBooks";
import readingBookRoutes from "./routes/readingBooks";
import wishBookRoutes from "./routes/wishBooks";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_ORIGIN,
  })
);
app.use(bodyParser.json());

const db: string = process.env.MONGODB_CONNECTION || "";

mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));

app.use("/api/books/search", searchBookRoutes);
app.use("/api/books/read", readBookRoutes);
app.use("/api/books/reading", readingBookRoutes);
app.use("/api/books/wish", wishBookRoutes);

export default app;
