const express = require('express');
const { getAllMember, getMe, addMember, addMe,editMember , editMe } = require('../controller/memberFun');


const router = express.Router();

router.route('/').get(getAllMember);
router.route('/me').get(getMe);
router.route('/').post(addMember);
router.route('/me').post(addMe);
router.route('/:id').put(editMember);
router.route('/me/:id').put(editMe);
router.route('/:id').delete(addMember);



module.exports = router