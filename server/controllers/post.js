const post=require('../shemas/post');


const CreatePost=async (req,res)=>{
const { title,user,image}=req.body;

const post=new Post({title,user,image,comments:[],likes:[],rt:[]});


await post.save();


req.json(post);
}

const getPost=async (req,res)=>{
   
    const posts = await post.findById(req.params.id);
         

    res.json(posts);
}
const getAllPost =async (req,res)=>{
 
    const posts = await post.find();
         

    res.json(posts);     

}
  const updatePost=async (req,res)=>{
    const {_id,title,user,image,comments,likes,rt}=req.body;

 const resp=await post.findByIdAndUpdate(_id,{title,user,image,comments,likes,rt});


res.json(resp);


  }
const deletePost=async (Req,res)=>{

    const id=req.params.id;

const resp=await post.findByIdAndRemove(id);

res.json(resp)
}

module.exports={CreatePost,getAllPost,getPost,updatePost,deletePost};