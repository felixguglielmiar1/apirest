const router= require('express').Router()
const { Categoria }= require('../database')
const {checktoken}=require('../milddleware/checktoken')
const categoria = require('../models/categoria')
const {body, validationResult}=require('express-validator')

router.get('/', async (req, res)=>{
    const categorias= await Categoria.findAll()
    res.json(categorias)
 
})
router.get('/:id', async (req, res)=>{
    const categorias= await Categoria.findOne({where: {id: req.params.id}})
    res.json(categorias)

})
router.post('/', checktoken,[
    body('nombre').isLength(3).withMessage('el campo es obligatorio y tiene que tener mas caracteres')
]
, async (req, res)=>{
    const errores=validationResult(req)
    if(!errores.isEmpty()){
        return  res.json(errores.array())
    }
    try{
const categoria= await Categoria.create(req.body)
res.json(categoria)}
catch(error){console.log(error)}
})
router.put('/:id',checktoken,async(req,res)=>{
    const result= await Categoria.update(req.body ,{where:{id: req.params.id}})
    res.json(result)
})
router.delete('/:id',checktoken, async (req, res)=>{
    const result= await Categoria.destroy({where: {id: req.params.id}})
    res.json(result)
})
module.exports=router

