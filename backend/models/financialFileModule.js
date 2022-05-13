const mongoose = require('mongoose');

const financialFile = mongoose.Schema({
    date :{
        type:"Date",
        default:new Date().getDate(),
        required:[true,"please enter date"]
    },
    name:{
        type:"String",
        required:[true,"please enter name"]
    },
    memberNo:{
        type:"String",
        required:[true,"please enter member No."]
    },
    parsonalID:{
        type:"String",
        required:[true,"please enter parsonal ID"]
    },
    typeOfFinancial:{
        type:"String",
        required:[true,"please enter type Of Financial"]
    },
    outgoingType:{
        type:"String",
        required:[true,"please enter outgoing Type"]
    },
    incomingType:{
        type:"String",
        required:[true,"please enter incoming Type"]
    },
    amount:{
        type:"String",
        required:[true,"please enter amount"]
    },
    details:{
        type:"String",
        required:[true,"please enter details"]
    },
    invoiceNo:{
        type:"String",
        required:[true,"please enter invoice No."]
    },
    notbookNo:{
        type:"String",
        required:[true,"please enter notbook No."]
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    }
},{
    timestamps:true
});

module.exports = mongoose.model('Financial',financialFile)