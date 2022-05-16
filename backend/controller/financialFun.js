const asyncHandler = require('express-async-handler');
const { json } = require('express/lib/response');
const Financial = require('../models/financialFileModule')

//@desc Get financials to adimin
//@route GET /api/financial
//@access Private
const getFinancial = asyncHandler( async (req,res) =>{
    const financialFile = Financial.find({})
    res.status(200) .json(financialFile)
})
//@desc Get financials to adimin
//@route POST /api/financial/
//@access Private
const addFinancial = asyncHandler( async (req,res) =>{
    const {date,name,memberNo,parsonalID,typeOfFinancial,outgoingType,incomingType,amount,details,invoiceNo,notbookNo,userId} =req.body;

    const financial = await Financial.create({
        date,
        name,
        memberNo,
        parsonalID,
        typeOfFinancial,
        outgoingType,
        incomingType,
        amount,
        details,
        invoiceNo,
        notbookNo,
        userId
    })
    if(financial){
        res.status(200).json(financial)
    }else{
        res.status(400)
        throw new Error("financial is not edit")
    }  throw Error(err)
})
//@desc Get financials to adimin
//@route PUT /api/financial/
//@access Private
const editFinancial = asyncHandler( async (req,res) =>{
    const FinancialIsPresant = Financial.findById(req.params.id)
    if(FinancialIsPresant){
        res.status(400)
        throw new Error("Financial Isn’t Presant")
    }
    const financial = await Financial.findByIdAndUpdate(req.params.id,req.body,{new:true});

    if(financial){
        res.status(200).json(financial)
    }else{
        res.status(400)
        throw new Error("financial is not edited")
    }

})
//@desc Get financials to adimin
//@route DELETE /api/financial/
//@access Private
const deleteFinancial = asyncHandler( async (req,res) =>{
    const FinancialIsPresant = Financial.findById(req.params.id)
    if(FinancialIsPresant){
        res.status(400)
        throw new Error("Financial Isn’t Presant")
    }
    const financial = await Financial.findByIdAndRemove(req.params.id);

    if(financial){
        res.status(200).json(financial)
    }else{
        res.status(400)
        throw new Error("financial is not deleted")
    }
})

module.exports = {
    getFinancial,
    addFinancial,
    editFinancial,
    deleteFinancial
}