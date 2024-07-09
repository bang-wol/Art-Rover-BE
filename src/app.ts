import express from 'express';
import dotenv from 'dotenv';
import searchBookRoutes from './routes/searchBookRoutes';
import bookDetailRoutes from './routes/bookDetailRoutes'

dotenv.config();

const app = express();

app.use('/search-books', searchBookRoutes);
app.use('/book', bookDetailRoutes);

export default app;
