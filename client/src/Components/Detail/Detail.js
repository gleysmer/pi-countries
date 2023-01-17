import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import './Detail.css'
import { useDispatch, useSelector } from "react-redux";
import { getCountryDetail } from '../../Redux/Actions/index.js'

export default function Detail() {
  const dispatch = useDispatch();
  const {id} = useParams()
  const detail = useSelector((state)=> state.detail);
 
  useEffect(()=>{
    dispatch(getCountryDetail(id))
  }, [dispatch, id]);

  return (
    <div className='detail'>

      <div className='bot'>
       <Link to="/home"><button className='boton-volver'>Volver</button></Link>
      </div>

      <div className='padre-container'>
        <img className='imagen' src={detail.flags} alt="flags" />
        <p className='color'> Name: {Detail.name} </p>
        <p className='color'> Continents:{detail.continents} </p>
        <p className='color'> Capital:{detail.capital} </p>
        <p className='color'> Subregion:{detail.subregion} </p>
        <p className='color'> Area:{" "} {parseInt(detail.area).toLocaleString()} km2 </p>
        <p className='color'> Population:{" "} {parseInt(detail.population).toLocaleString()} </p>

        <h4 className='color-act'>Activities </h4>
          {detail.activities && detail.activities.map((e) => (
            <div key={e.id}>
                <p className='color'>Name: {e.name}</p>
                <p className='color'>Season: {e.season} </p>
                <p className='color'>Duration: {e.duration} </p>
                <p className='color'>Difficulty: {e.difficulty} </p>
            </div>
          ))}
      </div>
    </div>
  )
}
