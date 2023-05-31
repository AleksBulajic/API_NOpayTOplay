import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/connection.js';
import gamesRoutes from './routes/gamesRoutes.js';

const port = process.env.PORT || 6000;

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/games', gamesRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));