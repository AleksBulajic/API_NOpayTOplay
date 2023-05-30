const mongoose = require('mongoose');

const gamesSchema = new Schema({  
    
    title: {
      type: String
      //add required
    },
    thumbnail: String ,
    short_description: String,
    genre: String,
    platform: String,
    publisher: String,
    developer: String,
    release_date: String,
    freetogame_profile_url: String
  })

  const Games = mongoose.model('Games',gamesSchema);

  module.export = Games

