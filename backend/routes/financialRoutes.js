const express = require('express');
const router = express.Router();
const {getFinancial} = require('../controller/financialFun')

router.route('/').get(getFinancial)

module.exports = router
