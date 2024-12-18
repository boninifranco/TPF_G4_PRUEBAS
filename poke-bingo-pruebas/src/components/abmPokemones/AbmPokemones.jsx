import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, ButtonGroup, Dropdown, DropdownButton} from 'react-bootstrap';
import '../abmPokemones/abmPokemones.css'
import {baseUrl} from '../../core/constant/constantes.ts';



export const AbmPokemones = () => {
    const [partidas, setPartidas] = useState([])
    const [partidaSelec,setPartidaSelec] = useState(null)
    const [seleccionadas, setSeleccionadas] = useState([])
    const [imagenes, setImagenes] = useState([])
    const [imagenesDisponibles, setImagenesDisponibles] = useState([])
    const [imgSelec, setImgSelec]= useState(null)
    const [imgDisp, setImgDisp] = useState(null)
    const [cambiar, setCambiar] = useState(false)
    const [renderizar, setRenderizar] = useState(false)
    const navigate = useNavigate();

    useEffect(()=>{

        const fetchImgPartida = async ()=>{
          
            try {
              if(partidaSelec){
                const response = await fetch(`${baseUrl}/img-seleccionadas/partida/${partidaSelec.partidaId}`);
                if(!response.ok) {
                  console.error('No se pudieron obtener las imagenes de la partida:', response.statusText);              
                  const errorData = await response.json();
                  throw new Error(errorData.message || 'Ocurrió un error inesperado');
                }
                const data = await response.json();
                setSeleccionadas(data)
              }
                
            } catch (error) {
              console.error('Error en la solicitud:', error);
              navigate('/error', { state: { errorMessage: error.message } });
            }            
        }
        fetchImgPartida();
    },[partidaSelec,cambiar])

    useEffect(()=>{

        const fetchImagenes = async ()=>{
            try {
                const response = await fetch(`${baseUrl}/imagenes/`);
                if(!response.ok) {
                  console.error('No se pudieron obtener las imagenes:', response.statusText);              
                  const errorData = await response.json();
                  throw new Error(errorData.message || 'Ocurrió un error inesperado');
                }
                const data = await response.json();
                setImagenes(data)
            } catch (error) {
              console.error('Error en la solicitud:', error);
              navigate('/error', { state: { errorMessage: error.message } });
            }            
        }
        fetchImagenes();
        
        
        
    },[partidaSelec])

    const cargarImgDisponibles = ()=>{
        const noSeleccionadas = imagenes.filter(imagen => 
            !seleccionadas.some(seleccionada => seleccionada.imagen.imagenId == imagen.id)
          );
          
          setImagenesDisponibles(noSeleccionadas)
          
    }

    useEffect(()=>{
        const fetchPartidas = async ()=> {
          try {      
            const response = await fetch (`${baseUrl}/partidas/sinCartones`)
            if(!response.ok){
                  console.error('No se pudieron obtener las partidas:', response.statusText);              
                  const errorData = await response.json();
                  throw new Error(errorData.message || 'Ocurrió un error inesperado');
            }
            const data = await response.json()
            setPartidas(data) 
          } catch (error) {
              console.error('Error en la solicitud:', error);
              navigate('/error', { state: { errorMessage: error.message } });
            }
          };
          fetchPartidas();
    
      },[renderizar]);

      const renderizarPage = ()=>{
        setRenderizar(!renderizar)
      }
      const handleImgSelec = (imagen) => {
        setImgSelec(imagen);
      };

      const handleImgDisp = (imagen)=>{
        setImgDisp(imagen);
      }

      const quitarSeleccion = ()=>{
        setImgDisp(null);
        setImgSelec(null);
      }

      const eliminarSeleccionada = async()=>{
        try {
            const response = await fetch(`${baseUrl}/img-seleccionadas/${imgSelec.idSeleccionada}`,{
                method:'DELETE'
            },            
        )
        if(!response.ok) {
          console.error('No se pudo eliminar la imagen seleccionada:', response.statusText);              
          const errorData = await response.json();
          throw new Error(errorData.message || 'Ocurrió un error inesperado');
        }
        } catch (error) {
          console.error('Error en la solicitud:', error);
          navigate('/error', { state: { errorMessage: error.message } });            
        }
      }
      const agregarSeleccionada = async ()=>{
        try {
        const response = await fetch(`${baseUrl}/img-seleccionadas/`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                },
            body: JSON.stringify({
                partidaId: partidaSelec.partidaId,
                imagenId: imgDisp.id
            }),
                  });
            if(!response.ok) {
              console.error('No se pudo agregar la imagen seleccionada:', response.statusText);              
              const errorData = await response.json();
              throw new Error(errorData.message || 'Ocurrió un error inesperado');
            }
            const data = await response.json()
            
        } catch (error) {
            console.error('Error en la solicitud:', error);
            navigate('/error', { state: { errorMessage: error.message } }); 
        }
      }

      const intercambiarImagenes = async ()=>{
        await eliminarSeleccionada();
        await agregarSeleccionada();
        setImgDisp(null);
        setImgSelec(null);
        setCambiar(!cambiar)
        setImagenesDisponibles([]);
        
        
        
      }
  return (
    <>
        <div style={{display:'flex', justifyContent:'space-around',gap:'100px'}}>
        <div>
        <Button as={ButtonGroup} variant="danger" style={{width:'150px'}} onClick={renderizarPage}>Cargar Partidas</Button>
        <DropdownButton as={ButtonGroup}  title={partidaSelec? `Editar Pokes de Partida ${partidaSelec.partidaId}`:'Seleccionar'} id="bg-nested-dropdown" variant="danger" style={{width:'200px'}} >
            {partidas.map((partida,index)=>(
              <Dropdown.Item key={index} onClick={() => setPartidaSelec(partida)} >{`Partida nº ${partida.partidaId}`}</Dropdown.Item>
            ))}
        </DropdownButton>

        </div>
        
        <Button as={ButtonGroup} variant="danger" style={{width:'300px'}} onClick={cargarImgDisponibles}>Pokes disponibles para cambiar</Button>
        </div>        
        
        <div style={{display:'flex'}}>
            <div class="container">
                <div style={{display:'flex', flexDirection:'column'}}>
                    <div class="image-grid">
                    {seleccionadas.map((seleccionada)=>(
                        <div key={seleccionada.idSeleccionada}  >
                            <img src={seleccionada.imagen.url}
                            onClick={()=>handleImgSelec(seleccionada)}
                            style={{cursor:'pointer',
                                backgroundColor: imgSelec === seleccionada ? 'lightblue' : 'transparent',
                                border: imgSelec === seleccionada ? '1px solid' : 'none',
                                borderRadius: imgSelec===seleccionada ? '10px' : 'none'}} />                    
                            <p>{seleccionada.imagen.imagenId}</p>                    
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        <div style={{display:'flex', flexDirection:'column'}}>
        
            <div class="image-grid">
            {imagenesDisponibles.map((imagen)=>(
                <div key={imagen.idSeleccionada}  >
                    <img src={imagen.url}
                    onClick={()=>handleImgDisp(imagen)}
                    style={{cursor:'pointer',
                        backgroundColor: imgDisp === imagen ? 'lightblue' : 'transparent',
                        border: imgDisp === imagen ? '1px solid' : 'none',
                        borderRadius: imgDisp===imagen ? '10px' : 'none'}} />
                    <p>{imagen.id}</p>
                </div>
            ))}
            </div>
            </div>
        </div>
        <div style={{display:'flex', justifyContent:'center'}}>
        <Button 
         
        style={{width:'200px', display:'flex', justifyContent:'center', backgroundColor:'#B11A17'}} 
        onClick={quitarSeleccion} 
        disabled={imgSelec||imgDisp ? false : true}>Quitar selección</Button>
        
        <Button 
         
        style={{width:'200px', display:'flex', justifyContent:'center',backgroundColor:'#5BB117'}} 
        onClick={intercambiarImagenes} 
        disabled={imgSelec&&imgDisp ? false : true}>Click para intercambiar</Button>
        </div>
        
  
    </>
  )
}
