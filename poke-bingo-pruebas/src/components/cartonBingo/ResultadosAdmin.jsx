import { useState, useEffect } from 'react';
import { Button, Row, Table } from 'react-bootstrap';
import io from 'socket.io-client';
import CustomAlert from '../varios/CustomAlert/CustomAlert';

export const FilasOrdenadas = ({instancia, consultarGanador, partida}) => {
  const [filas, setFilas] = useState([]);
  const [aciertos, setAciertos] = useState(1);
  const [gano, setGano] = useState(false);
  //const [instancia, setInstancia] = useState(instanciaJuego)
  //const [filasFiltradas, setFilasFiltradas] = useState([])
  //const [instanciaJuego, setInstanciaJuego] = useState(instancia)
  
 
  
  
  const seleccionarInstancia =(i)=>{
  let aciertosNecesarios = 1;
  switch (i) {
    case 'ambo':
      aciertosNecesarios = 2;
      break;
    case 'terno':
      aciertosNecesarios = 3;
      break;
    case 'cuaterno':
      aciertosNecesarios = 4;
      break;
    case 'linea':
      aciertosNecesarios = 5;
      break;
    case 'bingo':
      aciertosNecesarios = 15;
      break;
    default:
      aciertosNecesarios = 1;
      break;
      
  }
  setAciertos(aciertosNecesarios);  
}

  
  // Función para obtener las filas ordenadas
  const fetchFilasOrdenadas = async () => {
    //console.log(`Aciertos necesarios: ${aciertosNecesarios}`)
    if(!aciertos)return
    const response = await fetch(`http://localhost:3000/filas/ordenadas-desc/${aciertos}/${partida}`);
    if(response.ok){
      const data = await response.json();
    setFilas(data); // Guardar las filas en el estado
    }else{
      
      setFilas([]); // Guardar las filas en el estado
    }
    
  };

  useEffect(() => {
    //fetchFilasOrdenadas(); // Llamar a la función cuando el componente se monte
    
    
    
    const fetchInterval = setInterval(() => {
      seleccionarInstancia(instancia);
      fetchFilasOrdenadas(); // Llama a la función para actualizar las filas
      
    }, 500000); // Cada 500ms

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(fetchInterval);
  }, [aciertos]);
  //console.log(instancia);
  //console.log(aciertos);
  //console.log(filas.length)

  useEffect(()=>{
    //const interval = setInterval(()=>{
      seleccionarInstancia(instancia)
      
    //},500)
    //return () => clearInterval(interval)
  },[instancia])

  useEffect(()=>{
    if(filas.length===0) return;
    const filasQueCumplen = filas.filter(fila => fila.aciertos >= aciertos);
    if (filasQueCumplen.length > 0) {
      console.log(`¡Tenemos ${instancia} con ${aciertos} aciertos!`);
      setGano(true)
      
    }else{
      setGano(false)

    }
   
  },[filas,instancia])

  console.log(JSON.stringify(filas))

/*const socket = io('http://localhost:3000'); // Conéctate al servidor WebSocket de NestJS

export const FilasOrdenadas = () => {
  const [filas, setFilas] = useState([]);

  useEffect(() => {
    // Al montar el componente, escuchamos el evento "updateFilas"
    socket.on('updateFilas', (data) => {
      setFilas(data);
    });

    // Limpiar el socket cuando el componente se desmonte
    return () => {
      socket.off('updateFilas');
    };
  }, []);*/
  
  
  console.log(instancia)

  return (
    <div >
      
      <h5 style={{textAlign:'center',color:'#B11A17'}}>{!gano ? `Aciertos por fila` : `¡Tenemos ${instancia} !` }</h5>
           
      <Row style={{ flex: '1 1 auto', overflowY: 'auto', maxHeight: '25vh', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '8px' }}>
      {filas.length == undefined ? (
        <p style={{textAlign:'center',color:'#B11A17'}}>No hay filas con {aciertos} aciertos</p>
      ):(<Table striped bordered hover>
        <thead >
          <tr>
            <th style={{width:'33%'}}>Fila id</th>
            <th style={{width:'33%'}}>Cartón id</th>
            <th style={{width:'33%'}}>Aciertos</th>
            
          </tr>
        </thead>
        <tbody>
          {filas.map((fila) => (
            <tr key={fila.filaId} style={{cursor:'pointer'}} onClick={() => consultarGanador(fila.filaId)}> 
              <td>{fila.filaId}</td>
              <td>{fila.carton.cartonId}</td>
              <td>{fila.aciertos}</td>
              
            </tr>
          ))}
        </tbody>
      </Table>)}
      </Row>
      
      
    </div>
  );
};


