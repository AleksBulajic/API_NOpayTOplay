import mongoose from "mongoose";
const Schema = mongoose.Schema;


 export const Game = new Schema({  
  
    title: {
      type: String,
      required:  false
    },
    thumbnail: {
      type: String ,
      required: false
    },
    short_description: {
      type: String,
      required: false
    },
    genre: {
      type: String,
      required: false
    },
    platform: {
      type: String,
      required: false
    },
    publisher: {
      type: String,
      required: false
    },
    developer: {
      type: String,
      required: false
    },
    release_date: {
      type: String,
      required: false
    },
    freetogame_profile_url: {
     type:  String,
     required: false
  }
})

 
export default mongoose.model('games', Game);