import express from "express";
const router = express.Router()
import * as controllers from '/Users/aleksandarbulajic/Desktop/GAcode/unit-2/projects/project_2/API_procejt2/controller/favoriteController.js'

//add/ create your favorite game
router.post('/',controllers.createFavorite)

// get your favorite game by id
router.get('/:id',controllers.getFavoriteById)

//update one of your favorite game
router.put('/:id', controllers.updateFavoriteById)


//delete one of your favorite game
router.delete('/:id', controllers.deleteFavoriteById)


export default router;