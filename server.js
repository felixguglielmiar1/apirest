const express=require('express')
const app=express()
const {checktoken}=require('./milddleware/checktoken')
 
app.get('/',checktoken ,(req, res)=>{
    res.send('ok')  
})    
app.use(express.urlencoded({extended: true}))//para enviar cuerpo de formulario
app.use('/api/register', require('./routes/uses'))
app.use('/api/categorias', require('./routes/categorias'))
app.use(express.json)//interpresa objetos

   
app.listen(3000, ()=> console.log('*3000'))