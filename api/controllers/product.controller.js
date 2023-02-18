const router=require('express').Router();
const paginatedResult = require('../middlewares/paginated-result');
const { validateRequestSchema } = require('../middlewares/validate.request.schema');
const productService=require('../services/product.service');
const formatResponse=require('../utilities/format.response');
const { postProductValidator } = require('./product.validators');

router.post('/add',postProductValidator,validateRequestSchema,async (req,res)=>{
    const {label,brand,category,price} = req.body;
    try {
        const result = await productService.addProduct({label,brand,category,price});
        res.json(result)
    } catch (error) {
        res.json(formatResponse('ERROR',error.message))
    }
})

router.get('/all',paginatedResult(require('../models/product.model')),async (req,res)=>{
    try {
       const result = await productService.getAllProducts();
       res.json(res.result) 
    } catch (error) {
        res.json(formatResponse('ERROR',error.message)) 
    }
})

router.get('/:id',async (req,res)=>{
    const id=req.params.id;
    try {
       const result = await productService.getProductById(id);
       res.json(result) 
    } catch (error) {
        res.json(formatResponse('ERROR',error.message)) 
    }
})

router.put('/:id',async (req,res)=>{
    const id=req.params.id;
    const {label,brand,category,price}=req.body;
    try {
       const result = await productService.updateProduct(id,{label,brand,category,price})
       res.json(result) 
    } catch (error) {
        res.json(formatResponse('ERROR',error.message)) 
    }
})

router.delete('/:id',async (req,res)=>{
    const id=req.params.id;
    try {
       const result = await productService.deleteProduct(id)
       res.json(result) 
    } catch (error) {
        res.json(formatResponse('ERROR',error.message)) 
    }
})

module.exports=router;