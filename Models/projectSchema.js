const mongoose = require('mongoose')

//1 schema creation
const projectSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
     language:{
        type:String,
        required:true
    },
    gitHub:{
        type:String,
        required:true
    },
    website:{
        type:String,
    },
    overview:{
        type:String,
        required:true
    },
    projectImg:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    }
})
const projects = mongoose.model('projects',projectSchema)
module.exports=projects