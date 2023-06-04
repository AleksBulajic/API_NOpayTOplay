import Favorite from '../models/favoriteModel.js';
import Game from '../models/gameModel.js';


// Create your favorite game
// Route: POST /favorite/create
export const createFavorite = async (req, res) => {
    try{
        console.log(req.body)
        const   gameId  = req.params.id;
        
        console.log({gameId})
        
        // check if the game exist 
        const game = await Game.findById(gameId);
        console.log(game)
        if(!game){
            return res.status(404).json({ message: 'Game not found'});
        }
            // Create the favorite
            const favorite = new Favorite({ game: gameId  });
            await favorite.save();
            res.status(200).json({ favorite });

        }  catch (error) {
              console.error('Error creating favorite:', error);
              res.status(500).json({ message: 'Internal server error' });
        }
};

//get your favorite game by id
//route GET /favorite/:id
export const getFavoriteById =  async (req,res) => {
    
    console.log(req.params.id)
   const gameId = req.params.id;

     Game.findById(gameId)
     .then(game => {
        if(!game) {
            return res.status(404).json({error: "Game not found"})
        }
        res.json(game)
     })
     .catch(error => res.status(500).json({error: error.message}));
}

// update your favorite game
// route 
export const updateFavoriteById =  async (req,res) => {
    res.status(200).json({message: `update game ${req.params.id}`})
}

// delete facorite game
// route DELETE /favorite/:id
 export const deleteFavoriteById =  async (req,res) => {
    const gameId = req.params.id;

    Game.findByIdAndRemove(gameId)
    .then(game => {
     if(!game){
         return res.status(404).json({error: 'Game not found'});
     }
     res.json({message: 'Game deleted succesfully'})
    })
    .catch(error => res.status(500).json({error: error.message}));
}

