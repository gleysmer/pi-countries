import React from 'react'
import '../Card/Card.css'

export default function Card({id, name, flags , continents} ) {
  return (
    
    <div>

      <img className="image" src={flags} alt='not img' height='200px' width='200px' />
      
      <h2 className='name'>{name}</h2>
       
      <h4 className='continent'>{continents}</h4>

    </div>
  )
}
