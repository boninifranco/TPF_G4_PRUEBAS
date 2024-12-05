import React, { useEffect, useState } from 'react';
import './yasalieron.css'
import io from 'socket.io-client';
import {baseUrl} from '../../core/constant/constantes.ts';

const socket = io(`${baseUrl}`, {
  //query: { user},
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

export const YaSalieron = () => {
  const [fichaSalio, setFichaSalio] = useState({
    salio:{
      id:'',
      url:''
    }
    
  });
  const [salieronTodos, setSalieronTodos] = useState([]);
  const salieronReverse = [...salieronTodos].reverse()

  const handleReceiveFicha = (newFicha) => {
    console.log('Ficha recibida en el cliente:', newFicha);
     
      setFichaSalio(newFicha)
      
  };

  useEffect(()=>{
    setSalieronTodos([...salieronTodos, fichaSalio])
  },[fichaSalio])
  
    // Escuchar nuevos mensajes desde el servidor
    socket.on('receiveFicha', handleReceiveFicha);
    console.log('ficha salio es:', fichaSalio)
    console.log('salieron todos', salieronTodos)

  return (
    <div className='fichasUser'>
       {fichaSalio.salio.id != '' && (
        <div className='salio'>
          <h4>Última ficha salida:</h4>
          <div className="casillero">
            <img src={ fichaSalio.salio.url} alt={`Última ficha ${''}`} />
            <p>{fichaSalio.salio.id}</p>
          </div>
        </div>
      )}
      <h4>Ya salieron:</h4>
      <div className='salieron'>
        {salieronReverse && fichaSalio.salio.id != '' && salieronReverse.slice(0, salieronReverse.length-1).map((ficha) => (
          <div key={ficha.salio.id} className="casillero">
            <img src={ficha.salio.url} alt={`Ficha ${'hola'}`} />
            <p>{ficha.salio.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
};