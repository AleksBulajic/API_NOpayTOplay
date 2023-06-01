import Favorite from '../models/favoritModules.js';
import Game from '../models/gamesModels.js';


// Create your favorite game
// Route: POST /favorite
export const createFavorite = async (req, res) => {
    try {
        const gameId = req.params.game;

        // Check if the game with the provided ID exists in the Game model
        const game = await Game.findOne({ _id: gameId });
        if (!game) {
            return res.status(404).json({ error: 'Game not found' });
        }

        const favorite = new Favorite({ game: game });
        await favorite.save();

        res.status(201).json(favorite);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};








//get your favorite game by id
//route GET /favorite/:id
export const getFavoriteById =  async (req,res) => {
    res.status(200).json({message: "Get favorite Game by id"})
}

// update your favorite game
// route 
export const updateFavoriteById =  async (req,res) => {
    res.status(200).json({message: `update game ${req.params.id}`})
}

// delete facorite game
// route DELETE /favorite/:id
 export const deleteFavoriteById =  async (req,res) => {
    res.status(200).json({message: `delete favorite game ${req.params.id}`})
}

