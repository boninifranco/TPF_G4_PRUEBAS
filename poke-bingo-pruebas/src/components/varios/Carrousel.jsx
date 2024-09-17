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
      /*fetch({pokeJson}) // Ruta del archivo JSON
        .then((response) => response.json())
        .then((data) => setSlides(data))
        .catch((error) => console.error('Error al cargar los datos:', error));
        console.log(pokeJson)*/
        const slidesAleatorias = imagenesAleatorias(pokeJson, 10);
        setSlides(slidesAleatorias)
    }, []);
  return (
    <Carousel >
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
            <h3 style={{color: '#7A170C', textAlign:'center', fontSize:'36px',fontStyle:'italic'}}>{slide.name}</h3>
          <img
            className="d-block w-80"
            src={slide.image}
            alt="Imagen no disponible"
          />
          <Carousel.Caption>
            
            <h1 style={{color: '#7A170C', fontSize: '120px', fontWeight:'bold', fontStyle:'italic',textAlign:'right'}}>{slide.id}</h1>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
