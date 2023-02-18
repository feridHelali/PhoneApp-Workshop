const express = require("express");
const cors=require("cors");
const morgan = require('morgan');
const rfs = require("rotating-file-stream");
const userRouter=require('./controllers/user.controller');
const productRouter=require('./controllers/product.controller');
const path = require('path')

const stream = rfs.createStream("access.log", {
  interval: "1d", // rotate daily
});

const app=express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('tiny'))
app.use(morgan('tiny', { stream: stream }))


app.use('/user',userRouter);
app.use('/product',productRouter)


app.get('/',(req,res)=>{
        res.json({message:'Api Ok'});
})

app.use((error,req,res,next)=>{
        if(error.Type)
        res.json({Error:`500 Server Error ${error.message}`});
})


module.exports=app;
