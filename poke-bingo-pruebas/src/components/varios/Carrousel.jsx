import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap';
import pokeJson from '../../assets/pokemon.json'

export const Carrousel = () => {

    const [slides, setSlides] = useState([]);

    const imagenesAleatorias = (data, num) => {
        // Mezcla los elementos del array de manera aleatoria
        const aleatorio = data.sort(() => 0.5 - Math.random());
        // Retorna los primeros `num` elementos
        return aleatorio.slice(0, num);
      };

    // Cargar datos desde el archivo JSON
    useEffect(() => {      
        const slidesAleatorias = imagenesAleatorias(pokeJson, 10);
        setSlides(slidesAleatorias)
    }, []);
  return (
    <Carousel >
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
            <h3 style={{color: '#7A170C', textAlign:'center', fontSize:'36px',fontStyle:'italic'}}>{slide.name}</h3>
          <img
            className="d-block w-50"
            src={slide.image}
            alt="Imagen no disponible"
          />
          <Carousel.Caption>
            
            <h1 style={{color: '#7A170C', fontSize: '100px', fontWeight:'bold', fontStyle:'italic',textAlign:'right'}}>{slide.id}</h1>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
