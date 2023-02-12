const Joke = require('../models/jokes.model')

module.exports = {
    // key value pairs
    // Keys are the name of the functions
    // Values are the functions

    // Defining GET controller functions
    allJokes: (req,res) => {

        Joke.find({})
            .then((allJokes)=>{
                res.json(allJokes)
            })
            .catch((err)=>{
                res.status(500).json({message:'Something went wrong',error:err})
            })
    },
    createJoke: (req,res) => {
        Joke.create(req.body)
            .then((newJoke)=>{
                res.json(newJoke)
            })
            .catch((err)=>{
                res.status(500).json({message:'Something went wrong',error:err})
            })
    },
    aJoke: (req,res) => {
        let id = req.params.id
        Joke.find({_id:(id)})
            .then((theJoke)=>{
                res.json(theJoke)
            })
            .catch((err)=>{
                res.status(500).json({message:'Somethen went wrong',error:err})
            })
        
    },
    changeJoke: (req,res) => {
        let id = req.params.id
        Joke.findOneAndUpdate({_id:(id)},req.body,{
            new:true,
            runValidators:true,
        })
            .then((changedJoke)=>{
                res.json(changedJoke)
            })
            .catch((err)=>{
                res.status(500).json({message:'Something went wrong',error:err})
            })
    },
    deleteJoke: (req, res) => {
        let id = req.params.id
        Joke.deleteOne({ _id:id })
          .then((result) => res.json(result))
          .catch((err) => console.log(err));
      }
}
