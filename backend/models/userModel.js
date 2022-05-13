const { type } = require('express/lib/response');
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please add a name"],
        min:3,
        max:15
    },
    email:{
        type:String,
        required:[true,"Please add a email"],
        lowerCase:true,
    },
    password:{
        type:String,
        required:[true,"Please add a password"]
    },
    role:{
        type:String,
        default:"USER"

    }
    
},{
    timestamps:true
});

module.exports = mongoose.model('Users',userSchema);