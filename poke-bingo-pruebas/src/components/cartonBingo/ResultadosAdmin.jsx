import { useState, useEffect } from 'react';
import { Row, Table } from 'react-bootstrap';
import {baseUrl} from '../../core/constant/constantes.ts';

export const FilasOrdenadas = ({instancia, consultarGanador, partida}) => {
  const [filas, setFilas] = useState([]);
  const [aciertos, setAciertos] = useState(1);
  const [gano, setGano] = useState(false);
 
  
  
  const seleccionarInstancia =(i)=>{
  let aciertosNecesarios = 1;
  switch (i) {
    case 1:
      aciertosNecesarios = 2;
      break;
    case 2:
      aciertosNecesarios = 3;
      break;
    case 3:
      aciertosNecesarios = 4;
      break;
    case 4:
      aciertosNecesarios = 5;
      break;
    case 5:
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
    if(!aciertos)return
    const response = await fetch(`${baseUrl}/filas/ordenadas-desc/${aciertos}/${partida}`);
    if(response.ok){
      const data = await response.json();
    setFilas(data); // Guardar las filas en el estado
    }else{
      
      setFilas([]); // Guardar las filas en el estado
    }
    
  };

  useEffect(() => {
    const fetchInterval = setInterval(() => {
      seleccionarInstancia(instancia.id);
      fetchFilasOrdenadas(); // Llama a la función para actualizar las filas
      
    }, 500); // Cada 500ms

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(fetchInterval);
  }, [aciertos]);

  useEffect(()=>{
      seleccionarInstancia(instancia.id)
  },[instancia])

  useEffect(()=>{
    if(filas.length===0) return;
    const filasQueCumplen = filas.filter(fila => fila.aciertos >= aciertos);
    if (filasQueCumplen.length > 0) {
      setGano(true)
      
    }else{
      setGano(false)

    }
   
  },[filas,instancia])

  return (
    <div >
      
      <h5 style={{textAlign:'center',color:'#B11A17'}}>{!gano ? `Aciertos por fila` : `¡Tenemos ${instancia.descripcion} !` }</h5>
           
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


