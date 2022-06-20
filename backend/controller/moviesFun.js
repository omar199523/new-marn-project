const asyncHandler = require('express-async-handler');
const { json } = require('express/lib/response');
const Movies = require('../models/MovesModel.js')

//@desc Get Movies to adimin
//@route GET /api/movies
//@access Private
const getMovies = asyncHandler( async (req,res) =>{
    const MoviesFile = Movies.find({})
    res.status(200) .json(MoviesFile)
})
//@desc Get Movies to adimin
//@route POST /api/Movies/
//@access Private
const addMovies = asyncHandler( async (req,res) =>{
    const {date,name} =req.body;

    const Movies = await Movies.create({
        date,
        name,
    })
    if(Movies){
        res.status(200).json(Movies)
    }else{
        res.status(400)
        throw new Error("Movies is not edit")
    }  throw Error(err)
})
//@desc Get Movies to adimin
//@route PUT /api/Movies/
//@access Private
const editMovies = asyncHandler( async (req,res) =>{
    const MoviesIsPresant = Movies.findById(req.params.id)
    if(MoviesIsPresant){
        res.status(400)
        throw new Error("Movies Isn’t Presant")
    }
    const Movies = await Movies.findByIdAndUpdate(req.params.id,req.body,{new:true});

    if(Movies){
        res.status(200).json(Movies)
    }else{
        res.status(400)
        throw new Error("Movies is not edited")
    }

})
//@desc Get Movies to adimin
//@route DELETE /api/Movies/
//@access Private
const deleteMovies = asyncHandler( async (req,res) =>{
    const MoviesIsPresant = Movies.findById(req.params.id)
    if(MoviesIsPresant){
        res.status(400)
        throw new Error("Movies Isn’t Presant")
    }
    const Movies = await Movies.findByIdAndRemove(req.params.id);

    if(Movies){
        res.status(200).json(Movies)
    }else{
        res.status(400)
        throw new Error("Movies is not deleted")
    }
})

module.exports = {
    getMovies,
    addMovies,
    editMovies,
    deleteMovies
}