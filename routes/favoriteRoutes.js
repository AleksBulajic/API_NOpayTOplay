import {Router } from "express";
import * as controllers from '../controller/favoriteController.js'

const router = Router()

//add/ create your favorite game
router.post('/',controllers.createFavorite)

// get your favorite game by id
router.get('/:id',controllers.getFavoriteById)

//update one of your favorite game
router.put('/:id', controllers.updateFavoriteById)


//delete one of your favorite game
router.delete('/:id', controllers.deleteFavoriteById)


export default router;