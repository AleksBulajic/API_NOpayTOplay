import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import db from './db/connection.js';
import gamesRoutes from './routes/gamesRoutes.js';
import favoriteRoutes from './routes/favoriteRoutes.js'

const port = process.env.PORT || 6000;

dotenv.config();

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/games', gamesRoutes);
app.use('/favorite', favoriteRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
