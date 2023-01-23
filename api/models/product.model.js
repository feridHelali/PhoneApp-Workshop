const mongoose=require('mongoose');

const Schema= mongoose.Schema;

const ProductSchema=new Schema({
    label:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    category:{
        type:String,
        default:'Unknown'
    },
    price:{
        type:Number,
        
    },
    photo_url:{
        type:String,
        default:'https://guide-images.cdn.ifixit.com/igi/o4OjCNmNeOhvsS1P.standard'
    }

})

module.exports=mongoose.model('Product',ProductSchema);
