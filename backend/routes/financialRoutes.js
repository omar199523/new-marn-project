const express = require('express');
const {ROLE} = require('../data')
const router = express.Router();
const {protect,authRole} = require("../middelware/auth")
const {getFinancial,addFinancial,editFinancial,deleteFinancial} = require('../controller/financialFun');
const { ROLE } = require('../data');

router.route('/').get(protect,authRole(ROLE.ADMIN),getFinancial).post(protect,authRole(ROLE.ADMIN),addFinancial);
router.route('/').put(protect,authRole(ROLE.ADMIN),getFinancial).delete(protect,authRole(ROLE.ADMIN),addFinancial);

module.exports = router
