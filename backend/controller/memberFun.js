const asyncHandler = require('express-async-handler');
const Member = require('../models/memberModel');
const WaitList = require('../models/waitListModel');
const Users = require('../models/userModel');
const {canView} = require('../permissions/member');
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
    const {arabicName,personalId} = req.body;
    const {_id} = await Users.findById(req.user.id);
    const memberIsPresant =  await Member.find({personalId})
    if(memberIsPresant){
        res.status(400)
        throw new Error("member Is presant")
    }
    const memberInWaitList = await WaitList.create({
        arabicName,
        personalId,
        userId:_id
    })
    res.status(200)
    .json(memberInWaitList)

})
//@desc Approval member in admin
//@route POST /api/member/Approval
//@access Privat
const approvalMember = asyncHandler(async (req,res)=>{
    const {memberNumber} = req.body;
    const member = await Member.create({
        memberNumber,
        ...req.body
    })
    res.status(200).json(member);
})

//@desc add member in admin
//@route POST /api/member
//@access Privat
const addMember = asyncHandler(async (req,res)=>{
    const {memberNumber,arabicName,personalId} =req.body;
    const {_id} = await Users.findById(req.user.id);
    const memberIsPresant =  await Member.find({personalId})
    if(memberIsPresant){
        res.status(400)
        throw new Error("member Is presant")
    }
    const member = await Member.create({
        arabicName,
        memberNumber,
        userId:_id
    })
    res.status(200).json(member)
})

//@desc edit member in admin
//@route put /api/member
//@access Privat
const editMember = asyncHandler(async (req,res)=>{
    const {arabicName,memberNumber} = req.body;
    const member = await Member.findByIdAndUpdate(req.params.id,req.body,{new:true});

    res.status(200).json(member);
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
    const {arabicName,memberNumber} = req.body;
    const member = await Member.findByIdAndUpdate(req.params.id,req.body,{new:true});

    res.status(200).json(member);
})

const authGetMember =(req,res,next)=>{
   if(!canView(req.user,Member)) {
       res.status(401)
       throw new Error('your is not autabted or your net added member')
   }
   next()
}

module.exports = {
    getAllMember,
    getMe,
    addMe,
    addMember,
    editMember,
    editMe,
    deletMember,
    authGetMember,
    approvalMember
}