const mongoose=require('mongoose');




mongoose.connect('mongodb://localhost/twitter')
.then(db=>console.log("db connected"))
.catch(err=>console.error(err));

module.exports=mongoose;