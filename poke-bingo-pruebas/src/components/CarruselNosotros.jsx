import React from 'react'
import { Carousel } from 'react-bootstrap'
import imagen1 from '../assets/boceto1.jpeg'
import imagen2 from '../assets/boceto2.jpeg'
import imagen3 from '../assets/boceto3.jpeg'

export const CarruselNosotros = () => {
  return (
    <div>
        <Carousel interval={1000}>
      <Carousel.Item>
      <img src={imagen1} text="First slide" alt=""/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={imagen2} text="Second slide" alt=""/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={imagen3} text="Third slide" alt=""/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}
