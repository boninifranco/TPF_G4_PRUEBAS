import React, { useEffect, useState } from 'react'
import io from 'socket.io-client';
import '../cartonBingo/juego.css'
import { FilasOrdenadas } from './ResultadosAdmin';
import { CartonBingo } from './CartonBingo';
import { Dropdown, Row } from 'react-bootstrap';

// Conectar con el backend WebSocket
const socket = io('http://localhost:3000', {
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

export const Juego = ({partida, seleccionadas, instancia, consultarGanador}) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [partidaSelec, setPartidaSelec] = useState(partida)
    const [salieron, setSalieron] = useState([]);
    const [partidasSelec, setPartidasSelec] = useState(seleccionadas);
    const [salio, setSalio] = useState({});
    const [cartones, setCartones] = useState([]);
    const [criterioOrden, setCriterioOrden] = useState({ criterio: 'cartonId', orden: 'ASC' });
    const [instanciaJuego, setInstanciaJuego] = useState(instancia)
    const [ganadores, setGanadores] = useState([])

    

    const seleccionarAleatorio = async () => {
        if (partidasSelec.length > 0) {
          const randomIndex = Math.floor(Math.random() * partidasSelec.length);
          const imagenSeleccionada = partidasSelec[randomIndex];
    
          // Eliminar la imagen seleccionada del array de seleccionadas
          const nuevasSeleccionadas = partidasSelec.filter((_, index) => index !== randomIndex);          
          setPartidasSelec(nuevasSeleccionadas);
          
    
          // Añadir la imagen seleccionada al array de salieron
          //setSalieron([...salieron, imagenSeleccionada.imagen]);
          setSalio(imagenSeleccionada.imagen);
          fetchSalieron();
    
          // Enviar la imagen seleccionada al backend para actualizar casilleros
          await marcarCasillerosPorImagen(imagenSeleccionada.imagen.imagenId);
        }else{
          console.log('hola')
        }
      };
      console.log(JSON.stringify(salieron))
      // Función para hacer el PATCH con el imagenId al backend
      const marcarCasillerosPorImagen = async (imagenId) => {
        try {
          const response = await fetch(`http://localhost:3000/casilleros/salir-por-imagen/${imagenId}`, {
            method: 'PATCH',
          });
    
          if (!response.ok) {
            throw new Error('Error al marcar casilleros como salidos');
          }
          actualizarAciertosCarton();
          nuevoFetchCartones();
          // Después del PATCH, podrías hacer un nuevo fetch de los cartones actualizados
          // para obtener los casilleros modificados
          
        } catch (error) {
          console.error(error);
        }
        
      };
    
      const fetchSalieron = async()=>{
        const response = await fetch('http://localhost:3000/casilleros/salieron')
        try{
        if (!response.ok) {
          throw new Error('Error al recuperar los cartones');
        }
        const data = await response.json();
        setSalieron(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
      };
      const actualizarAciertosCarton = async () => {

        for (const carton of cartones){
          const cartonId = carton.cartonId
          try {
            // Obtener la suma de aciertos de las filas
            const response = await fetch(`http://localhost:3000/filas/aciertos/${cartonId}`);
            const aciertosTotales = await response.json();
            console.log(`Aciertos totales: ${aciertosTotales}`)
        
            // Enviar PATCH para actualizar los aciertos del cartón
            await fetch(`http://localhost:3000/cartones/actualizar-aciertos/${cartonId}`, {
              method: 'PATCH',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ aciertos: aciertosTotales })
            });
            nuevoFetchCartones();
            console.log('Cartón actualizado correctamente');
          } catch (error) {
            console.error('Error al actualizar aciertos del cartón:', error);
          }
    
        }
        console.log(JSON.stringify(salio))
       
        
      };
      const nuevoFetchCartones = async()=>{
        try{
        const response = await fetch(`http://localhost:3000/cartones/all?criterio=${criterioOrden.criterio}&orden=${criterioOrden.orden}&partida=${partida}`);
        // URL de la API, modifícala según tu entorno
      if (!response.ok) {
        throw new Error('Error al recuperar los cartones');
      }
      const data = await response.json();
      setCartones(data);
      //handleOrdenChange(criterioOrden)
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
      }
      };

      const handleSelect = (criterio, orden) => {
        setCriterioOrden({ criterio, orden });
      };

      const cargarDatos = ()=>{
        setPartidasSelec(seleccionadas)
        fetchSalieron();
        nuevoFetchCartones();
      }

      useEffect(()=>{
        if(salio){
          socket.emit('sendFicha', {salio});
        }
        
      },[salio])

     
      /*useEffect(()=>{
        setPartidasSelec(seleccionadas)
        console.log(partidasSelec)
      },[partida])*/
      
      console.log(instancia)
        
    
  return (
    <div style={{display:'flex', flexDirection:'column'}}>
    <div style={{display:'flex', width:'70vw'}}>
        <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', border:'solid 1pt', padding:'10px',borderRadius:'20px', width:'370px', gap:'5px'}}>
            <button onClick={cargarDatos} style={{width:'10em', height:'3em', borderRadius:'10px', backgroundColor:'#5BB117', color:'#FFFAB3'}}>Cargar Partida</button>
            <button onClick={seleccionarAleatorio} style={{width:'10em', height:'3em', borderRadius:'10px', backgroundColor:'#5BB117', color:'#FFFAB3'}}>Juego!</button>
       
          <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', width:'20%'}}>
            <img src={salio.url} alt={salio.nombre} style={{width:'80px'}}/>
            <p>{salio.imagenId}</p>
          </div>
        </div>
        <div style={{width:'100%', overflowX:'auto',marginLeft:'5%', marginRight:'5%'}}>
        <div style={{display:'flex',flexDirection:'column',alignContent:'center'}}>
            <h4 style={{textAlign:'center',color:'#B11A17'}}>Ya Salieron</h4>
            <div style={{display:'flex'}}>
                {salieron.map((img,index)=>(
                <div  style={{display:'flex', alignItems:'center',justifyContent:'center', marginRight:'20px'}}   >
                    <img  key={index} src={img.imagen_url} style={{width:'60px'}}/>
                    <p style={{textAlign:'center'}}>{img.casillero_imagenId}</p>
                </div>
                    ) 
                )}
            </div>
        </div>
        
        </div>
        
    </div>
    <div style={{display:'flex', justifyContent:'space-around'}}>
        <div style={{width:'50%', justifyContent:'center'}}>

          <div style={{display:'flex', justifyContent:'center',gap:'20px',marginTop:'5px'}}>
              <h5 style={{textAlign:'center',color:'#B11A17'}}>Lista de Cartones</h5>
              <Dropdown>
      <Dropdown.Toggle variant="danger" id="dropdown-basic">
        Ordenar por: {criterioOrden.criterio} ({criterioOrden.orden})
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleSelect('cartonId', 'ASC')}>
          Cartón ID Ascendente
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleSelect('cartonId', 'DESC')}>
          Cartón ID Descendente
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleSelect('aciertos', 'ASC')}>
          Aciertos Ascendente
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleSelect('aciertos', 'DESC')}>
          Aciertos Descendente
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
          </div>
        
            
            <Row style={{ flex: '1 1 auto', overflowY: 'auto', maxHeight: '80vh', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '8px', marginTop:'5px' }}>  
            
            <ul style={{listStyleType:'none', alignItems:'center'}}>
              {cartones.map(carton => (
              <>
              
            <CartonBingo key={carton.cartonId} carton={carton} />
              </>
              ))}
            </ul>
            </Row>
        </div>
        <div style={{width:'30%', justifyContent:'center'}}>
          <FilasOrdenadas instancia = {instancia} consultarGanador= {consultarGanador} partida={partida} />
        </div>
        

      </div>

    </div>
    
  )
}
