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
    },describtion:{
        type:"String",
        required:[true,"please enter describtion"]
    },rate:{
        type:"String",
        required:[true,"please enter rate"]
    },
},{
    timestamps:true
});

module.exports = mongoose.model('Movie',movies)


