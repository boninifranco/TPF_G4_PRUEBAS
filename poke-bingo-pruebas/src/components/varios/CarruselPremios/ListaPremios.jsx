import React, { useState, useEffect } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import '../CarruselPremios/listaPremios.css'


export const ListaPremios = ({premios, onSelectPremio})=> {
  

  return (
    <div className="premios-list-container">
    <ListGroup className="premios-list-group">
      {premios.map((premio) =>
        <ListGroup.Item key={premio.id}className="premio-list-item" >          
                          
                  <Card 
                  className='premio-card'
                  onClick={() => onSelectPremio(premio)}
                  style={{ cursor: 'pointer' }} >
                    <Card.Img
                      variant="top"
                      src={premio.imagen}
                      alt={`Imagen de ${premio.descripcion}`}
                      className="premio-card-img"
                    />
                    
                    <Card.Body className="premio-card-body">
                      <Card.Title>{premio.descripcion}</Card.Title>
                      <Card.Text>
                        <strong>Créditos:</strong> {premio.creditos}
                        <br />
                        <strong>Stock:</strong> {premio.stock}
                      </Card.Text>
                    </Card.Body>
                  </Card>
        </ListGroup.Item>
      )}
    </ListGroup>
    </div>
  );
}


