const express = require('express');
const router = express.Router();
const user = require('../models/Idea')

router.get('/all', async(req,res)=>{
    try{
        const data =await user.find();
       res.json(data);
    }catch(err){
        res.json({massage:"server err"});
    }
})
router.post('/register', async(req,res)=>{
    try{
       const post = new user({
           name: req.body.name,
           email: req.body.email
       })
       console.log(post)
       const savepost = await post.save();
       res.json(savepost);
    }catch(err){
        res.json({massage:"server err"});

    }
})
router.put('/all/:id', async(req, res)=>{
    try{
     await user.findOneAndUpdate({_id:req.params.id},
            { 
                 name:req.body.name,
                 email:req.body.email
            
        })
        res.json({massage:"updated"});
    } catch(err){
        res.json({massage:"not update"});
    }
    
})
router.delete('/all/:id', async(req, res)=>{
    try{
     const data = await user.deleteOne({_id: req.params.id})
     res.json(data);
    }catch(err){
        res.json({massage:"server err"});
    }
})
module.exports = router;