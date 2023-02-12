const jokeController = require('../controllers/joke.controller')

module.exports = app => {
    app.get('/api/Jokes',jokeController.allJokes)
    app.get('/api/aJoke/:id',jokeController.aJoke)
    app.post('/api/postJoke',jokeController.createJoke)
    app.put('/api/changeJoke/:id',jokeController.changeJoke)
    app.delete('/api/deleteJoke/:id',jokeController.deleteJoke)
    
}
