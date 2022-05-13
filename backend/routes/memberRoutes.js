const express = require('express');
const { getAllMember, getMe, addMember, addMe,editMember , editMe ,authGetMember} = require('../controller/memberFun');
const {protect, authRole,} = require('../middelware/auth');
const {ROLE} = require('../data')

const router = express.Router();

router.route('/').get(protect,authGetMember,getAllMember);
router.route('/me').get(protect,authGetMember,getMe);
router.route('/').post(protect,authRole(ROLE.ADMIN),addMember);
router.route('/me').post(protect,addMe);
router.route('/:id').put(protect,editMember);
router.route('/me/:id').put(protect,editMe);
router.route('/:id').delete(protect,addMember);



module.exports = router