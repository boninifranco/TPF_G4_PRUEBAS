import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup, Dropdown, DropdownButton, DropdownGroup } from 'react-bootstrap';
import '../abmPokemones/abmPokemones.css'

export const AbmPokemones = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [partidas, setPartidas] = useState([])
    const [partidaSelec,setPartidaSelec] = useState(null)
    const [seleccionadas, setSeleccionadas] = useState([])
    const [imagenes, setImagenes] = useState([])
    const [imagenesDisponibles, setImagenesDisponibles] = useState([])
    const [imgSelec, setImgSelec]= useState(null)
    const [imgDisp, setImgDisp] = useState(null)
    const [cambiar, setCambiar] = useState(false)
    const [renderizar, setRenderizar] = useState(false)

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
    },[partidaSelec,cambiar])

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
            !seleccionadas.some(seleccionada => seleccionada.imagen.imagenId == imagen.id)
          );
          
          setImagenesDisponibles(noSeleccionadas)
          
    }
    
    
    console.log(`imagen elegida en seleccionadas: ${JSON.stringify(imgSelec)}`)
    console.log(`imagen elegida en disponibles: ${JSON.stringify(imgDisp)}`)
    console.log(`partida: ${JSON.stringify(partidaSelec)}`)

    useEffect(()=>{
        const fetchPartidas = async ()=> {
          try {      
            const response = await fetch ('http://localhost:3000/partidas/sinCartones')
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
            await fetch(`http://localhost:3000/img-seleccionadas/${imgSelec.idSeleccionada}`,{
                method:'DELETE'
            },            
        )
        //if(!response.ok) throw new Error('Error al eliminar la imagen')
        //const data = await response.json()

        } catch (error) {
            console.log(error)            
        }
      }
      const agregarSeleccionada = async ()=>{
        try {
        const response = await fetch(`http://localhost:3000/img-seleccionadas/`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                },
            body: JSON.stringify({
                partidaId: partidaSelec.partidaId,
                imagenId: imgDisp.id
            }),
                  });
            if(!response.ok) throw new Error ('No se pudo agregar la imagen')
            const data = await response.json()
            
        } catch (error) {
            console.log(error)
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
                    {/*<h5>Imagenes seleccionadas</h5>*/}
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
