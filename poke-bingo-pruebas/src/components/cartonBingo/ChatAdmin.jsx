
import React, { useEffect, useRef, useState } from 'react';
import { Button, Col, Container, Form, InputGroup, ListGroup, Row } from 'react-bootstrap';
import io from 'socket.io-client';
import './chatAdmin.css'

const user = localStorage.getItem('user');
// Conectar con el backend WebSocket
const socket = io('http://localhost:3000', {
  query: { user },
  reconnection: true,        // Habilitar reconexión automática
  reconnectionAttempts: 10,  // Número de intentos de reconexión
  reconnectionDelay: 1000,   // Delay en milisegundos entre intentos
});
// Manejo de eventos
socket.on('connect', () => {
  console.log('Conectado al servidor WebSocket');
});

socket.on('disconnect', () => {
  console.log('Desconectado del servidor WebSocket');
});

socket.on('connect_error', (error) => {
  console.error('Error en la conexión:', error);
});

//ver si le pasamos la salaId como props
export const ChatAdmin = () => {
  const salaId = 1;
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  //const messageCounter = useRef(0); 
  
  
  
  // Escuchar mensajes cuando el componente se monta
  useEffect(() => {
    if (!socket.connected) {
      socket.connect();
      console.log('tuve que conectar')
    }
    // Función para manejar mensajes recibidos
  const handleReceiveMessage = (newMessage) => {
    console.log('Mensaje recibido en el cliente:', newMessage);
    //messageCounter.current += 1;
    setMessages((prevMessages) => 
      [newMessage, ...prevMessages]    
      );
  };
    // Escuchar nuevos mensajes desde el servidor
    socket.on('receiveMessage', handleReceiveMessage);
    

    // Desconectar el socket cuando el componente se desmonta
    return () => {
      socket.off('receiveMessage', handleReceiveMessage);
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    //const user = localStorage.getItem('user')
    if (message.trim()) {
      
      // Enviar el mensaje al servidor WebSocket
      socket.emit('sendMessage', { message});
      

      //alert('hola')
      console.log(message)
      
      
      // Limpiar el input
      setMessage('');
    }
  };
  console.log(messages)
  return (
    <div style={{ maxWidth: '60%', margin: '0 auto' }}>
      <h3 style={{textAlign:'center',color:'#B11A17'}}>Chat de la Sala</h3>

      {/* Mostrar la lista de mensajes */}
      <Container fluid style={{ height: '65vh', display: 'flex', flexDirection: 'column' }}>
      <Row style={{ flex: '1 1 auto', overflowY: 'auto', maxHeight: '55vh', padding: '0.3rem', border: '1px solid #ccc', borderRadius: '8px' }}>
      <Col>
      <ListGroup variant="flush" style={{ overflowY: 'scroll' }}>
        {messages        
        .map((msg, index) => (
          <ListGroup.Item
           key={index}
           className={msg.user === user ? 'message my-message' : 'message other-message'}>
            <strong>{msg.user}:</strong> {msg.message}
            {/*<strong className="timestamp">
            {format(new Date(msg.timestamp), 'dd/MM/yyyy HH:mm')}
            </strong>*/}
            
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


