import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import fondoLanding from "../../img/3.jpg"

export function LandingPage(){
    return(
        <div className='container'>
            <div className='PI-COUNTRIES'>

                <img className="fondo" src={fondoLanding} alt="no img"></img>

                <div className='division-2'>
                    <h1 className='titulo'>WELCOME TO COUNTRIES</h1>
                    <Link to="/home">
                     <button className='boton-ingresar'>Continue</button>
                    </Link>
                </div>

            </div>
        </div>
    )
}