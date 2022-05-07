const express = require("express");
const router = express.Router();
const {getGoals,setGoal,deleteGoal,updateGoal} = require('../controller/goalsFun')

router.route("/").get(getGoals).post(setGoal);
router.route('/:id').delete(deleteGoal).put(updateGoal);


module.exports= router;