import express from 'express'
const router = express.Router()
import * as controllers from '../controller/gameController.js'


//retrive a list of all free games
router.get('/', controllers.getGames)


//retrive a speciic game by id
router.get('/:id',controllers.getGamesById)


//retrive a specific game by genre
router.get('/:genre', controllers.getGamesByGenre)
//Create a new game


router.post('/', controllers.createGames)
//Update a game by id
router.put('/:id',controllers.updateGameById)


//delete  games by id
router.delete('/:id', controllers.deleteGameById)
 
export default router