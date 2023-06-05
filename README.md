# API_project2


    # No Pay to Play

[Free to play Games](https://www.freetogame.com/api-doc)
![free-to-play](https://github.com/AleksBulajic/API_project2/blob/main/images/free-to-play.png?raw=true)

This application provides a RESTful API with a front-end interface that allows users to access and explore a collection of free-to-play games. Users can browse through a list of games, search for games by genre, and add their favorite games to a personalized collection.

## Project Overview

The project aims to create a web application that utilizes the Free to Game API, which provides data on free-to-play games. The application will implement various routes to perform operations such as retrieving all free games, retrieving a specific game by its ID, adding new games, updating existing games, and deleting games. Additionally, users can add games to their favorites collection and manage their favorites.

## Technologies used
 - JavaScript 
 - MnogoDB
 - Express
 - Node.js
 - mongoose

## Heroku link
 - https://procejt2.herokuapp.com/

## Routes and Models

### Routes

- GET /games/all: Retrieves a list of all free-to-play games.
- GET /games/:id: Retrieves a specific game by its ID.
- GET /games/genre/:genre: Retrieves games based on genre.
- GET /games/title/:title Retrive game by title.
- POST /games/all: Creates a new game.
- PUT /games/:id: Updates an existing game.
- DELETE /games/:id: Deletes a game.


### Models

#### Game Model

```javascript
const gamesSchema = new Schema({
  title: String,
  thumbnail: String,
  short_description: String,
  genre: String,
  platform: String,
  publisher: String,
  developer: String,
  release_date: String,
  freetogame_profile_url: String
});
```

```javascript


const Favorite = new Schema ({
 
  game: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Game'
    }
  })
```

### MVP Goals
    1. Implement the route to be able to retrive all free to play games.
    2. Implement the route to be able to retrve game by id.
    3. Implement the route to be able to delete a favorite.
    4. Implement a route to be able to add a free to play game.
    5. Implement the route to be able to add to myFavotites collection.
    6. Implement the route to be able to serach myFavorites.
    7. Implement the route to delete from myFavorites

## Streach Goals

    1.Implement user authentication: Add user registration and login functionality, allowing users to have personalized accounts and securely manage their favorite games.
    2.Implement user profiles: Create user profiles where users can view and manage their personal information, preferences, and game history.
    3.Implement sorting and filtering: Allow users to sort games based on various criteria such as release date, genre, or platform. Additionally, provide filtering options to refine the displayed games based on user preferences.
