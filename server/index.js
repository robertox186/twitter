const express = require('express')
const app=express();
const cors=require('cors');
const jwt=require('jsonwebtoken');
const morgan=require('morgan')
const routes=require('./routes/index')
 
//settings
require('./database');
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(routes)
app.use(cors);

app.set('port',process.env.PORT || 3000)

app.get('/',(req,res)=>{

res.sendStatus(200);

})

//starting the server
app.listen(app.get('port'),()=>{
    console.log("servidor iniciado en el puerto 3000")
})