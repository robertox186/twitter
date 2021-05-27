
const user = require('../shemas/user');

const UpdateUser=async (req,res)=>{

    const id=req.userId;
    const user=await user.findByIdAndUpdate(id,req.body);
    
   res.json({status:true,body:user})


}
const getAllUsers=async( req,res)=>{
const users= await user.find();

res.json(users)

}
const getUser=async (req,res)=>{
    const id=req.params.id;
   const users= await user.findById(id);

  res.json(users);



}


const deleteUser=async (req,res)=>{

  const id=req.userId;


  const users=await user.findByIdAndDelete(id);

   res.json(users)

}
module.exports={UpdateUser,getAllUsers,getUser,deleteUser}