
//  get games
// route GET /games

const getGames = (req,res) => {
    res.status(200).json({message: "Get Games"})
}

// description get game by id
// route GET /games/:id

const getGamesById = (req,res) => {
    res.status(200).json({message: "Get Games by id"})
}

// description get game by genre
// route GET /games/:genre

const getGamesByGenre = (req,res) => {
    res.status(200).json({message: "Get Games by genre"})
}
// description create game
// route POST /games

const createGames = (req,res) => {
    res.status(200).json ({message: "Create Game"})
}
// description update game
// route PUT /games/:id

const updateGameById = (req,res) => {
    res.status(200).json({message: `update game ${req.params.id}`})
}
// description delete game
// route DELETE /games/:id

const deleteGameById = (req,res) => {
    res.status(200).json({message: `delete game ${req.params.id}`})
}


export {
    getGames,
    getGamesById,
    getGamesByGenre,
    createGames,
    updateGameById,
    deleteGameById
};