const axios = require('axios');
const { Country, Activity }= require('../db.js')
const { Op } =require('sequelize')

const getCountries= async ()=>{ 
    try {
        
            let data = await axios.get('https://restcountries.com/v3/all')
        let result=  data.data.map((contries)=>{
            return {
                id: contries.cca3,
                name : contries.name.common,
                flags: contries.flags[1],
                continents: contries.continents[0],
                capital: contries.capital? contries.capital[0] :"no se encuentra la capital",
                subregion: contries.subregion ? contries.subregion : 'no se encuentra Subregion',
                area: contries.area,
                population: contries.population
            }
       })
      
    return result;

    } catch (error) {
        console.log(error)
    }
}

// -------------------------------------------------------

const createdb= async ()=>{
    try {
        const data= await getCountries();

    data.forEach(country => {
        Country.findOrCreate({
            where: {
                    id:country.id,
                    name:country.name, 
                    flags:country.flags,
                    continents:country.continents,
                    capital: country.capital,
                    subregion: country.subregion,
                    area: country.area,
                    population: country.population,
                }
        })
    })
    } catch (error) {
        console.log(error)
    }
    
};
// -------------------------------------------------------

const postActivity = async (name,difficulty,duration,season, countries) =>{
   
    let newActivity = await Activity.create({
        name,
        difficulty,
        duration,
        season,
    });
    
   const countriesAct = await Country.findAll({
        where: {
                name: countries,
          },
    });
    
    newActivity.addCountry(countriesAct);
};

// ----------------------------------------------

const getCountryAct= async ()=>{
    try {
        let data= await Country.findAll({
            include: [{
                model: Activity,
                attributes: ["name","difficulty","duration","season"],
                through: {
                    attributes: [],
                },
            }]
        })
        console.log(data)
    
        return data;
    } catch (error) {
        console.log(error)
    }
    
}

// ------------------------------------------------------

const getActivityCountry= async()=>{
    try {
        let data= await Activity.findAll({
            include: [{
                model: Country,
                attributes: ["name"],
                 
            }],
        });
        return data;
    } catch (error) {
        console.log(error)
    }
    
}
// ------------------------------------------------------------------

const getCountriesByID=async(id)=>{
    try {
        return Country.findByPk(id, {
            include: [{
                model: Activity,
                attributes: ["name","difficulty","duration","season"],
                through: {
                    attributes: []
                }
            }],
        })
    } catch (error) {
        console.log(error)
    }
}
// ----------------------------------------------------------------------

const getCountriesByName = async (name) => {
    try {
        return await Country.findAll({
            where: {
                name: {
                    [Op.iLike] : `%${name}%`
                }
            },
            include: [{
                model: Activity,
                attributes: ["name","difficulty","duration","season"],
                through: {
                    attributes: []
                } 
            }]
        });
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createdb,
    postActivity,
    getCountryAct,
    getActivityCountry,
    getCountriesByID,
    getCountriesByName
}