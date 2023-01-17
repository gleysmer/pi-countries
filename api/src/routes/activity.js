const express= require('express');

const { postActivity, getActivityCountry }= require('../controller/controllers.js');

const router= express();

router.post('/createactivity', async(req, res)=>{
    const { name, difficulty, duration, season, countries} = req.body;
    try {
        if(!name, !difficulty, !season, !countries){
            res.status(404).send({ message: 'ingrese los campos'})
        }else{
            const newActivity= await postActivity(name, difficulty, duration, season, countries);
        return res.status(200).send(newActivity);
        }
        
    } catch (error) {
        console.log(error)
    }
   
});

router.get('/activity', async (req, res)=>{
    try {
        const activityAll= await getActivityCountry();
    if(activityAll) return res.send(activityAll).status(200);
    return res.send('no se encuentra actividad').status(404)
    } catch (error) {
        console.log(error)
    }
    
})


module.exports= router;