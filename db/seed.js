//---------------------------------------------------------------------------------------------
// Import the necessary modules
const fs = require('fs');
const axios = require('axios');


// Make a GET request to the specified URL
axios.get('https://www.freetogame.com/api/games')
  .then((response) => {
        // Retrieve the data from the response
    const games = response.data;


        // Write the data to a file named 'games.json'
    fs.writeFile('data/games.json', JSON.stringify(games, null, 2), (err) => {
      if (err) {
        console.error('Error writing to file:', err);
      } else {
        console.log('Data imported successfully.');
      }
    });
  })
  .catch((error) => {
    console.error('Error fetching data from API:', error);
  });

// data was successfully imported ^^^^^^^^^^^^^^^^^^^^^^^^^^^-------------------------------------------------------------------


// ----------------------------------------------------------------
import db from './connection.js'
import Game from '../models/gamesModels.js'
import games from '../data/games.json' assert {type: 'json'}
// games.map((game) => ({...game, favorited: false}));

// Define a function to seed the data into the database
const seedData = async () => {
      // Drop the existing database
  db.dropDatabase()
    
  // Insert the games data into the database
  await Game.insertMany(games)
  db.close()

}
// Call the seedData function to start seeding the data
seedData()

//-----data imporeted to mongosh----------//



