const ApplicationMiddlewares = (req,res,next)=>{
    console.log('Inside ApplicarionMiddlewares');
    next()
    
}
module.exports=ApplicationMiddlewares