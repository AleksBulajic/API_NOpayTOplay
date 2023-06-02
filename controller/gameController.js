import Game from "../models/gameModel.js"



//  get games
// route GET /games
export const getGames =  async (req,res) => {

   try{
    const games = await Game.find()
    console.log(games)
    res.json(games)
   }catch(error){
    console.log(error)
    res.status(500).json({error: error.message})
   }

} 

// description get game by id
// route GET /games/:id

export const getGamesById =  async (req,res) => {
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

// description get game by genre
// route GET /games/:genre
export const getGamesByGenre = async (req, res) => {
    try {
        const games = await Game.find({ genre: req.params.genre });
        console.log(games)
        if (games.length === 0) {
            return res.status(404).json({ message: 'No games found with the specified genre' });
        }
        res.status(200).json(games);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};
// get game by title /favorite/title/:title
export const getGamesByTitle = async (req, res) => {
    try {
        const games = await Game.find({ title: req.params.title });
        console.log(games)
        if (games.length === 0) {
            return res.status(404).json({ message: 'No games found with the specified Title' });
        }
        res.status(200).json(games);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};


// description create game
// route POST /games
// TODO: adding a game wiht  my own data
export const createGames = async (req,res) => {
    try{
        const game = new Game(req.body)
        await game.save()
        res.status(201).json(game)

    }catch(error){
        console.log(error)
        res.status(500).json({error: error.message})
       }
}
// need to double check hot to create games wiht my own data  not just copy from an existing game

// description update game
// route PUT /games/:id

export const updateGameById = async (req, res) => {
    const gameId = req.params.id;
    const updateGame = req.body;

    Game.findByIdAndUpdate(gameId, updateGame, { new: true })
        .then(game => {
            if (!game) {
                return res.status(404).json({ error: 'Game not found' });
            }
            res.json(game);
        })
        .catch(error => {
            res.status(500).json({ error: error.message });
        });
};

// description delete game
// route DELETE /games/:id

export const deleteGameById =  async (req,res) => {
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
