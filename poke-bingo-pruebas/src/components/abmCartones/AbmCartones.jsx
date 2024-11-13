import { format, parse } from 'date-fns';
import React, { useEffect, useState } from 'react'
import { Button, Row, Table } from 'react-bootstrap';
import { CartonBingo } from '../cartonBingo/CartonBingo';
import Loader from '../varios/Loader/Loader';
import CustomAlert from '../varios/CustomAlert/CustomAlert';

export const AbmCartones = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [partidasActivas, setPartidasActivas] = useState([]);
    const [isAsc, setIsAsc] = useState(true);
    const [seleccionado, setSeleccionado]= useState(null);
    const [cantidadCartones, setCantidadCartones] = useState([]);
    const [cartonesDeSelec, setCartonesDeSelec] = useState(null);    
    const [imagenes, setImagenes] = useState([])
    const [seleccionadas,setSeleccionadas]=useState([])
    const [filas, setFilas] = useState([]);
    const [casilleros, setCasilleros] = useState([])
    const [cartones, setCartones] = useState([])
    const [maxCarton, setMaxCarton]=useState(0)
    const [maxFila, setMaxFila]=useState(0)      
    const [visibleGenerar, setVisibleGenerar] = useState(false)
    const [visibleActualizar, setVisibleActualizar] = useState(false)
    const [cartonesComprados, setCartonesComprados] = useState(null)
    const [loader, setLoader] = useState(false)
    const [showAlert, setShowAlert] = useState(false);
    const handleShowAlert = () => setShowAlert(true);
    const handleCloseAlert = () => setShowAlert(false);

    //Funcion para ordenar las partidas activas por el campo horaInicio
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
        const cartones = consultarCartones(fila.partidaId)        
        if(cartones>0) {
            setCartonesDeSelec(cartones)            
            }
        consultarMaxIdCarton(fila.cantidadCartones);
        consultarMaxIdFila();
        fetchCartonesComprados(fila.partidaId)
        fetchCartones(fila.partidaId)
        setCartonesDeSelec(cartones)//agregado - ver comportamiento
                
    }
    const consultarCartones = (id)=>{
       const partida = cantidadCartones.find(item=>item.idPartida===id)
       const cantidad = partida ? partida.cantidad : 0
            //setCartonesDeSelec(cantidad);
            return cantidad
    }

    const fetchCartonesComprados = async (partida)=>{
        try {
            const response = await fetch(`http://localhost:3000/cartones/comprados/${partida}`)
            if(!response.ok) throw new Error ('Error al obtener los cartones comprados');
            const data = await response.json();
            setCartonesComprados(data)

        } catch (error) {
            console.log(error)
            
        }
    }

    const fetchCartones = async (partida) => {
        try {
          //const response = await fetch(`http://localhost:3000/cartones/all?criterio=cartonId&orden=ASC&partida=${partida}`);  // URL de la API, modifícala según tu entorno
          const response = await fetch(`http://localhost:3000/cartones/todos/${partida}`);
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
            setSeleccionado(seleccionado[0])
            setCartonesDeSelec(null)
            setCartonesComprados(null)
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
            fetchPartidasActivas();
            setVisibleGenerar(true);            
            handleShowAlert();
            

            }
            
            
        } catch (error) {
            console.log('No se pudieron crear los cartones')
            
        }
      }

      
    
      const generarCasillerosYFilas = (imagenesSeleccionadas) => {
        const totalFilas = cartonesDeSelec * 3;
        //let idFilaAutoincrement = maxFila + 1;
        let idFilaAutoincrement = maxFila + 1;
        let idCartonAutoincrement = maxCarton + 1;
        const cartones = [];  
        const filasGeneradas = [];
    
        //for (let carton = maxCarton; carton < (cartonesDeSelec+maxCarton); carton++) {
        for (let carton = 0; carton < (cartonesDeSelec); carton++) {
          console.log(`este es el carton ${carton} de ${cartonesDeSelec} cartones`)
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
                    imagenId: imagenAleatoria.imagen.imagenId,
                  });
                }
              }
      
              // Generar las filas
              filasGeneradas.push({
                
                cartonId: idCartonAutoincrement, // Cada fila pertenece a un cartón
                aciertos: 0, 
              });
      
              idFilaAutoincrement++;
            
          }
          idCartonAutoincrement++;
        }
        console.log(`Estos son los cartones: ${JSON.stringify(cartones)}`)
        console.log(`Estas son las filas generadas:${JSON.stringify(filasGeneradas)}`)
        
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

      const consultarMaxIdCarton = async (cartonIdSelec)=>{
        const response = await fetch('http://localhost:3000/cartones/max');
        if(!response.ok) return;
        const data = await response.json();
        setMaxCarton((data - cartonIdSelec));
      }

      const consultarMaxIdFila = async ()=>{
        const response = await fetch('http://localhost:3000/filas/max');
        if(!response.ok) return;
        const data = await response.json();
        setMaxFila(data);
      }

      useEffect(() => {
        const cargarYSeleccionar = async () => {
        
        };
    
        cargarYSeleccionar();
      }, []);    

    
      useEffect(()=>{

        const fetchImgPartida = async ()=>{
            try {
                const response = await fetch(`http://localhost:3000/img-seleccionadas/partida/${seleccionado.partidaId}`);
                if(!response.ok) throw new Error ('Error al recuperar las imagenes')
                const data = await response.json();
              if(data.length>0){
                setSeleccionadas(data)
              }
                
            } catch (error) {
                
            }            
        }
        fetchImgPartida();
    },[seleccionado])

      const crearCasillerosyFilas = ()=>{
        if (seleccionadas.length > 0) {
            
            const { cartones, filasGeneradas } = generarCasillerosYFilas(seleccionadas);
            setCasilleros(cartones);
            setFilas(filasGeneradas);
            setVisibleGenerar(false);
            setVisibleActualizar(true);            
            
      }else{
        console.log('no hay seleccionadas?')
      }
    }
      
      
      const addFilas = ()=>{
        enviarFilas(filas)
      }

      const addCasilleros = ()=>{
        enviarCasilleros(casilleros)
      }      

      const CompletarDatosPartida = async ()=>{       
        setLoader(true) 
        await enviarFilas(filas);
        await enviarCasilleros(casilleros);
        setLoader(false)        
        setVisibleActualizar(false);
      } 
            
            
            
    
    //console.log(`seleccionadas:${JSON.stringify(seleccionadas)}`)
    //console.log(`filas:${JSON.stringify(filas)}`)
    //console.log(`casilleros:${JSON.stringify(casilleros)}`)
  return (
    <div style={{display:'flex'}}>
        <div style={{width:'50%', textAlign:'center', padding:'10px'}}>
        <Button variant="success" style={{backgroundColor:'#5BB117', marginTop:'0.5em', marginBottom:'0.5em',width:'30%'}} onClick={fetchPartidasActivas} type='submit'>Refresh Partidas Activas</Button>{' '}
        
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
            <tr key={partida.partidaId}
              onClick={() => handleSeleccionado(partida)}
              style={seleccionado ? seleccionado.partidaId===partida.partidaId ?{cursor:'pointer', backgroundColor:'#DBD582', fontWeight:'bold'}:{cursor:'pointer'}:{cursor:'pointer'}}>
              <td>{partida.partidaId}</td>
              <td>{format(partida.horaInicio,"dd/MM/yyyy HH:mm")}</td>
              <td>{partida.cantidadCartones}</td>
                          
            </tr>
          ))}
        </tbody>
      </Table>
      <Button variant="success" style={{backgroundColor:'#5BB117', marginTop:'1em', marginBottom:'1em',width:'33%'}} onClick={()=> addCartones(seleccionado.partidaId)} type='submit' disabled={cartonesDeSelec>0?true:false}>Agregar Cartones</Button>
      <Button variant="success" style={{backgroundColor:'#5BB117', marginTop:'1em', marginBottom:'1em',width:'33%'}} onClick={crearCasillerosyFilas} type='submit' disabled={!visibleGenerar}>Agregar filas y casilleros</Button>
      <Button variant="success" style={{backgroundColor:'#5BB117', marginTop:'1em', marginBottom:'1em',width:'33%'}} onClick={CompletarDatosPartida} type='submit' disabled={!visibleActualizar}>Actualizar Base de Datos</Button>

      <div style={{display:'flex', justifyContent:'space-around', alignItems:'center'}}>
            
            <ul><h5>Informacion de la partida {seleccionado ? seleccionado.partidaId : ''}</h5>
                <li>Cartones generados: {cartonesDeSelec}</li>
                <li>Cartones comprados: {cartonesComprados}</li>
                
            </ul>
        {/*<h5>{cartonesDeSelec>0 ? `Existen ${cartonesDeSelec} cartones generados para la partida ${seleccionado.partidaId}` : `No existen cartones para la partida ${seleccionado.partidaId}`}</h5>}*/}
        
            </div>
        </div>

        
        <div style={{width:'50%'}}>
        <ul>
            <h5>Listado de cartones</h5>
            <Row style={{ flex: '1 1 auto', overflowY: 'auto', maxHeight: '80vh', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '8px', marginTop:'5px' }}>  
            
            <ul style={{listStyleType:'none', alignItems:'center'}}>
              {cartones.map(carton => (
              <>
              {/*<h5 style={{textAlign:'left',color:'#B11A17'}}>Cartón ID: {carton.cartonId} - Usuario ID: {carton.usuarioId} - Aciertos: {carton.aciertos}</h5>*/}
            <CartonBingo key={carton.cartonId} carton={carton} />
              </>
              ))}
            </ul>
            </Row>
            
            </ul>
        
        </div>
        {loader ? <Loader mensaje={'Actualizando...'}/> : ''}
        <CustomAlert
      show={showAlert}
      variant="primary"
      message={`Agrego los cartones, seleccionela fila para generar sus filas y casilleros`}
      showAcceptButton = {false}
      onClose={handleCloseAlert}
      titulo="Atención!!"/>

      

    </div>
  )
}
