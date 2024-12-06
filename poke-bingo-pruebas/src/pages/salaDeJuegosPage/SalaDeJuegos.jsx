import { Children, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AddImages } from '../../components/varios/utilitarios/AddImages'
import { Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap';
import { Juego } from '../../components/cartonBingo/Juego';
import '../salaDeJuegosPage/salaDeJuegos.css'
import { ChatAdmin } from '../../components/cartonBingo/ChatAdmin';
import {baseUrl} from '../../core/constant/constantes.ts';


export const SalaDeJuegos = () => {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [partidas, setPartidas]= useState([]);
  const [partidaSelec, setPartidaSelec] = useState('');
  const [instancia, setInstancia] = useState({
    id:'',
    descripcion:'',
    puntos:''
  })
  const [puntajes, setPuntajes] = useState([]);
  const [cartones, setCartones] = useState([])
  const [seleccionadas, setSeleccionadas] = useState([])
  const [ganadores, setGanadores] = useState([])
  const navigate = useNavigate();

  useEffect(()=>{
    const fetchPartidas = async ()=> {
      try {      
        const response = await fetch (`${baseUrl}/partidas/activas`)
        if(!response.ok){
          console.error('No se pudieron obtener las partidas activas:', response.statusText);              
          const errorData = await response.json();
          throw new Error(errorData.message || 'Ocurrió un error inesperado')};
        const data = await response.json()
        setPartidas(data) 
      } catch (error) {
          console.error('Error en la solicitud:', error);
          navigate('/error', { state: { errorMessage: error.message } });
        } 
      };
      fetchPartidas();

  },[]);

  useEffect(()=>{
    const fetchPuntajes = async () => {
      try {
        const response = await fetch (`${baseUrl}/puntajes/`)
        if(!response.ok){
          console.error('No se pudieron obtener las instancias de juego', response.statusText);              
          const errorData = await response.json();
          throw new Error(errorData.message || 'Ocurrió un error inesperado')};
        const data = await response.json()
        setPuntajes(data)
        
      } catch (error) {
          console.error('Error en la solicitud:', error);
          navigate('/error', { state: { errorMessage: error.message } });
      }
    };
    fetchPuntajes();
  },[instancia])
console.log(puntajes)
  
    const fetchCartones = async () => {
      try {
        const response = await fetch(`${baseUrl}/cartones/all?criterio=cartonId&orden=ASC&partida=${partidaSelec.partidaId}`);  // URL de la API, modifícala según tu entorno
        if (!response.ok) {
          console.error('No se pudieron obtener los cartones:', response.statusText);              
          const errorData = await response.json();
          throw new Error(errorData.message || 'Ocurrió un error inesperado')
        }
        const data = await response.json();
        setCartones(data);
        console.log(data)
      } catch (error) {
          console.error('Error en la solicitud:', error);
          navigate('/error', { state: { errorMessage: error.message } });
    };
  }
    const fetchSeleccionadas = async () => {
      if(partidaSelec){
        try {
          const response = await fetch(`${baseUrl}/img-seleccionadas/partida/${partidaSelec.partidaId}`);  // ${partidaSelec? partidaSelec.partidaId:partidas[0].partidaId}`)
          if (!response.ok) {
            console.error('No se pudieron obtener las imagenes seleccionadas:', response.statusText);              
            const errorData = await response.json();
            throw new Error(errorData.message || 'Ocurrió un error inesperado')
          }
          const data = await response.json();
          console.log(data)
          setSeleccionadas(data);
        } catch (error) {
          console.error('Error en la solicitud:', error);
          navigate('/error', { state: { errorMessage: error.message } });
      };
      }
        
    }
      useEffect(()=>{        
          fetchCartones();
          fetchSeleccionadas();
      },[partidaSelec])

const consultarGanador = async (fila)=>{
  console.log(fila)
  try {
    const response = await fetch(`${baseUrl}/filas/${fila}`)
    if(!response.ok){
            console.error('No se pudieron obtener el ganador:', response.statusText);              
            const errorData = await response.json();
            throw new Error(errorData.message || 'Ocurrió un error inesperado')      
    }
    const data = await response.json()    
    const ganador = {
      jugador: data.carton.idUsuario.email,
      partida: partidaSelec.partidaId,
      instancia: instancia.descripcion,
      puntos: instancia.puntos
    }
    setGanadores([...ganadores,ganador])
    await fetch(`${baseUrl}/resultado/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        idPuntaje: instancia.id,
        partidaId: partidaSelec.partidaId,
        usuarioId: data.carton.idUsuario.id
      }),
    });
    await fetch (`${baseUrl}/usuario/${data.carton.idUsuario.id}`,{
      method:'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        puntos: instancia.puntos,        
      }),
    })    
  } catch (error) {
          console.error('Error en la solicitud:', error);
          navigate('/error', { state: { errorMessage: error.message } });
      }  
}
  const seleccionarInstancia = (id,descripcion,puntos)=>{
    setInstancia({
      id:id,
      descripcion:descripcion,
      puntos: puntos
    })
  }
  
  return (
    <div style={{marginTop:'90px', backgroundColor:'#FFFCCD', display:'flex', width:'100vw'}}>
    <div style={{marginTop:'5px',backgroundColor:'#FFFCCD', display:'flex', flexDirection:'column',gap:'10%'}}>
        <div style={{display:'flex', justifyContent:'center',gap:'10px', maxHeight:'10vh', marginBottom:'5px'}}>
          <DropdownButton as={ButtonGroup}  title={partidaSelec? `Jugamos Partida ${partidaSelec.partidaId}`:'Seleccionar Partida'} id="bg-nested-dropdown" variant="danger" style={{width:'200px'}} >
            {partidas.map((partida,index)=>(
              <Dropdown.Item key={index} onClick={() => setPartidaSelec(partida)} >{`Partida nº ${partida.partidaId}`}</Dropdown.Item>
            ))}
          </DropdownButton>
          <DropdownButton as={ButtonGroup}  title={instancia? `Jugamos ${instancia.descripcion}`: 'Seleccionar instancia'} id="bg-nested-dropdown" variant="danger" style={{width:'200px', borderRadius:'10px'}} >
            
            {puntajes.map((puntaje)=>(
              <Dropdown.Item key={puntaje.id} onClick={()=>seleccionarInstancia(puntaje.id, puntaje.descripcion, puntaje.puntos)}>{puntaje.descripcion}</Dropdown.Item>
            ))}
          </DropdownButton>
          <div>
        <ul>
          <h4 style={{textAlign:'center',color:'#B11A17'}}>Resultados de Partida {partidaSelec.partidaId}</h4>
        {ganadores.length > 0 ? (
          ganadores.map((ganador, index) => (
            <li key={index}>
              <strong style={{textAlign:'left',color:'#B11A17'}}>El jugador {ganador.jugador}, ha ganado el {ganador.instancia} - Puntos: {ganador.puntos} </strong>
            </li>
          ))
        ) : (
          <p>No hay ganadores registrados.</p>
        )}
      </ul>
        </div>
        </div>
        <div style={{display:'flex'}}>
          <Juego partida={partidaSelec.partidaId} seleccionadas = {seleccionadas} instancia = {instancia} consultarGanador={consultarGanador} />
        </div>
        
    </div>
    <ChatAdmin/>
    </div>
            
  ) 
}


