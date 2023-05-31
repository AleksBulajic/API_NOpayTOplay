import mongoose from "mongoose";
const Schema = mongoose.Schema;

const myFavoritesSchema = new Schema ({
    game: {
      type: Schema.Types.ObjectId,
      ref: gamesSchema
    }
  })

  export default mongoose.model('Favorite',gamesSchema);