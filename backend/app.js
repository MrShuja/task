const express = require("express");
const app = express();
const PORT = 9998;
const bodyParser = require("body-parser")
const connectDb = require("./confiq/connectDb")
var cors = require('cors');
const Signup = require("./models/signup.model");

connectDb();

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cors("*"))


app.use("/signup",async (req, res)=>{
    try{
        const payload=req.body;
        const signup = await Signup.create(payload)
        res.json({message:"Hello From Zayan", signup})
    }
    catch(err){
        console.log(err)
    }

})
app.use("/", (req, res)=>{
    res.json({message: "Hello from shuja"})
    
})

app.listen(PORT, ()=>{
    console.log(`Server listening on PORT ${PORT}`)
})