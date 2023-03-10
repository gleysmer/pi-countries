import React, { useEffect } from 'react';
import '../Home/Home.css'

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { getAllCountries, getActivities, filterByContinent, filterByActivity, orderByName, orderByPopulation } from '../../Redux/Actions';
import Card from '../Card/Card.js'
import { Pagination } from '../Pagination/Pagination';
import SearchBar from '../SearchBar/SearchBar';

export function Home() {
  const dispatch = useDispatch()

  const allCountries = useSelector((state)=> state.countries)
  const allActivities = useSelector((state)=> state.activities)

  
  const [PaginaActual, setPaginaActual] = useState(1)
  const [countryPage ] = useState(10)
  
  const indiceUltCountry = PaginaActual * countryPage
  const indicePrimerCountry = indiceUltCountry - countryPage

  const currentCountry = allCountries.slice(indicePrimerCountry, indiceUltCountry)
  



  const paginado = (number) => {
    setPaginaActual(number)
  }

  const [order, setOrder] = useState()
  console.log(order)

  useEffect(()=>{
    dispatch(getAllCountries())
  }, [dispatch]);

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  //##########################################################
  function handleClickRefresh(e){
    e.preventDefault()
    dispatch(getAllCountries());
    setPaginaActual(1)
  }

  function handleFilterByContinent(e){
    e.preventDefault()
    dispatch(filterByContinent(e.target.value))
    setPaginaActual(1)
  }

  function handleFilterAct(e){
    e.preventDefault()
    dispatch(filterByActivity(e.target.value))
    setPaginaActual(1)
  }

  function handleOrderByName(e){
    e.preventDefault()
    dispatch(orderByName(e.target.value));
    setOrder(`Ordenado ${e.target.value}`)
    setPaginaActual(1)
  }
   
  function handlePopulation(e){
    e.preventDefault();
    dispatch(orderByPopulation(e.target.value));
    setOrder(`Ordenado ${e.target.value}`);
    setPaginaActual(1)
    
  }
  return (
    <div className='background'>
        <div className='caja-1'>
          <SearchBar setPaginaActual={setPaginaActual}/> 

        <span className='span'>Continente:</span>
        <select className='select' onChange={(e)=> handleFilterByContinent(e)}>
          <option value='All'>All</option>
          <option value='Africa'>Africa</option>
          <option value='Antarctica'>Antarctica</option>
          <option value='Asia'>Asia</option>
          <option value='Europe'>Europa</option>
          <option value='North America'>North America</option>
          <option value='Oceania'>Oceania</option>
          <option value='South America'>South America</option>
        </select>      

        <span className='span'>Actividad:</span>
          <select className='select' onChange={(e)=>handleFilterAct(e)}>
            <option value='All'></option>{allActivities.map((e) => (
              <option value={e.name} key={e}>
                {e.name}
              </option>
            ))}
          </select>
      
      <span className='span'>Ordenar de forma:</span>                  
        <select className='select' onChange={(e)=>handleOrderByName(e)}>
          <option>All</option>
          <option value='ASC'>Ascendente A-Z</option>
          <option value='DES'>Descendente Z-A</option>
        </select>

      <span className='span'>Ordenar por poblacion:</span>
        <select className='select' onChange={(e)=>{handlePopulation(e)}}>
          <option>All</option>
          <option value='DESC'> Mas alta </option>
          <option value='ASC'> Mas baja </option>
        </select>

        <button className="refresh" onClick={(e)=>handleClickRefresh(e)}>Refresh countries</button>
      </div>

        <div className='caja-2'>
          {currentCountry.map((e)=>{
            return(
              <div className="home-card" key={e.id}>
                <Link to={"/country/" + e.id }>
                  <Card
                    id={e.id}
                    name={e.name}
                    flags={e.flags}
                    continents={e.continents}
                    />
                </Link>
              </div>
            )
          })}
        </div>
          <Pagination
          countryPage={countryPage}
          allCountries={allCountries.length}
          paginado={paginado}
        />
       
    </div>
  )
}
