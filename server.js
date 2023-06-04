
// Import necessary modules
import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import db from './db/connection.js';
import gamesRoutes from './routes/gamesRoutes.js';
import favoriteRoutes from './routes/favoriteRoutes.js';


// Set the port for the server
const port = process.env.PORT || 3030;

// Load environment variables from .env file
dotenv.config();


// Create an instance of the Express application
const app = express();
// Enable Cross-Origin Resource Sharing
app.use(cors());

// Middleware to log incoming requests
app.use((req, res, next) => {
  console.log(`Received ${req.method} request for ${req.url}`);
  next();
});

// Middleware to parse JSON request bodies
app.use(express.json());

// Error handling middleware for parsing errors
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError) {
    console.error(`Error parsing the body of ${req.method} request for ${req.url}`);
  }
  next(err);
});


// Middleware to parse URL-encoded request bodies
app.use(express.urlencoded({ extended: false }));

app.use('/games', gamesRoutes);
app.use('/favorite', favoriteRoutes);

// Start the server
app.listen(port, () => console.log(`Server running on port ${port}`));