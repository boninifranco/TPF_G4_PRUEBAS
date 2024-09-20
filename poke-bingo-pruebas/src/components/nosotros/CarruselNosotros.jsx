import React from 'react'
import { Carousel } from 'react-bootstrap'
import './carruselNosotros.css'
import imagen1 from '../../assets/boceto1.jpeg'
import imagen2 from '../../assets/boceto2.jpeg'
import imagen3 from '../../assets/boceto3.jpeg'

export const CarruselNosotros = () => {
  return (
    <div className="nosCarrusel">
  <div className="carousel-container">
    <Carousel fade indicators={false} controls={false} pause={false}>
      <Carousel.Item interval={5000}>
        <img className="d-block w-100" src={imagen1} alt=""/>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={imagen2} alt=""/>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={imagen3} alt=""/>
      </Carousel.Item>
    </Carousel>
  </div>
</div>
  )
}
