 # Project Proposal
Creating a RESTfull API with frond-end
```
https://www.freetogame.com/api-doc
```

  
 ## Project name and description    
 ### No pay to Play

        this applications will provide you with free to play games, you can have a randomized game you could play for free or you can search for a  genre of the game example: 'Shoter','MMORPG'

### Routes and models
    GET /games: Retrieves a list of all jokes.
    GET /games/:id: Retrieves a specific joke by its ID.
    GET /games/:genre: Retrieves games based on genre
    POST /games: Creates a new joke.
    PUT /games/:id: Updates an existing joke.
    DELETE /games/:id: Deletes a joke.

### User Stories
    As a user, I should be able to query the /games route to GET all free games.
    As a user, I should be able to query the /games/:id route to GET a specific free game.
    As a user, I should be able to submit a game by making a POST request to the /game route.
    As a user, I should be able to update an existing game by making a PUT request to the /game/:id route.
    As a user, I should be able to delete a game by making a DELETE request to the /games/:id route.
### MVP Goals
    1. Implement the route to be able to retrive all free to play games.
    2. Implement the route to be able to retrve game by id.
    3. Implement the route to be able to delete a game
    4. implement a route to be able to add a free to play game

### Stretch Goals
    1. Seach game  by genre.
    2. Have a more animated front-end version.
    3. Have a user authentication.
    4. havng a rating system.