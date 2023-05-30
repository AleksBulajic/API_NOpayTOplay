 # Project Proposal
Creating a RESTfull API with frond-end
- 3rd party URL below

[Free to play Games](https://www.freetogame.com/api-doc)
 ![free-to-play](https://github.com/AleksBulajic/API_project2/blob/main/images/free-to-play.png?raw=true)
  
 ## Project name and description    
 ### No pay to Play

 this applications will provide you with free to play games, you can have a randomized game that you could play for free or you can search for a  genre of the game example: 'Shoter','MMORPG'

### Routes and models
   - routes

    GET /games: Retrieves a list of all free to play games.
    GET /games/:id: Retrieves a specific game by its ID.
    GET /games/:genre: Retrieves games based on genre
    POST /games: Creates a new game.
    PUT /games/:id: Updates an existing game.
    DELETE /games/:id: Deletes a game.

  - models
```
    const gamesSchema = new Schema({  
    
    title: String,
    short_description: String ,
    genre: String,
    platform: String,
    publisher: String,
    developer: String,
    release_date: String,
    freetogame_profile_url: String
  }),
  ```
  

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
    1. Seach game by genre.
    2. Have a more animated front-end.
    3. Have a user authentication.
    4. Havng a rating system.