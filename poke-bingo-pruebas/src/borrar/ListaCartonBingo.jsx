import React, { useState, useEffect, useRef, Children } from 'react';
import {CartonBingo} from '../cartonBingo/CartonBingo'; // Asegúrate de importar el componente correctamente
import '../cartonBingo/cartonBingo.css';
import { FilasOrdenadas } from './ResultadosAdmin';
import {ChatAdmin} from './ChatAdmin';
import { ButtonGroup, Dropdown, DropdownButton, Row } from 'react-bootstrap';
import {baseUrl} from '../../core/constant/constantes.ts';


export const ListaCartonBingo = () => {
  const [cartones, setCartones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [salieron, setSalieron] = useState([]);
  const [seleccionadas, setSeleccionadas] = useState([/* Array de 90 imágenes */]);
  const [salio, setSalio] = useState({})
  const [instancia, setInstancia] = useState('')
  const [criterioOrden, setCriterioOrden] = useState({ criterio: 'cartonId', orden: 'ASC' });  
  const [partidas, setPartidas]= useState([]);
  const [partidaSelec, setPartidaSelec] = useState('');
  const [ganadores, setGanadores]= useState([]);
 
  useEffect(()=>{
    const fetchPartidas = async ()=> {
      try {      
        const response = await fetch (`${baseUrl}/partidas/activas`)
        const data = await response.json()
        setPartidas(data) 
      } catch (err) {
        setError(err.message);
        } finally {
          setLoading(false);
        }
      };
      fetchPartidas();

  },[])
    
      

  

  useEffect(() => {
    const fetchCartones = async () => {
      try {
        const response = await fetch(`${baseUrl}/cartones/all?criterio=cartonId&orden=ASC`);
        if (!response.ok) {
          throw new Error('Error al recuperar los cartones');
        }
        const data = await response.json();
        setCartones(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    const fetchSeleccionadas = async () => {
      try {
        const response = await fetch(`${baseUrl}/img-seleccionadas/partida/${1}`);
        if (!response.ok) {
          throw new Error('Error al recuperar las img-seleccionadas');
        }
        const data = await response.json();
        setSeleccionadas(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchCartones();
    fetchSeleccionadas();
       
    
  }, [partidaSelec]);

  if (loading) {
    return <p>Cargando cartones...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  // Función para seleccionar una imagen aleatoria
  const seleccionarAleatorio = async () => {
    if (seleccionadas.length > 0) {
      const randomIndex = Math.floor(Math.random() * seleccionadas.length);
      const imagenSeleccionada = seleccionadas[randomIndex];

      // Eliminar la imagen seleccionada del array de seleccionadas
      const nuevasSeleccionadas = seleccionadas.filter((_, index) => index !== randomIndex);
      setSeleccionadas(nuevasSeleccionadas);

      // Añadir la imagen seleccionada al array de salieron
      setSalio(imagenSeleccionada.imagen);
      fetchSalieron();

      // Enviar la imagen seleccionada al backend para actualizar casilleros
      await marcarCasillerosPorImagen(imagenSeleccionada.imagen.imagenId);
    }else{
    }
  };
  // Función para hacer el PATCH con el imagenId al backend
  const marcarCasillerosPorImagen = async (imagenId) => {
    try {
      const response = await fetch(`${baseUrl}/casilleros/salir-por-imagen/${imagenId}`, {
        method: 'PATCH',
      });

      if (!response.ok) {
        throw new Error('Error al marcar casilleros como salidos');
      }
      actualizarAciertosCarton();
      
    } catch (error) {
      console.error(error);
    }
    
  };

  const fetchSalieron = async()=>{
    const response = await fetch(`${baseUrl}/casilleros/salieron`)
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
  
  
  const nuevoFetchCartones = async()=>{
    try{
    const response = await fetch(`${baseUrl}/cartones/all?criterio=${criterioOrden.criterio}&orden=${criterioOrden.orden}`);
  if (!response.ok) {
    throw new Error('Error al recuperar los cartones');
  }
  const data = await response.json();
  setCartones(data);
} catch (err) {
  setError(err.message);
} finally {
  setLoading(false);
  }
  }
  const actualizarAciertosCarton = async () => {

    for (const carton of cartones){
      const cartonId = carton.cartonId
      try {
        // Obtener la suma de aciertos de las filas
        const response = await fetch(`${baseUrl}/filas/aciertos/${cartonId}`);
        const aciertosTotales = await response.json();
    
        // Enviar PATCH para actualizar los aciertos del cartón
        await fetch(`${baseUrl}/cartones/actualizar-aciertos/${cartonId}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ aciertos: aciertosTotales })
        });
        nuevoFetchCartones();
      } catch (error) {
        console.error('Error al actualizar aciertos del cartón:', error);
      }

    }  
    
  };

  // Función para manejar el cambio de criterio y orden
  const handleSelect = (criterio, orden) => {
    setCriterioOrden({ criterio, orden });
  };

const consultarGanador = async (fila)=>{
  try {
    const response = await fetch(`${baseUrl}/filas/${fila}`)
    if(!response.ok){
      throw new Error(" Error al recuperar el ganador");      
    }
    const data = await response.json()
    const ganador = {
      jugador: data.carton.idUsuario.email,
      partida: partidaSelec.partidaId,
      instancia: instancia
    }
    setGanadores([...ganadores,ganador])
    await fetch(`${baseUrl}/resultado/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        resultado: instancia,
        partidaId: partidaSelec.partidaId,
        usuarioId: data.carton.idUsuario.id
      }),
    });
    
  } catch (err) {
      }
}
  return (
    
    <div style={{margin:'5px',width:'100vw'}}>
      <div style={{display:'flex', justifyContent:'space-around', alignItems:'center'}}>
      <div style={{display:'flex',flexDirection:'column', gap:'10px'}}>
          <DropdownButton as={ButtonGroup}  title={partidaSelec? `Jugamos Partida ${partidaSelec.partidaId}`:'Seleccionar Partida'} id="bg-nested-dropdown" variant="danger" style={{width:'200px'}} >
            {partidas.map((partida,index)=>(
              <Dropdown.Item key={index} onClick={() => setPartidaSelec(partida)} >{`Partida nº ${partida.partidaId}`}</Dropdown.Item>
            ))}
          </DropdownButton>
          <DropdownButton as={ButtonGroup}  title={instancia? `Jugamos ${instancia}`: 'Seleccionar instancia'} id="bg-nested-dropdown" variant="danger" style={{width:'200px', borderRadius:'10px'}} >
            <Dropdown.Item onClick={() => setInstancia('ambo')}>Ambo</Dropdown.Item>
            <Dropdown.Item onClick={() => setInstancia('terno')}>Terno</Dropdown.Item>
            <Dropdown.Item onClick={() => setInstancia('cuaterno')}>Cuaterno</Dropdown.Item>
            <Dropdown.Item onClick={() => setInstancia('linea')}>Linea</Dropdown.Item>
          </DropdownButton>
          
        </div>
        <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', border:'solid 1pt', padding:'10px',borderRadius:'20px', width:'300px'}}>
          <button onClick={seleccionarAleatorio} style={{width:'10em', height:'3em', borderRadius:'30px', backgroundColor:'#5BB117', color:'#FFFAB3'}}>Juego!</button>
       
          <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', width:'20%'}}>
            <img src={salio.url} alt={salio.nombre} style={{width:'80px'}}/>
            <p>{salio.imagenId}</p>
          </div>
        </div>
        <ul>
          <h4 style={{textAlign:'center',color:'#B11A17'}}>Resultados de Partida {partidaSelec.partidaId}</h4>
        {ganadores.length > 0 ? (
          ganadores.map((ganador, index) => (
            <li key={index}>
              <strong style={{textAlign:'left',color:'#B11A17'}}>El jugador {ganador.jugador}, ha ganado el {ganador.instancia} </strong>
            </li>
          ))
        ) : (
          <p>No hay ganadores registrados.</p>
        )}
      </ul>
                
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
      
      <div style={{display:'flex', justifyContent:'space-around'}}>
        <div style={{width:'40%', justifyContent:'center'}}>

          <div style={{display:'flex', justifyContent:'center',gap:'20px'}}>
              <h3 style={{textAlign:'center',color:'#B11A17'}}>Lista de Cartones</h3>
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
        
            
            <Row style={{ flex: '1 1 auto', overflowY: 'auto', maxHeight: '80vh', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '8px' }}>  
            
            <ul style={{listStyleType:'none', alignItems:'center'}}>
              {cartones.map(carton => (
              <>
           <CartonBingo key={carton.cartonId} carton={carton} />
              </>
              ))}
            </ul>
            </Row>
        </div>
        <div style={{width:'20%', justifyContent:'center'}}>
          <FilasOrdenadas instancia = {instancia} consultarGanador= {consultarGanador} />
        </div>
        <div>
          <ChatAdmin style={{width:'20%'}}/>
        </div>

      </div>
      
      
    </div>
  );
}





  
