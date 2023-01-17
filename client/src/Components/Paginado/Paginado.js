import React from "react";
import './Paginado.css';

export default function Paginado({PaisesPorPagina, allCountries, paginado}){

  const pageNumbers =[]

  for (let i = 1; i <= Math.ceil(allCountries/PaisesPorPagina); i++) {
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

