const fs = require('fs');
const axios = require('axios');

axios.get('https://www.freetogame.com/api/games')
  .then((response) => {
    const games = response.data;

    fs.writeFile('server/data/games.json', JSON.stringify(games, null, 2), (err) => {
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