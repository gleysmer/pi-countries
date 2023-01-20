import React from "react";
import './Paginado.css';

export function Pagination({countryPage, allCountries, paginado}){

  const pageNumbers =[]

  for (let i = 1; i <= Math.ceil(allCountries/countryPage); i++) {
    pageNumbers.push(i)
    
  }
  return(
    <nav>
         <div className="boton-1">
            {pageNumbers.map((number) => (
              <button  className="link"  key={number} onClick={() => paginado(number)}> {number} </button>
            ))}
        </div>
    </nav>
     
  );
}

