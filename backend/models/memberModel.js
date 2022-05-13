const mongoose = require('mongoose');


const member = mongoose.Schema({
    memberNumber:{
        type:"String",
        required:[true,"please enter member number"]
    },
    arabicName:{
        type:"String",
        required:[true,"please enter Arabic Name"]
    },
    // englishName:{
    //     type:"String",
    //     required:[true,"please enter english Name"]
    // },
    // personalId:{
    //     type:"String",
    //     required:[true,"please enter personalId"]
    // },
    // plaseWork:{
    //     type:"String",
    //     required:[true,"please enter plase Work"]
    // },
    // lastPlaseWork:{
    //     type:"String",
    //     required:[true,"please enter last Plase Work"]
    // },
    // birthDate:{
    //     type:"String",
    //     required:[true,"please enter barth Date"]
    // },
    // placeOfBirth:{
    //     type:"String",
    //     required:[true,"please enter place Of Birth"]
    // },
    // Nationality:{
    //     type:"String",
    //     required:[true,"please enter Nationality"]
    // },
    // email:{
    //     type:"String",
    //     required:[true,"please enter email"]
    // },
    // mobileNumber:{
    //     type:"String",
    //     required:[true,"please enter mobil Number"]
    // },
    // phonNumber:{
    //     type:"String",
    //     required:[true,"please enter phon Number"]
    // },
    // Governorate:{
    //     type:"String",
    //     required:[true,"please enter Governorate"]
    // },
    // address:{
    //     type:"String",
    //     required:[true,"please enter address"]
    // },
    // Qualification:{
    //     type:"String",
    //     required:[true,"please enter Qualification"]
    // },
    // Specialization:{
    //     type:"String",
    //     required:[true,"please enter Specialization"]
    // },
    // SpecializationInEnglish:{
    //     type:"String",
    //     required:[true,"please enter Specialization in English"]
    // },
    // UniversityName:{
    //     type:"String",
    //     required:[true,"please enter University Name"]
    // },
    // universityCountry:{
    //     type:"String",
    //     required:[true,"please enter university country"]
    // },
    // GraduationRate:{
    //     type:"String",
    //     required:[true,"please enter Graduation rate"]
    // },
    // GraduationYear:{
    //     type:"String",
    //     required:[true,"please enter Graduation Year"]
    // },
    // school:{
    //     type:"String",
    //     required:[true,"please enter school"]
    // },
    // school:{
    //     type:"String",
    //     required:[true,"please enter school"]
    // },
    // percentage:{
    //     type:"String",
    //     required:[true,"please enter percentage"]
    // },
    // HighSchGradYear:{
    //     type:"String",
    //     required:[true,"please enter High school graduation year"]
    // },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    }

},{
    timestamps:true
})
module.exports = mongoose.model("Member", member);