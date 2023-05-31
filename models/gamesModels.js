import mongoose from "mongoose";
const Schema = mongoose.Schema;


const gamesSchema = new Schema({  
    
    title: {
      type: String,
      required:  true,
    },
    thumbnail: {
      type: String ,
      required: false
    },
    short_description: {
      type: String,
      required: true
    },
    genre: {
      type: String,
      required: true
    },
    platform: {
      type: String,
      required: true
    },
    publisher: {
      type: String,
      required: true
    },
    developer: {
      type: String,
      required: true
    },
    release_date: {
      type: String,
      required: true
    },
    freetogame_profile_url: {
     type:  String,
     required: false
  }
})

 
export default mongoose.model('Games',gamesSchema);

