
import React, { useEffect, useRef, useState } from 'react';
import { Button, Col, Container, Form, InputGroup, ListGroup, Row } from 'react-bootstrap';
import io from 'socket.io-client';
import './chatAdmin.css'
import {baseUrl} from '../../core/constant/constantes.ts';

const user = localStorage.getItem('userName');
const avatar = localStorage.getItem('avatar');
// Conectar con el backend WebSocket
const socket = io(`${baseUrl}`, {
  query: { user, avatar },
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
  const [reclamo, setReclamo] = useState();
  const [reclamos, setReclamos] = useState([]);
  const [reload, setReload] = useState(false)
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

  const handleReceiveReclamo = (newReclamo) => {
    console.log('Reclamo recibido en el cliente:', newReclamo);
    //messageCounter.current += 1;
    //setMessages((prevMessages) => 
      //[newMessage, ...prevMessages]    
      //);
      //setReclamo((newReclamo)=>[newReclamo, ...reclamo])
      setReclamo(newReclamo)
  };
    // Escuchar nuevos mensajes desde el servidor
    socket.on('receiveMessage', handleReceiveMessage);

    socket.on('receiveReclamo', handleReceiveReclamo);
    

    // Desconectar el socket cuando el componente se desmonta
    return () => {
      socket.off('receiveMessage', handleReceiveMessage);
      socket.off('receiveReclamo', handleReceiveReclamo);
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
  useEffect(()=>{
    if(reclamo){
      setReclamos([...reclamos, reclamo])
    }
    
  },[reclamo])
  
  console.log(reclamos)
  console.log(messages)
  return (
    <div style={{ maxWidth: '60%', margin: '0 auto' }}>
      <h3 style={{textAlign:'center',color:'#B11A17'}}>Chat de la Sala</h3>
      {reclamos.length>0 && reclamos.map((item,index)=><h5 key={index} style={{backgroundColor:'#B11A17', color:'#FFFAB3'}} onClick={()=>setReclamos([])}>{`${item.user}: ${item.message}`}</h5>)}
      {/*{reclamo &&<h5 style={{backgroundColor:'#B11A17', color:'#FFFAB3'}} onClick={()=>setReclamo('')}>{`${reclamo.user}: ${reclamo.message}`}</h5>}*/}
      {/* Mostrar la lista de mensajes */}
      <Container fluid style={{ height: '65vh', display: 'flex', flexDirection: 'column' }}>
      <Row style={{ flex: '1 1 auto', overflowY: 'auto', maxHeight: '55vh', border: '1px solid #ccc', borderRadius: '8px' }}>
      <Col>
      <ListGroup variant="flush" >
        {messages        
        .map((msg, index) => (
          <ListGroup.Item
           key={index}
           className={msg.user === user ? 'message my-message' : 'message other-message'}>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
              <div style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                <img src={msg.avatar} style={{width:'35px'}}/>
                <strong style={{fontSize:'9px'}}>{msg.user}</strong>                 
              </div>
              <span>
               : <strong style={{fontSize:'12px'}}>
              {msg.message}            
              </strong>
              </span>             

            </div>
            

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


