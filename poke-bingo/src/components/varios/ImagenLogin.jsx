import React, { useEffect, useState } from 'react'
import pokeJson from '../../assets/pokemon.json'

export const ImagenLogin = () => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fade, setFade] = useState(true);

  // Cambiar la imagen cada 5 segundos
  useEffect(() => {
    
    const intervalId = setInterval(() => {
        // Desvanece la imagen actual
    setFade(false);
    setTimeout(()=>{
        setCurrentImageIndex((prevIndex) =>
            prevIndex === pokeJson.length - 1 ? 0 : prevIndex + 1
          );
          // Volver a mostrar la imagen después del cambio
        setFade(true);
    },500)
    
    }, 5000); // Cambia cada 5000ms (5 segundos)

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []);



  return (
    <img src={pokeJson[currentImageIndex].image} alt='Inicio de Sesión'style={{width:'30%',transition:'opacity 1s ease-in-out', opacity:fade ? '1' : '0'}}/>
  )
}
