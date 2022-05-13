const express = require("express");
const router = express.Router();
const {getGoals,setGoal,deleteGoal,updateGoal} = require('../controller/goalsFun')
const {protect} =require('../middelware/auth')

router.route("/").get(protect,getGoals).post(setGoal);
router.route('/:id').delete(deleteGoal).put(updateGoal);


module.exports= router;