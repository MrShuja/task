const mongoose = require("mongoose")

const connectDb =async ()=>{
    await mongoose.connect("mongodb+srv://shuja:shuja15201@shuja.qo1pqqp.mongodb.net/test");
    console.log("Database has been connected successfully")

}
module.exports=connectDb;