const express = require('express');
const { getCountryAct, getCountriesByID, getCountriesByName } = require('../controller/controllers');

const router= express();

router.get('/countries', async (req, res)=>{
    const { name }= req.query;
    try {
    if(name){
        const countryName= await getCountriesByName(name);
        if(countryName.length!==0){
            return res.status(200).send(countryName)
        }else{
            return res.status(404).send('Pais no encontrado')
        }
    }else{
        const inf= await getCountryAct();
            if(inf) return res.status(200).send(inf);
            return res.status(404).send("no se encuentra las countries");
    }
      
    } catch (error) {
        console.log(error)
    }
    
})

router.get('/countries/:id', async (req, res)=>{

    const id = req.params.id.toUpperCase();
    try {
        const countryByID = await getCountriesByID(id);
            if(countryByID){
                return res.status(200).send(countryByID)
            } else {
                return res.status(404).send('Error 404, Pais no encontrado')
            }
    } catch (error) {
        console.log(error)
    }
})

module.exports= router;