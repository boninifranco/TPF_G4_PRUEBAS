import React from 'react'
import Pokebingo from '../../assets/PokeBingo.png'
import "../header/header.css"

export const Header = () => {
  return (
    
    <div className='parentHeader'>
    <img className='logoHeader'src={Pokebingo} alt="Imagen" />
    <div className='link-pages'>
            <p className='separarInicio tamanioHeader'>Nosotros</p>
            <p className='separarInicio tamanioHeader'>Sala de Juegos</p>
            <p className='separarInicio tamanioHeader'>Mi Cuenta</p>
    </div>
    </div>
    
  )
}
