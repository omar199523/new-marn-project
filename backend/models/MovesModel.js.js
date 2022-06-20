const mongoose = require('mongoose');

const movies = mongoose.Schema({
    date :{
        type:"Date",
        default:new Date().getDate(),
        required:[true,"please enter date"]
    },
    name:{
        type:"String",
        required:[true,"please enter name"]
    },
},{
    timestamps:true
});

module.exports = mongoose.model('Movies',movies)


