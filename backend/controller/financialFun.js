const asyncHandler = require('express-async-handler');
const Financial = require('../models/financialFileModule')
//@desc Get financials to adimin
//@route GET /api/financial
//@access Private

const getFinancial = asyncHandler( async (req,res) =>{
    res.status(200) .json({massage: "get all financial"})
})

module.exports = {
    getFinancial
}