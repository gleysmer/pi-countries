const { Router } = require('express');

const hola= Router();

hola.get('/', (req, res)=>{
    res.send("hola mundo")
})

module.exports= hola;