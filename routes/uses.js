const express= require('express')
const router= express.Router()
const bcrypt= require('bcrypt')
const {User}= require('../database')
const jsonwebtoken= require('jsonwebtoken')
router.post('/register', async (req, res) =>{
 req.body.password= bcrypt.hashSync(req.body.password, 10) 
 try{const user= await User.create(req.body)
  res.json(user)
 }catch(e){
     console.log(e) 
     res.status(500).json({error: 'error en db'})
 }
})

router.post('/login', async(req, res)=>{
   const user= await  User.findOne({ where: { email: req.body.email}})
   if (user){
       const passwordValid=bcrypt.compare(req.body.password,user.password)
  if(passwordValid){
      const token=jsonwebtoken.sign({
          id: user.id,
          email: user.email
      },'secret-baby',{expiresIn: 60*30})

     return res.json({token}) 

  }else{
    res.status(401).json({ error:'credenciales invalidas'})
  }
   }else{
       res.status(401).json({ error:'credenciales invalidas'})
   }
})

module.exports= router