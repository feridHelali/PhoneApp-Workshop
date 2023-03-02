const router=require('express').Router()
const userService=require('../services/user.service')
const authentication=require('../middlewares/authentication')

router.post('/register',async (req,res)=>{
    const {fullName,email,password}=req.body;
    
    try {
        const result = await userService.register(fullName,email,password);
        res.json(result);        
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

router.post('/login',async (req,res)=>{
    const {email,password}=req.body;
    try {
        const result = await userService.login(email,password);
        res.json(result);        
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

router.get('/all', authentication,async (req,res)=>{
    try {
        const result = await userService.getAllUsers();
        res.json(result);
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

module.exports=router;