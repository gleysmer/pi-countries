import React from 'react'
import '../Card/Card.css'

export default function Card({id, name, flags , continents} ) {
  return (
    
    <div>

      <img className="image" src={flags} alt='img not found' height='200px' width='282px' />
      
      <h2 className='name'>{name}</h2>
       
      <h4 className='continent'>{continents}</h4>

    </div>
  )
}
