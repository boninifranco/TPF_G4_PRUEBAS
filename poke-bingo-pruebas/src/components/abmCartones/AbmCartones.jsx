import { format, parse } from 'date-fns';
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap';

export const AbmCartones = () => {
    const [partidasActivas, setPartidasActivas] = useState([]);
    const [isAsc, setIsAsc] = useState(true);
    const [seleccionado, setSeleccionado]= useState(null);
    const [cantidadCartones, setCantidadCartones] = useState([]);
    const [cartonesDeSelec, setCartonesDeSelec] = useState(null);
    const [imagenes, setImagenes] = useState([])
    const [seleccionadas,setSeleccionadas]=useState([])
    const [filas, setFilas] = useState([]);
    const [casilleros, setCasilleros] = useState([])
    const [cartones, setcartones] = useState([])
    const totalCartones = 10;


    const handleSort = () => {
        const sortedData = [...partidasActivas].sort((a, b) => {
          if (isAsc) {
            return new Date(a.horaInicio) - new Date(b.horaInicio); // Orden ascendente
          } else {
            return new Date(b.horaInicio) - new Date(a.horaInicio); // Orden descendente
          }
        });
        setPartidasActivas(sortedData);
        setIsAsc(!isAsc); // Cambia el orden para la próxima vez
      };

      const handleSeleccionado = (fila)=>{
        setSeleccionado(fila);
        console.log(fila)
        const cartones = consultarCartones(fila.partidaId)
        console.log(cartones)
        if(cartones>0) setCartonesDeSelec(cartones)
                
    }
    const consultarCartones = (id)=>{
       const partida = cantidadCartones.find(item=>item.idPartida===id)
       const cantidad = partida ? partida.cantidad : 0
            setCartonesDeSelec(cantidad);
    }

    
    const fetchPartidasActivas = async ()=>{
        try {
            const response = await fetch('http://localhost:3000/partidas/activas/');
            if(!response.ok) throw new Error('No hay partidas activas');
            const data = await response.json();
            if(Array.isArray(data)){
                const dataConvertida = data.map((item) => ({
                ...item,
                horaInicio: parse(item.horaInicio, "dd/MM/yyyy HH:mm", new Date()), // Conversión a Date
                }));
            setPartidasActivas(dataConvertida);
            setSeleccionado(null)
            }                   
                    
            } catch (error) {
                console.log(error)
            }
                               
        }

        

        useEffect(()=>{
            const obtenerCantidadCartones = async ()=>{
                try {
                    const response = await fetch('http://localhost:3000/cartones/cantidad');
                    if(!response.ok) console.log('no hay partidas con cartones generados');
                    const data = await response.json();
                    setCantidadCartones(data);
        
                } catch (error) {
                    console.log(error)
                }
                  
            }
            obtenerCantidadCartones();

        },[partidasActivas])

    const addCartones = async (partida) => {
        try {
            for (let i = 0; i < seleccionado.cantidadCartones;i++){
                await fetch('http://localhost:3000/cartones',{
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        idPartida: partida
                    }),
                  });
                  

            }
            console.log('cartones creados')
            
        } catch (error) {
            console.log('No se pudieron crear los cartones')
            
        }
      }

      const obtenerImagenes = async () => {
        try {
          const response = await fetch('http://localhost:3000/imagenes'); 
          if (!response.ok) {
            console.log(response)
            throw new Error('Error al obtener las imágenes');
          }
          const data = await response.json();
          setImagenes(data); 
        } catch (error) {
          console.error('Error:', error);
        }
      };

      const seleccionarImagenesAleatorias = (imagenes, cantidad) => {
        
       const imgseleccionadas = new Set();
       while (imgseleccionadas.size < cantidad) {
        const indiceAleatorio = Math.floor(Math.random() * imagenes.length);
        imgseleccionadas.add(imagenes[indiceAleatorio]); 
      }
      return Array.from(imgseleccionadas);
      };

      const enviarSeleccionadas = async(partida)=>{
        try {
          for (const seleccionada of seleccionadas){
            await fetch('http://localhost:3000/img-seleccionadas',{
              method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        partidaId:partida,
                        imagenId: seleccionada.imagenId,
                    }),
                  });
                  console.log('Imagenes seleccionadas enviadas')
    
          }
        } catch (error) {
                  console.log('No se pudieron enviar las imagenes seleccionadas')
          
        }
      }
    
      const generarCasillerosYFilas = (imagenesSeleccionadas) => {
        const totalFilas = totalCartones * 3;
        let idAutoincrement = 1;
        let idFilaAutoincrement = 1;
        const cartones = [];  
        const filasGeneradas = [];
    
        for (let carton = 0; carton < totalCartones; carton++) {
          const imagenesUsadasEnCarton = new Set();
    
          for (let fila = 0; fila < 3; fila++) {
            const filaActual = new Set();
    
            while (filaActual.size < 5) {
              const imagenAleatoria = imagenesSeleccionadas[Math.floor(Math.random() * imagenesSeleccionadas.length)];
    
              if (!filaActual.has(imagenAleatoria) && !imagenesUsadasEnCarton.has(imagenAleatoria)) {
                filaActual.add(imagenAleatoria);
                imagenesUsadasEnCarton.add(imagenAleatoria);
                
                cartones.push({
                  
                  filaId: idFilaAutoincrement,
                  salio: false,
                  imagenId: imagenAleatoria.imagenId,
                });
              }
            }    
            
            filasGeneradas.push({
              
              cartonId: carton + 1, 
              aciertos: 0, 
            });
    
            idFilaAutoincrement++;
          }
        }
        //console.log(cartones)
        //console.log(filasGeneradas)
        //setCasilleros(casilleros);
        //setFilas(filasGeneradas);
        return { cartones, filasGeneradas };
        
      }

      const enviarFilas = async (filas)=>{
        let filasGuardadas = [];
        for (const fila of filas){
            try {
                const responseFilas = await fetch('http://localhost:3000/filas', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(fila),
                    //body: fila
                  });
              
                  if (!responseFilas.ok) {
                    throw new Error('Error al enviar las filas');
                  }
              
                  const data = await responseFilas.json(); 
                  filasGuardadas.push(data); 
              
                  
              
                    console.log('Filas enviadas correctamente');
                
            } catch (error) {
                    console.error('Error al enviar las filas:', error);
                }
            }
        }
    
      const enviarCasilleros = async (casilleros)=>{
        for( const casillero of casilleros){
            try {
                const responseCasilleros = await fetch('http://localhost:3000/casilleros', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(casillero),
                  });
              
                  if (!responseCasilleros.ok) {
                    throw new Error('Error al enviar los casilleros');
                  }
                  console.log('Casilleros enviados correctamente');
                
            } catch (error) {
                console.error('Error al enviar los casilleros:', error);
                
            }
        }
      }

      useEffect(() => {
        const cargarYSeleccionar = async () => {
        await  obtenerImagenes();
        };
    
        cargarYSeleccionar();
      }, []);    

    
    useEffect(() => {
        if (imagenes.length > 0) {
          const imagenesSeleccionadas = seleccionarImagenesAleatorias(imagenes, 90);
          setSeleccionadas(imagenesSeleccionadas);
        }
      }, [imagenes]);

      console.log(`Estas son las imagenes seleccionadas ${ JSON.stringify(seleccionadas)}`)

    useEffect(() => {
        if (seleccionadas.length > 0) {
            
            const { cartones, filasGeneradas } = generarCasillerosYFilas(seleccionadas);
            setCasilleros(cartones);
            setFilas(filasGeneradas);
          console.log('aca deberia haber guardado en filas')
          
    
          
        }
        
      }, [seleccionadas]);
      console.log(`Estas son las filas generadas en "filas" ${filas}`)
      console.log(filas.length)
      
      const addFilas = ()=>{
        enviarFilas(filas)
      }

      const addCasilleros = ()=>{
        enviarCasilleros(casilleros)
      }

      const addSeleccionadas = ()=>{
        enviarSeleccionadas()
      }
    
    
            
            
            
    //console.log(JSON.stringify(partidasActivas))
    console.log(cantidadCartones)
    console.log(JSON.stringify(seleccionado))
    console.log(cartonesDeSelec)
  return (
    <div style={{display:'flex'}}>
        <div style={{width:'50%', textAlign:'center', padding:'30px'}}>
        <Button variant="success" style={{backgroundColor:'#5BB117', marginTop:'1em', marginBottom:'1em',width:'50%'}} onClick={fetchPartidasActivas} type='submit'>Refresh Partidas Activas</Button>{' '}
        
        <Table striped bordered hover>
        <thead>
          <tr>
            <th style={{width:'30%'}}>Id Partida</th>
            <th style={{width:'30%',cursor: 'pointer'}} onClick={handleSort} >Inicio {isAsc ? '▲' : '▼'}</th>
            <th style={{width:'30%'}}>Cantidad de Cartones</th>
                        
          </tr>
        </thead>
        <tbody>
          {partidasActivas.map((partida) => (
            <tr key={partida.partidaId}  onClick={() => handleSeleccionado(partida)} style={{cursor:'pointer'}}>
              <td>{partida.partidaId}</td>
              <td>{format(partida.horaInicio,"dd/MM/yyyy HH:mm")}</td>
              <td>{partida.cantidadCartones}</td>
                          
            </tr>
          ))}
        </tbody>
      </Table>

        </div>
        <div style={{width:'50%'}}>
            <div style={{display:'flex', justifyContent:'space-around', alignItems:'center'}}>
            {seleccionado&&
        <h5>{cartonesDeSelec>0 ? `Existen ${cartonesDeSelec} cartones generados para la partida ${seleccionado.partidaId}` : `No existen cartones para la partida ${seleccionado.partidaId}`}</h5>}
        {cartonesDeSelec===0&&<Button variant="success" style={{backgroundColor:'#5BB117', marginTop:'1em', marginBottom:'1em',width:'20%'}} onClick={()=> addCartones(seleccionado.partidaId)} type='submit'>Agregar</Button>}
            </div>
        <div>
        <p>Total de casilleros generados: {casilleros.length}</p>          
          <button onClick={addFilas}>Enviar Filas</button>
          <button onClick={addCasilleros}>Enviar Casilleros</button>
          <button onClick={addSeleccionadas}>Enviar Seleccionadas</button>
        </div>
        
        </div>
        
      

    </div>
  )
}
