const router=require('express').Router();
const paginatedResult = require('../middlewares/paginated-result');
const { validateRequestSchema } = require('../middlewares/validate.request.schema');
const productService=require('../services/product.service');
const formatResponse=require('../utilities/format.response');
const { postProductValidator } = require('./product.validators');
const {productPhotoUpload} =require('../middlewares/multer')
const Product = require('../models/product.model')

router.post('/add',postProductValidator,validateRequestSchema,async (req,res)=>{
    const {label,brand,category,price} = req.body;
    try {
        const result = await productService.addProduct({label,brand,category,price});
        res.json(result)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

router.get('/all',paginatedResult(require('../models/product.model')),async (req,res)=>{
    try {
       const result = await productService.getAllProducts();
       res.json(res.result) 
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

router.get('/:id',async (req,res)=>{
    const id=req.params.id;
    try {
       const result = await productService.getProductById(id);
       res.json(result) 
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

router.put('/:id',async (req,res)=>{
    const id=req.params.id;
    const {label,brand,category,price}=req.body;
    try {
       const result = await productService.updateProduct(id,{label,brand,category,price})
       res.json(result) 
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

router.delete('/:id',async (req,res)=>{
    const id=req.params.id;
    try {
       const result = await productService.deleteProduct(id)
       res.json(result) 
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

// upload product photo
router.put('/upload/:id', async (req, res, next) => {
    await productPhotoUpload(req, res, async (error) => {
        if (error) {
            res.status(500).json({ error: error.message })
        }
        try {
            const upLoadedPhoto = req.file;
            const photoUrl = 'uploads/' + upLoadedPhoto.filename
            const result = await Product.findByIdAndUpdate(req.params.id, { photo_url: photoUrl })
            res.json(result)
        } catch (error) {
            console.log(error)
            next(error)
        }
    })
}
)

module.exports=router;