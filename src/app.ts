import express from 'express';
import dotenv from 'dotenv';
import searchBookRoutes from './routes/searchBookRoutes';
import bookDetailRoutes from './routes/bookDetailRoutes'
import mongoose from "mongoose";

dotenv.config();

const app = express();

app.use('/search-books', searchBookRoutes);
app.use('/book', bookDetailRoutes);
const db: string = process.env.MONGODB_CONNECTION || "";

mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));
export default app;
