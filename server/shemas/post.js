const {Schema,model, isValidObjectId}=require('mongoose');


const postSchema=new Schema({
 
    title:{type:String,required:true},
      user:{type:Array, required:true},
      likes:{type:Array,required:true},
      rt:{type:Array,required:true},
      image:{type:String,required:true},
      comments:{type:Array,required:true}  
    })


    module.exports=model('post',postSchema);