import React, { useState, useEffect, useRef } from 'react';
import {CartonBingo} from '../cartonBingo/CartonBingo'; // Asegúrate de importar el componente correctamente
import '../cartonBingo/cartonBingo.css';
import { FilasOrdenadas } from './ResultadosAdmin';
import {ChatAdmin} from './ChatAdmin';
import { Row } from 'react-bootstrap';
//import '../cartonBingo/listaCartonBingo.css';


export const ListaCartonBingo = () => {
  const [cartones, setCartones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [salieron, setSalieron] = useState([]);
  const [seleccionadas, setSeleccionadas] = useState([/* Array de 90 imágenes */]);
  const [salio, setSalio] = useState({})
  
  

  useEffect(() => {
    const fetchCartones = async () => {
      try {
        const response = await fetch('http://localhost:3000/cartones/all');  // URL de la API, modifícala según tu entorno
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
        const response = await fetch(`http://localhost:3000/img-seleccionadas/partida/${1}`);  // URL de la API, modifícala según tu entorno
        if (!response.ok) {
          throw new Error('Error al recuperar los cartones');
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
    
  }, []);

  
  console.log(seleccionadas)
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
      setSalieron([...salieron, imagenSeleccionada.imagen]);
      setSalio(imagenSeleccionada.imagen);

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
      //nuevoFetchCartones();
      // Después del PATCH, podrías hacer un nuevo fetch de los cartones actualizados
      // para obtener los casilleros modificados
      
    } catch (error) {
      console.error(error);
    }
    
  };
  
  
  const nuevoFetchCartones = async()=>{
    try{
    const response = await fetch('http://localhost:3000/cartones/all');
    // URL de la API, modifícala según tu entorno
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
  //console.log(`Estos son los cartones de fetch cartones/all ${JSON.stringify(cartones)}`)
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

  console.log(`Estos son los que salieron: ${JSON.stringify(salieron)}`)


  return (
    
    <div style={{margin:'5px',width:'100vw'}}>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <button onClick={seleccionarAleatorio} style={{width:'10em', height:'3em', borderRadius:'30px', backgroundColor:'#5BB117', color:'#FFFAB3'}}>Juego!</button>
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
          <img src={salio.url} alt={salio.nombre} style={{width:'15%'}}/>
          <p>{salio.imagenId}</p>
        </div>
        <div style={{width:'40%', overflowX:'auto'}}>
        <p style={{textAlign:'center'}}>Ya Salieron</p>
        <div style={{display:'flex',alignContent:'center'}}>          
        {salieron.slice().reverse().map((img,index)=>(
          <div  style={{display:'flex', flexDirection:'column', alignItems:'center',justifyContent:'center', marginRight:'20px'}}   >
          <img  key={index} src={img.url} style={{width:'60px'}}/>
          <p style={{textAlign:'center'}}>{img.imagenId}</p>
        </div>
        ) 
          )}

        </div>
        
        </div>
      </div>
      
      <div style={{display:'flex', justifyContent:'space-around'}}>
        <div style={{width:'40%', justifyContent:'center'}}>
        
            <h3 style={{textAlign:'center',color:'#B11A17'}}>Lista de Cartones</h3>
            <Row style={{ flex: '1 1 auto', overflowY: 'auto', maxHeight: '80vh', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '8px' }}>  
            
            <ul style={{listStyleType:'none', alignItems:'center'}}>
              {cartones.map(carton => (
              <>
              {/*<h5 style={{textAlign:'left',color:'#B11A17'}}>Cartón ID: {carton.cartonId} - Usuario ID: {carton.usuarioId} - Aciertos: {carton.aciertos}</h5>*/}
            <CartonBingo key={carton.cartonId} carton={carton} />
              </>
              ))}
            </ul>
            </Row>
        </div>
        <div style={{width:'20%', justifyContent:'center'}}>
          <FilasOrdenadas/>
        </div>
        <div>
          <ChatAdmin style={{width:'20%'}}/>
        </div>

      </div>
      
      
    </div>
  );
}





  
