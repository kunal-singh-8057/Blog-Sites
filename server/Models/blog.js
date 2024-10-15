const mongoose = require("mongoose");

const blogschema = mongoose.Schema({
    
    title:{
        type:String,
        required:true
    },

    content:{
        type:String,
        required:true
    },


    image:{
        type:String,
        required:true
    },

    tags:{
        type:String,
        required:true
    },
})

const blogmodels = mongoose.model("blogdata",blogschema);
module.exports = blogmodels;