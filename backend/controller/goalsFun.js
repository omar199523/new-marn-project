const asyncHandler = require('express-async-handler');
const Goals = require('../models/goalModel')
//@desc Get goals
//@route GET /api/goals
//@access Private
const getGoals =asyncHandler(async (req,res)=>{
    const allGoal =await Goals.findById(req.user.id)
    res.status(200).json(allGoal);
})


//@desc set goals
//@route POST /api/goals
//@access Private
const setGoal =asyncHandler(async (req,res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error("please add a text field");

    }
    const goal = await Goals.create({
        text:req.body.text,
    })
    res.status(200).json(goal);
})

//@desc delete goals
//@route DELETE /api/goals
//@access Private
const deleteGoal =asyncHandler(async(req,res)=>{
    const goal = Goals.find({});

    if(!goal){
        res.status(400)
        throw new Error("Goal not found")
    }
    const deleteGoal = await Goals.findByIdAndDelete(req.params.id);
    // or
    // await goal.remove();
    res.status(200).json({massage: `delete goal ${req.params.id}`})

})

//@desc update goals
//@route PUT /api/goals
//@access Private
const updateGoal =asyncHandler(async(req,res)=>{
    const goal =await Goals.findById(req.params.id);

    if(!goal){
        res.status(400);
        throw new Error("Goal not found")
    }
    const updateGoal = await Goals.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.status(200).json({massage:`Update goal ${req.params.id}`})
})


module.exports ={
    getGoals,
    setGoal,
    deleteGoal,
    updateGoal
}