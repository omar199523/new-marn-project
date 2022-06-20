const asyncHandler = require('express-async-handler');
const { json } = require('express/lib/response');
const Movie = require('../models/MovesModel.js')

//@desc Get Movies to adimin
//@route GET /api/movies
//@access Private
const getMovies= asyncHandler(async (req,res)=>{
    const movies = await Movie.find({});
    res.status(200).json(movies);
})
//@desc Get Movies to adimin
//@route POST /api/Movies/
//@access Private
const addMovies = asyncHandler( async (req,res) =>{
    const {date,name,describtion,rate} =req.body;

    const Movies = await Movie.create({
        date,
        name,
        describtion,
        rate
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
    const MoviesIsPresant = await Movie.findById(req.params.id)
    if(!MoviesIsPresant){
        res.status(400)
        throw new Error("Movies Isn’t Presant")
    }
    const Movies = await Movie.findByIdAndUpdate(req.params.id,req.body,{new:true});

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
    const MoviesIsPresant = await Movie.findById(req.params.id)
    if(!MoviesIsPresant){
        res.status(400)
        throw new Error("Movies Isn’t Presant")
    }
    const Movies = await Movie.findByIdAndRemove(req.params.id);

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