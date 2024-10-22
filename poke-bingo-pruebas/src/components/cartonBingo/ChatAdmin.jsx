
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, InputGroup, ListGroup, Row } from 'react-bootstrap';
import io from 'socket.io-client';
import './chatAdmin.css'

// Conectar con el backend WebSocket
const socket = io('http://localhost:3000'); // Cambia la URL al servidor WebSocket

//ver si le pasamos la salaId como props
export const ChatAdmin = () => {
  const salaId = 1;
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  
  
  
  // Escuchar mensajes cuando el componente se monta
  useEffect(() => {
    // Escuchar nuevos mensajes desde el servidor
    socket.on('receiveMessage', (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    // Desconectar el socket cuando el componente se desmonta
    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    const user = localStorage.getItem('user')
    if (message.trim()) {
      // Enviar el mensaje al servidor WebSocket
      socket.emit('sendMessage', { message, salaId });
      
      // Limpiar el input
      setMessage('');
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h3 style={{textAlign:'center',color:'#B11A17'}}>Chat de la Sala</h3>

      {/* Mostrar la lista de mensajes */}
      <Container fluid style={{ height: '75vh', display: 'flex', flexDirection: 'column' }}>
      <Row style={{ flex: '1 1 auto', overflowY: 'auto', maxHeight: '55vh', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '8px' }}>
      <Col>
      <ListGroup variant="flush" style={{ overflowY: 'scroll' }}>
        {messages.reverse().map((msg, index) => (
          <ListGroup.Item key={index}>
            <strong>{msg.user}:</strong> {msg.message}
            
          </ListGroup.Item>
        ))}
      </ListGroup>
      </Col>
      </Row>

      {/* Sección para escribir mensajes */}
      <Row style={{ padding: '0.5rem 0' }}>
        <Col>
      <InputGroup className="mt-3">
        <Form.Control
          placeholder="Escribe un mensaje..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
        />
        <InputGroup>       
        
          <Button variant="primary" onClick={sendMessage} style={{width:'10em', height:'3em', borderRadius:'30px', backgroundColor:'#5BB117',color:'#FFFAB3',marginTop:'5px'}}>Enviar</Button>
        </InputGroup>
      </InputGroup>
      </Col>
      </Row>
      </Container>
    </div>
  );
};


