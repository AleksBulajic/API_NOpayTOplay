//create your favorite game
//route POST /favorite 
const createFavorite = async (req,res) => {
    res.status(200).json ({message: "Create Favorite Game"})
}

//get your favorite game by id
//route GET /favorite/:id
const getFavoriteById =  async (req,res) => {
    res.status(200).json({message: "Get favorite Game by id"})
}

// update your favorite game
// route 
const updateFavoriteById =  async (req,res) => {
    res.status(200).json({message: `update game ${req.params.id}`})
}

// delete facorite game
// route DELETE /favorite/:id
const deleteFavoriteById =  async (req,res) => {
    res.status(200).json({message: `delete favorite game ${req.params.id}`})
}

export{
    createFavorite,
    getFavoriteById,
    deleteFavoriteById,
    updateFavoriteById

};