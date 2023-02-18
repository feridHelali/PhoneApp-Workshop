const mongoose=require('mongoose');

const categoryEnumeration = ["Phone","Smart Phone","Tablet"]

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
        enum:{values:categoryEnumeration, message : '{VALUE} is not supported'}
    },
    price:{
        type:Number,
        min:0,
        max:99999
        
    },
    photo_url:{
        type:String,
        default:'https://guide-images.cdn.ifixit.com/igi/o4OjCNmNeOhvsS1P.standard'
    }

})

module.exports=mongoose.model('Product',ProductSchema);
