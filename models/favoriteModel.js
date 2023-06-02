import mongoose from "mongoose";
import Game from "../models/gameModel.js"

const Schema = mongoose.Schema;



const Favorite = new Schema ({
 
  game: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Game'
    }
  })

  export default mongoose.model('favorites',Favorite);

