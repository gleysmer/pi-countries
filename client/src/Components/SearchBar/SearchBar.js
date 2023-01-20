import React from 'react'
import '../SearchBar/SearchBar.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getCountryName } from '../../Redux/Actions/index.js'
import { useState } from 'react'

export default function SearchBar({setPaginaActual}) {
  const dispatch = useDispatch()
  const [name , setName] = useState('')

  function handleInputChange(e){
    e.preventDefault()
    setName(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    dispatch(getCountryName(name))
    setName('')
    setPaginaActual(1)
  }

  return (
    <div className='container'>
        <div>
          <Link to="/"><button className='inicio_boton'>Inicio</button></Link>
          <Link to="/about"><button className='inicio_boton'>About</button></Link>
          <input 
            className='busqueda'
            value={name}
            type='text' 
            placeholder="Buscar pais..."
            onChange={(e)=>{handleInputChange(e)}}
            >
          </input>

          <button className='buscar' onClick={(e)=>{handleSubmit(e)}}>Buscar</button>

          <Link to="/createActivity"><button className='createcountry_boton'>Create Activity</button></Link>
        </div>
        
    </div>
  )  
}
