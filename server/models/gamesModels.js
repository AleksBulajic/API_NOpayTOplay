import mongoose from "mongoose";
const Schema = mongoose.Schema;


const gamesSchema = new Schema({  
    
    title: {
      type: String,
      require:  true,
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

 
export default mongoose.model('Games',gamesSchema);

