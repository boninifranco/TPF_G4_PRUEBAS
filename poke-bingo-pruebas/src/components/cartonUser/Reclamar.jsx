import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import io from 'socket.io-client';
import {baseUrl} from '../../core/constant/constantes.ts';

const user = localStorage.getItem('user');

// Conectar con el backend WebSocket
const socket = io(`${baseUrl}`, {
  query: { user},
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

export const Reclamar = () => {
  const [reclamo, setReclamo] = useState('');
  const [reload, setReload] = useState(false)

  const handleOnClick = async (click) => {//Funcion iniciar Partida
    click.preventDefault();
    try {
      const response = await fetch(
        `${baseUrl}/partidas/ultima-partida`
      );
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("partidaId", data.partidaId);
      } else {
        const errorData = await response.json();
        console.log("Error al asignar partida:", errorData);
      }
    } catch (error) {
      console.log(error);
    }
  };
  
    const [buttonText, setButtonText] = useState('Ambo');
  
    useEffect(() => { //Funcion Reclamar
      const partidaId = localStorage.getItem('partidaId');
  
      const fetchResultados = async () => {
        try {
          const response = await fetch(`${baseUrl}/resultado/bypartida/${partidaId}`);
          const resultados = await response.json();
  
          const resultadosTexto = resultados.map((r) => r.resultado);
  
          if (resultadosTexto.includes('Fila')) {
            setButtonText('Bingo');
          } else if (resultadosTexto.includes('Cuaterno')) {
            setButtonText('Fila');
          } else if (resultadosTexto.includes('Terno')) {
            setButtonText('Cuaterno');
          } else if (resultadosTexto.includes('Ambo')) {
            setButtonText('Terno');
          } else {
            setButtonText('Ambo');
          }
        } catch (error) {
          console.error('Error fetching resultados:', error);
        }
      };
  
      fetchResultados();

    }, []);

    const ganoInstancia = ()=>{

      setReclamo(`Gane la instancia ${buttonText}`)
      setReload(!reload)
      
    }
    useEffect(()=>{
      if(reclamo){
        socket.emit('sendReclamo', {reclamo});
      }
      
    },[reload])
    
    
    
    console.log(reclamo)
  return (
    <div>      
      <Button className="button_reg" onMouseUp={(e) => e.currentTarget.blur()} onClick={()=>ganoInstancia()}>Reclamar {buttonText}</Button>
    </div>
  );
};
