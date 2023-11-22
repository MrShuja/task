const mongoose = require("mongoose");

const signupSchema=mongoose.Schema({
    name:{
        type:String,
        default:"",
        require: true
    },
    email:{
        type:String,
        default:""
    },
    gender:{
        type:String,
        default:""
    },
    country:{
        type:String,
        default:""
    },
    password:{
        type:String,
        default:""
    }
}, {timestamps:true} )
module.exports=mongoose.model("signup", signupSchema)