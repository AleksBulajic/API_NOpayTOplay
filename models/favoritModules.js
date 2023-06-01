import mongoose from "mongoose";

const Schema = mongoose.Schema;



const Favorite = new Schema ({
 
  game: {
      type: Schema.Types.ObjectId,
      ref: 'Game'
    }
  })

  export default mongoose.model('favorite',Favorite);

