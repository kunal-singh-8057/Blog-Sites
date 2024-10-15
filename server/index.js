require("dotenv").config();
const express = require("express");
const usermodels = require("./Models/user")
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT;
const MONODB_URL = process.env.MONGODB_URL;
const bodyparser = require("body-parser");
const blogmodels = require("./Models/blog");

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.json());

mongoose.connect(MONODB_URL).then(()=>{
    console.log("Database connected successfully")
}).catch(()=>{
    console.log("Database connection failed")
})

// Method to create user signup
app.post("/createuser",async(req,res)=>{
const cre = await usermodels.create(req.body);

res.status(200).json({
    successs:true,
    cre
})
})


// Method to view userdata 
app.get("/viewuser",async(req,res)=>{
    const view = await usermodels.find();

    res.status(200).json({
        successs:true,
        view
    })
})

// Method to delete the userdata
app.delete("/deleteuser/:id",async(req,res)=>{

    const id = req.params.id
    const del = await usermodels.findByIdAndDelete(id);

    res.status(200).json({
        successs:true,
        del
    })
})

//Method to login
app.post("/login",(req,res)=>{
    const{email,password} = req.body;

    usermodels.findOne({email:email}).then((user)=>{
        if(user){
            if(user.password === password){
                res.json("success")
            }

            else{
                res.json("wrong passsword")
            }
        }

        else{
            res.json("user not existed")
        }
    })
})

//Blog data API methods

//Method for creating blogs
app.post("/createblogs",async(req,res)=>{
    
    const creblogs = await blogmodels.create(req.body)

    res.status(200).json({
        success:true,
        creblogs
    })
})

//Method for view blog data
app.get("/viewblogs",async(req,res)=>{
     await blogmodels.find()
    .then(users=>res.json(users))
    .catch(error=>res.json(error))
})

//get single blog data

app.get("/sblog/:id",(req,res)=>{
    const id = req.params.id
      blogmodels.findById(id)
    .then(users=>res.json(users))
    .catch(error=>res.json(error))
})

//Method for deleting the blogs
app.delete("/deleteblogs/id",async(req,res)=>{
    
    const id = req.params.id;
    const delblogs = await blogmodels.findByIdAndDelete(id);

    res.status(200).json({
        success:true,
        delblogs
    })
})

app.listen(PORT,()=>{
    console.log(`The server is workinga at : http://localhost:${PORT}`);
})