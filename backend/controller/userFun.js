const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");
const Users = require('../models/userModel');


//@desc Register new user
//@route POST /api/users/
//@access public
const registerUser = asyncHandler(async (req,res) =>{
    const {name,email,password,role} =req.body;
    if(!name || !email || !password  ){
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
        password:hashedPassword,
        role
    });

    

    if(user){
        res.status(201).json({
            _id:user.id,
            name:user.name,
            email:user.email,
            rule:user.rule,
            token:generateToken(user.id)

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
    const {email,password} = req.body;

    const user = await Users.findOne({email})
    if(user && (await bcrypt.compare(password,user.password))){
        res.status(201).json({
            _id:user.id,
            name:user.name,
            email:user.email,
            token:generateToken(user.id)
        })
    }else{
        res.status(400)
        throw new Error('Invalid credentials')
    }
})

//@desc Get user data in  user
//@route GET /api/users/me
//@access private
const getMe = asyncHandler(async (req,res) =>{
    const {_id,name,email} = await Users.findById(req.user.id);

    res.status(200).json({
        id:_id,
        name,
        email
    })

})

//Generate JWT
const generateToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'30d'
    })
}

module.exports = {
    registerUser,
    getMe,
    loginUser
}