//Mongoose is used to connect node and monqodb => npm i mongoose

const mongoose = require('mongoose')

const connectionString = process.env.connectionString;

mongoose.connect(connectionString).then(res=>{
    console.log("PF server is connected to DB");
    
})
.catch(err=>{
    console.log("Error",+err);
    
})