import React from 'react'
import Pokebingo from '../../assets/PokeBingo.png'
import "../header/header.css"

export const Header = () => {

    const toggleMenu = ()=>{
        alert('hola')
    }
  return (
    
    <div className='parentHeader'>
    <img className='logoHeader'src={Pokebingo} alt="Imagen" />
    <div className='link-pages'>
            <p className='separarInicio tamanioHeader'>Nosotros</p>{/*{<Link to="/peliculas" className='efectoLink' onClick={toggleMenu}>Nosotros</Link>}*/}
            <p className='separarInicio tamanioHeader'>Sala de Juegos</p>{/*{<Link to="/series" className='efectoLink' onClick={toggleMenu}>Sala de Juegos</Link>} */}
            <p className='separarInicio tamanioHeader'>Mi Cuenta</p>{/*{<Link to="/buscar" className='efectoLink' onClick={toggleMenu}>Mi Cuenta</Link>}*/}
    </div>
    </div>
    
  )
}
