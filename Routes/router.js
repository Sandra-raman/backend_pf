const express = require('express')

const userController =  require('../Controllers/userControllers')
const projectController= require('../Controllers/projectController')
const jwtMiddlewares = require('../Middlewares/jwtMiddleware')
const multerMiddleware = require('../Middlewares/multerMiddleware')
// const jwtMiddlewares = require('../Middlewares/jwtMiddleware')

const router = express.Router()

router.post('/api/register',
    userController.registerAPI
)
router.post('/api/login',
    userController.loginAPI
)
// router.post('/api/addProject',jwtMiddlewares,userController.addProject)

router.post('/api/addProject',jwtMiddlewares,multerMiddleware.single('projectImg'), projectController.addProjectAPI)

router.get('/api/getAllUserProject',jwtMiddlewares,projectController.getAllUserProjectAPI)

router.get('/api/getHomeProject',projectController.getHomeProjectAPI)

router.get("/api/getAUserProject",jwtMiddlewares,projectController.getUserProjectAPI)

router.put('/api/editproject/:projectId',jwtMiddlewares,multerMiddleware.single('projectImg'),projectController.editProjectAPI)

router.delete('/api/deleteProject/:projectId',jwtMiddlewares,projectController.deleteProjectAPI)
module.exports=router       