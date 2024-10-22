import { useState, useEffect } from 'react';
import { Row, Table } from 'react-bootstrap';
import io from 'socket.io-client';

export const FilasOrdenadas = () => {
  const [filas, setFilas] = useState([]);

  // Función para obtener las filas ordenadas
  const fetchFilasOrdenadas = async () => {
    const response = await fetch('http://localhost:3000/filas/ordenadas-desc'); // Llamar al endpoint
    const data = await response.json();
    setFilas(data); // Guardar las filas en el estado
  };

  useEffect(() => {
    //fetchFilasOrdenadas(); // Llamar a la función cuando el componente se monte
    const fetchInterval = setInterval(() => {
      fetchFilasOrdenadas(); // Llama a la función para actualizar las filas
    }, 500); // Cada 500ms

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(fetchInterval);
  }, []);
  //console.log(JSON.stringify(filas))

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


  return (
    <div >
      <h3 style={{textAlign:'center',color:'#B11A17'}}>Aciertos por fila</h3>      
      <Row style={{ flex: '1 1 auto', overflowY: 'auto', maxHeight: '80vh', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '8px' }}>
      {<Table striped bordered hover>
        <thead>
          <tr>
            <th>Fila id</th>
            <th>Cartón id</th>
            <th>Aciertos</th>
            
          </tr>
        </thead>
        <tbody>
          {filas.map((fila) => (
            <tr key={fila.filaId} onClick={''} style={{cursor:'pointer'}}> 
              <td>{fila.filaId}</td>
              <td>{fila.carton.cartonId}</td>
              <td>{fila.aciertos}</td>
              
            </tr>
          ))}
        </tbody>
      </Table>}
      </Row>
      
    </div>
  );
};


