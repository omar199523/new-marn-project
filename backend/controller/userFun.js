const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");
const Users = require('../models/userModel')
const res = require('express/lib/response');


//@desc Register new user
//@route POST /api/users/
//@access public
const registerUser = asyncHandler(async (req,res) =>{
    const {name,email,password} =req.body;
    if(!name || !email || !password){
        res.status(400)
        throw new Error("Please add all fields");  
    }
    const userExists = await Users.findOne({email})
    if(userExists){
        res.status(400)
        throw new Error("user already exists") 
    }
    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt);
    //Create user
    const user = await Users.create({
        name,
        email,
        password:hashedPassword
    });
    

    if(user){
        res.status(201).json({
            _id:user.id,
            name:user.name,
            email:user.email,
            password:user.password,
        })
    }else{
        res.status(400)
        throw new Error('Invalid user data')
    }

});
//@desc Log in  user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req,res) =>{
    
        res.status(200).json({massage:"login user"})
    
})

//@desc Get user data in  user
//@route GET /api/users/me
//@access public
const getMe = asyncHandler(async (req,res) =>{

        res.status(200).json({massage:"me user"})
    
})

module.exports = {
    registerUser,
    getMe,
    loginUser
}