const jwt=require('jsonwebtoken');


module.exports.VerifyToken=async function(req,res,next){
    const token=req.headers['x-access-token'];
    if(!token){
        return res.status(401).send({message:"no token provided"})
    }

    const decode=await jwt.verify(token,'secretKey');
    req.userId=decode;
    next();
}
module.exports.isAdmin=(req,res,next)=>{
    
   const {admin}=req.body;

   if(!admin){
       res.status(401).json({message:'no tiene autorizacion'})
   }
     next();

}