const mongoose = require('mongoose');

const JokesSchema = new mongoose.Schema({

    setup: String,
    punchline: String,
    createdAt:Date,
    updatedAt:Date
})

// create object to export
const Joke = mongoose.model('Joke',JokesSchema);

module.exports = Joke;