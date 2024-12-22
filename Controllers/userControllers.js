const users = require('../Models/userSchema')
const jwt = require('jsonwebtoken')

//register logic

exports.registerAPI=async(req,res)=>{
    console.log('Inside the register API');
    const {username,email,password}=req.body
    existingUser= await users.findOne({email})
    if(existingUser){
        res.status(402).json({message:'user already existing...'})
    }else{
        const newUser= new users({
            username:username,
            email: email,
            password: password,
            gitHub:'',
            linkedIn:'',
            profilePic:''
        })
        await newUser.save()
        res.status(200).json('Register successful')
    }
}
exports.loginAPI=async(req,res)=>{
    const {email,password}=req.body
    existingUser= await users.findOne({email:email})
    if(existingUser){
        if(existingUser.password==password){
            const token = jwt.sign({userId:existingUser._id},process.env.jwtkey)
            console.log(token);
           res.status(200).json({currentUser:existingUser,token})
        }else{
            res.status(402).json("Incorrect password or email")
            
        }
    }else{
        res.status(402).json("user not registerd")
        
    }

}
