//1 load .env file
require('dotenv').config()

//2 import express
const express = require('express')

//6 import cors
const cors=require('cors')

const db = require('./DB/Connection')

const router = require('./Routes/router')
// const ApplicationMiddlewares=require('./Middlewares/ApplicationMiddleware')
//3 create an app using express
const serverApp = express()

//7 use
serverApp.use(cors())
serverApp.use(express.json())
// serverApp.use(ApplicationMiddlewares)
serverApp.use(router)
serverApp.use('/uploads',express.static('./uploads'))

//4 create a port
PORT=3000 || process.env.PORT

//5 Run
serverApp.listen(PORT,()=>{
    console.log('Server runs in:',PORT);
})


serverApp.get('/',(req,res)=>{
    res.send('Welcome to serverApp')
})

