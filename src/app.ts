import express from 'express';
import dotenv from 'dotenv';
import searchBookRoutes from './routes/searchBookRoutes';

dotenv.config();

const app = express();

app.use('/search-books', searchBookRoutes);

export default app;
