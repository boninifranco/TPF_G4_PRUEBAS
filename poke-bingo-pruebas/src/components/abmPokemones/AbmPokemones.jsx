import React, { useEffect, useState } from 'react'
import { ButtonGroup, Dropdown, DropdownButton, DropdownGroup } from 'react-bootstrap';
import '../abmPokemones/abmPokemones.css'

export const AbmPokemones = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [partidas, setPartidas] = useState([])
    const [partidaSelec,setPartidaSelec] = useState(null)
    const [seleccionadas, setSeleccionadas] = useState([])
    const [imagenes, setImagenes] = useState([])
    const [imagenesDisponibles, setImagenesDisponibles] = useState([])

    useEffect(()=>{

        const fetchImgPartida = async ()=>{
            try {
                const response = await fetch(`http://localhost:3000/img-seleccionadas/partida/${partidaSelec.partidaId}`);
                if(!response.ok) throw new Error ('Error al recuperar las imagenes')
                const data = await response.json();
                setSeleccionadas(data)
            } catch (error) {
                
            }            
        }
        fetchImgPartida();
    },[partidaSelec])

    useEffect(()=>{

        const fetchImagenes = async ()=>{
            try {
                const response = await fetch(`http://localhost:3000/imagenes/`);
                if(!response.ok) throw new Error ('Error al recuperar las imagenes')
                const data = await response.json();
                setImagenes(data)
            } catch (error) {
                
            }            
        }
        fetchImagenes();
        
        
    },[partidaSelec])

    const cargarImgDisponibles = ()=>{
        const noSeleccionadas = imagenes.filter(imagen => 
            !seleccionadas.some(seleccionada => seleccionada.imagenId == imagen.id)
          );
          
          console.log(noSeleccionadas);
    }
    
    
    

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
  return (
    <>
        <DropdownButton as={ButtonGroup}  title={partidaSelec? `Editar Pokes de Partida ${partidaSelec.partidaId}`:'Seleccionar Partida'} id="bg-nested-dropdown" variant="danger" style={{width:'200px'}} >
            {partidas.map((partida,index)=>(
              <Dropdown.Item key={index} onClick={() => setPartidaSelec(partida)} >{`Partida nº ${partida.partidaId}`}</Dropdown.Item>
            ))}
        </DropdownButton>
        <div style={{display:'flex'}}>
        <div class="container">
            <div style={{display:'flex', flexDirection:'column'}}>
            <h5>Imagenes seleccionadas</h5>
            <div class="image-grid">
            {seleccionadas.map((seleccionada)=>(
                <div key={seleccionada.idSeleccionada}  >
                    <img src={seleccionada.imagen.url} />
                    <p>{seleccionada.imagen.idSeleccionada}</p>
                    <p>{seleccionada.imagen.imagenId}</p>
                    <p>{seleccionada.imagen.nombre}</p>
                </div>
            ))}
            </div>
            </div>
            
        


        </div>
        <div style={{display:'flex', flexDirection:'column'}}>
            <h5>Imagenes disponibles para cambiar</h5>
            <button onClick={cargarImgDisponibles}>cargar</button>
            <div class="image-grid">
            {imagenes.map((imagen)=>(
                <div key={imagen.idSeleccionada}  >
                    <img src={imagen.url} />
                    <p>{imagen.id}</p>
                    <p>{imagen.nombre}</p>
                </div>
            ))}
            </div>
            </div>
        </div>


  
    </>
  )
}
