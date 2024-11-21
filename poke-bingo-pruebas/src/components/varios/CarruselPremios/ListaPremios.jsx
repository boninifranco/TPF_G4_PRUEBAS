import React, { useState, useEffect } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import '../CarruselPremios/listaPremios.css'


export const ListaPremios = ({reload, premios, onSelectPremio, onRemovePremio })=> {
  //const [premios, setPremios] = useState([]);
  //const [loading, setLoading] = useState(true);
  

  

  /*if (loading) {
    return <div>Cargando premios...</div>;
  }*/

   /* Agrupa los premios en conjuntos de tres
  const premioChunks = [];
  for (let i = 0; i < premios.length; i += 3) {
    const chunk = premios.slice(i, i + 3);
    
    // Completa el último grupo con "espacios vacíos" si tiene menos de tres elementos
    while (chunk.length < 3) {
      chunk.push({ id: `empty-${chunk.length}`, empty: true });
    }

    premioChunks.push(chunk);
  }*/

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
                    <Button 
                variant="danger" 
                onClick={onRemovePremio} 
                style={{ 
                  position: 'absolute',
                  //top: '15px',
                  //right: '15px',
                  borderRadius: '50%',
                  padding: '2px 5px',
                  fontSize: '0.8rem'}}
              >
                ×
              </Button>
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


