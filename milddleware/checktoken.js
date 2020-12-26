
const jsonwebtoken= require('jsonwebtoken')
const checktoken=(req, res, next)=>{
    let token=  req.get('token')
    jsonwebtoken.verify(token,'secret-baby',(error, decoded)=>{
if(error){ return res.status(400).json({error})}
next()
    })
          
}
module.exports={
    checktoken
}