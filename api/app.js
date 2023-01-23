const express = require("express");
const cors=require("cors");
const userRouter=require('./controllers/user.controller');
const productRouter=require('./controllers/product.controller');


const app=express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/user',userRouter);
app.use('/product',productRouter)


app.get('/',(req,res)=>{
        res.json({message:'Api Ok'});
})

module.exports=app;
