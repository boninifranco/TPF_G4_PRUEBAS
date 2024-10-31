import { useEffect, useState } from 'react';
import { ListaCartonBingo } from '../../components/cartonBingo/ListaCartonBingo'
import { AddImages } from '../../components/varios/utilitarios/AddImages'
import { AddCartones } from '../../components/varios/utilitarios/AddCartones'
import { Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap';
import { Juego } from '../../components/cartonBingo/Juego';
import '../salaDeJuegosPage/salaDeJuegos.css'
import { ChatAdmin } from '../../components/cartonBingo/ChatAdmin';


export const SalaDeJuegos = () => {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [partidas, setPartidas]= useState([]);
  const [partidaSelec, setPartidaSelec] = useState('');
  const [instancia, setInstancia] = useState('')
  const [cartones, setCartones] = useState([])
  const [seleccionadas, setSeleccionadas] = useState([])
  const [ganadores, setGanadores] = useState([])

  useEffect(()=>{
    const fetchPartidas = async ()=> {
      try {      
        const response = await fetch ('http://localhost:3000/partidas/activas')
        if(!response.ok){
          throw new Error('Error al recuperar las partidas activas');
        }
        const data = await response.json()
        setPartidas(data) 
      } catch (err) {
        setError(err.message);
        } finally {
          setLoading(false);
        }
      };
      fetchPartidas();

  },[]);

  //useEffect(()=>{
    const fetchCartones = async () => {
      try {
        const response = await fetch(`http://localhost:3000/cartones/all?criterio=cartonId&orden=ASC&partida=${partidaSelec.partidaId}`);  // URL de la API, modifícala según tu entorno
        if (!response.ok) {
          throw new Error('Error al recuperar los cartones');
        }
        const data = await response.json();
        setCartones(data);
        console.log(data)
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    const fetchSeleccionadas = async () => {
        try {
          const response = await fetch(`http://localhost:3000/img-seleccionadas/partida/${partidaSelec.partidaId}`);  // ${partidaSelec? partidaSelec.partidaId:partidas[0].partidaId}`)
          if (!response.ok) {
            throw new Error('Error al recuperar las img-seleccionadas');
          }
          const data = await response.json();
          console.log(data)
          setSeleccionadas(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      useEffect(()=>{
        //const fetchInterval = setInterval(() => {
          fetchCartones();
          fetchSeleccionadas();
        //}, 500); // Cada 500ms
    
        // Limpia el intervalo cuando el componente se desmonta
        //return () => clearInterval(fetchInterval);        
        
      },[partidaSelec])
      
      

//},[partidaSelec])

const consultarGanador = async (fila)=>{
  console.log(fila)
  try {
    const response = await fetch(`http://localhost:3000/filas/${fila}`)
    if(!response.ok){
      throw new Error(" Error al recuperar el ganador");      
    }
    const data = await response.json()
    //console.log(data.carton.idUsuario.email)
    const ganador = {
      jugador: data.carton.idUsuario.email,
      partida: partidaSelec.partidaId,
      instancia: instancia
    }
    setGanadores([...ganadores,ganador])
    await fetch('http://localhost:3000/resultado/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        resultado: instancia,
        partidaId: partidaSelec.partidaId,
        usuarioId: data.carton.idUsuario.id
      }),
    });
    
  } catch (err) {
    //setError(err.message);
      //} finally {
       // setLoading(false);
       console.log('hay error?')
      }
}

  //console.log(partidaSelec)
  //console.log(JSON.stringify(seleccionadas))
  //console.log(instancia)
  return (
    <div style={{marginTop:'90px', backgroundColor:'#FFFCCD', display:'flex', width:'100vw'}}>
    <div style={{marginTop:'5px',backgroundColor:'#FFFCCD', display:'flex', flexDirection:'column',gap:'10%'}}>
        <div style={{display:'flex', justifyContent:'center',gap:'10px', maxHeight:'10vh', marginBottom:'5px'}}>
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
            <Dropdown.Item onClick={() => setInstancia('bingo')}>Bingo</Dropdown.Item>
          </DropdownButton>
          <div>
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
        </div>
        <div style={{display:'flex'}}>
          <Juego partida={partidaSelec.partidaId} seleccionadas = {seleccionadas} instancia = {instancia} consultarGanador={consultarGanador} />
        </div>
        
    </div>
    <ChatAdmin/>
    </div>
            
  )
 /*return(
  <div style={{marginTop:'90px', backgroundColor:'#FFFCCD', display:'flex', height:'75vh', width:'100vw'}}>
    <ListaCartonBingo/>
  </div>
  
 )*/
}


