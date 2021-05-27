const jwt=require('jsonwebtoken');
const User=require('../shemas/user');



const RegisterController=async (req,res)=>{
    try{
        console.log(req.body)
    const {username,email,password,birthdate}=req.body;

    const user=new User({
        username,email,password,birthdate,admin:false,followers:[],followed:[],photoprofile:""
    });
    user.password=await user.EncryptPassword(user.password)
console.log(user)
      await user.save();
       const token= jwt.sign({id:user._id},'secretKey',{expiresIn:60*60*24});
       res.json({auth:true,token})
}catch(e){
    console.error(e)
    res.status(401).json({auth:false,message:"error creando usuario"})
}


} 

const LoginController=async (req,res)=>{
 try{
 const {email,password}=req.body;
  const user=await User.findOne({email:email});
 
if(!user){
    res.status(404).json({auth:false,message:"user no found"})
}
   let compare=await user.comparePassword(password);
console.log(user)

 if(!compare){
   
      res.status(401).json({auth:false,message:"usuario u/o contrasenas incorrectos"})
 } const token= jwt.sign({id:user._id},'secretKey',{expiresIn:60*60*24});
 res.json({auth:true,body:user,token})
 }catch(e){
console.error(e)
    res.status(401).json({auth:false,message:"error"})
 }




}
const prueba=(req,res)=>{
  console.log(req.userId);

res.status(200)
}
module.exports={LoginController,RegisterController,prueba}