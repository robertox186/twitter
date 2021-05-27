const{Schema,model}=require('mongoose');
const bcrypt=require('bcryptjs');





const UserShema =new Schema({
      username:{type:String,required:true,unique:true},
      email:{type:String,required:true,unique:true},
      password:{type:String, required:true},
      birthdate:{type:String,required:true},
      admin:{type:Boolean,required:true},
      followers:{type:Array},
      followed:{type:Array},
    photoprofile:{type:String},
})
UserShema.methods.EncryptPassword= (password)=>{
   return bcrypt.hashSync(password,16); 


}
UserShema.methods.comparePassword=async function (password){

   return  bcrypt.compareSync(password,this.password)
}
module.exports= model('user',UserShema);