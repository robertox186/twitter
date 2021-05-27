const express=require('express');
const app=express.Router();
const {LoginController,RegisterController,prueba} =require("../controllers/auth");
const {UpdateUser,getAllUsers,getUser,deleteUser} =require('../controllers/user')
 const {VerifyToken,isAdmin}=require('../middlewares/auth');
const {CreatePost,getAllPost,getPost,deletePost,updatePost}=require('../controllers/post')
   //routes users
 app.post('/register',RegisterController)
app.post('/login',LoginController);
app.put('/profile',VerifyToken,UpdateUser)
app.get('/allusers',VerifyToken,getAllUsers)
app.get('/getuser',VerifyToken,getUser);
app.get('/deleteuser',VerifyToken,isAdmin,deleteUser);

//routes post
app.get('/allpost',VerifyToken,getAllPost);
app.get('/post',VerifyToken,getPost);
app.post('/newpost',VerifyToken,CreatePost);
app.put('/updatepost',VerifyToken,updatePost)
app.delete('/deletepost',VerifyToken,deletePost);


module.exports=app; 