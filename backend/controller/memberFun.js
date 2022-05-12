const asyncHandler = require('express-async-handler');
const Member = require('../models/memberModel')
//@desc Get member to admin
//@route GET /api/member
//@access Privat

const getAllMember = asyncHandler(async (req,res)=>{
    const member = await Member.find({});
    res.status(200)
    .json(member);
})
//@desc get me
//@route GET /api/member/me
//@access Privat

const getMe = asyncHandler(async (req,res)=>{
    const member = await Member.find({});
    res.status(200).json(member);
})
//@desc post  my date if was member
//@route POST /api/member/me
//@access Privat
const addMe = asyncHandler(async (req,res)=>{
    res.status(200).json({massage:"add me"})
})
//@desc add member in admin
//@route POST /api/member
//@access Privat
const addMember = asyncHandler(async (req,res)=>{
    res.status(200).json({massage:"add my date"})
})

//@desc edit member in admin
//@route put /api/member
//@access Privat
const editMember = asyncHandler(async (req,res)=>{
    res.status(200).json({massage:"edit member in admin"})
})

//@desc edit member in admin
//@route put /api/member/me
//@access Privat
const editMe = asyncHandler(async (req,res)=>{
    res.status(200).json({massage:"edit member in admin"})
})

//@desc add member in admin
//@route GET /api/member
//@access Privat
const deletMember = asyncHandler(async (req,res)=>{
    res.status(200).json({massage:"delet member in admin"})
})

module.exports = {
    getAllMember,
    getMe,
    addMe,
    addMember,
    editMember,
    editMe,
    deletMember
}