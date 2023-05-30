const express = require('express')
const router = express.Router()
const {  getGames,
    getGamesById,
    getGamesByGenre,
    createGames,
    updateGameById,
    deleteGameById } = require('../controller/gameController.js')


//retrive a list of all free games
router.get('/', getGames)


//retrive a speciic game by id
router.get('/:id',getGamesById)


//retrive a specific game by genre
router.get('/:genre', getGamesByGenre)
//Create a new game


router.post('/', createGames)
//Update a game by id
router.put('/:id',updateGameById)


//delete  games by id
router.delete('/:id', deleteGameById)
 
module.exports = router