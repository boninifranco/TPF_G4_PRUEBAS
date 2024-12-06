import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Table } from 'react-bootstrap'
import { format,parse} from 'date-fns';
import '../abmPartidas/abmPartidas.css'
import {baseUrl} from '../../core/constant/constantes.ts';
import CustomAlert from '../varios/CustomAlert/CustomAlert.jsx';



export const AbmPartidas = () => {

    const [partidas, setPartidas] = useState([])
    const [finalizada, setFinalizada] = useState(null)
    const [seleccionado, setSeleccionado]= useState(null);
    const [form, setForm] = useState({});
    const [fecha, setFecha] = useState(null);
    const [renderizar, setRenderizar] = useState(false)
    const [isAsc, setIsAsc] = useState(true); // Estado para el orden
    const [estadoFiltro, setEstadoFiltro] = useState('todas'); // todas, pendientes, finalizadas
    const [partidasFiltradas, setPartidasFiltradas] = useState(partidas);
    const [tieneImagenes, setTieneImagenes] = useState(false)
    const [imagenes, setImagenes] = useState([]);
    const [seleccionadas, setSeleccionadas] = useState([]);
    const [partidasImagenes, setPartidasImagenes] = useState({});
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();

    const handleShowAlert = () => setShowAlert(true);
    const handleCloseAlert = () => setShowAlert(false);
    const handleAccept = () => {
      handleDelete()
    };     
    


  const handleDateChange = (date) => {    
    setFecha(date);
  };

  const handleRowClick = (fecha) => {   
    setFecha(fecha)    
  };
  
  const handleSort = () => {
    const sortedData = [...partidas].sort((a, b) => {
      if (isAsc) {
        return new Date(a.horaInicio) - new Date(b.horaInicio); // Orden ascendente
      } else {
        return new Date(b.horaInicio) - new Date(a.horaInicio); // Orden descendente
      }
    });
    setPartidas(sortedData);
    setIsAsc(!isAsc); // Cambia el orden para la próxima vez
  };

  const handleFiltroChange = (e) => {
    setEstadoFiltro(e.target.value);
  };
  
  
    const handleFinalizada = (value)=>{
        setFinalizada(value)
    }

    const handleSeleccionado = (fila)=>{
        setSeleccionado(fila);
        setFinalizada(fila.estadoPartida)
        handleRowClick(fila.horaInicio)        
        setForm(fila);
        setRenderizar(!renderizar)
    }

    const handleForm = (event)=>{
        const {name,value} = event.target;
        setForm((prevValues)=>({
            ...prevValues, [name]:value,
        }))
    }

    const existeSala = async()=>{
      const response = await fetch(`${baseUrl}/sala/1`)
      if(!response.ok){
        await fetch (`${baseUrl}/sala`,{
          method:'POST',
          headers: {
              'Content-Type': 'application/json',
            },body: JSON.stringify({
            }),          
      })
      .then((response) => response.json())
      .catch(console.log('error agregando sala')) 
      }
    }

    const handleAdd = async(e)=>{
      e.preventDefault();
        await fetch(`${baseUrl}/partidas/`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                salaId:1,
                cantidadCartones:form.cantidadCartones,
                horaInicio: format(fecha,"dd/MM/yyyy HH:mm"),
                estadoPartida: false,
                
              }), // Enviar los nuevos datos
        })
        .then((response) => {
          if(!response.ok){
            console.error('No se pudo agregar la partida:', response.statusText);              
            const errorMessage = {              
              errorMessage: `Error: ${response.status} - ${response.statusText}`,
            };                        
            throw new Error(errorMessage.errorMessage || 'Ocurrió un error inesperado');
          }
          return response.json()})
        .then((updatedRecor) => {        
          setRenderizar(!renderizar)
        
      })
        .then(
        setSeleccionado(null), // Deselecciona el registro una vez actualizado
        setForm({}),
        setFinalizada(null),
        setFecha(null),
      )
      .catch((error) => {
        console.error('Error en la solicitud:', error.message);
        navigate('/error', { state: { errorMessage: error.message } });
      });

    }

    const handleDelete = async ()=>{
             
        await fetch(`${baseUrl}/partidas/${seleccionado.partidaId}`,{
            method: 'DELETE',            
        })
        .then((response)=>{
          if(!response.ok){
            console.error('No se pudo eliminar la partida:', response.statusText);              
            const errorMessage = {              
              errorMessage: `Error: ${response.status} - ${response.statusText}`,
            };                        
            throw new Error(errorMessage.errorMessage || 'Ocurrió un error inesperado');
          }

        })
        .then(()=>{
          setRenderizar(!renderizar)
        }       
      )
        .then(
          setSeleccionado(null), // Deselecciona el registro una vez actualizado
          setForm({}),
          setFinalizada(null),
          setFecha(null),
          setShowAlert(false)
      )
        .catch((error) => {
          console.error('Error en la solicitud:', error.message);
          navigate('/error', { state: { errorMessage: error.message } });
        });

    }

    const handleUpdate = async (e)=>{
      e.preventDefault();        
        await fetch(`${baseUrl}/partidas/${seleccionado.partidaId}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                cantidadCartones:form.cantidadCartones,
                horaInicio: format(fecha,"dd/MM/yyyy HH:mm"),
                estadoPartida: finalizada,
                
              }), // Enviar los nuevos datos
        })
        .then((response) => {
          if(!response.ok){
            console.error('No se pudo eliminar la partida:', response.statusText);              
            const errorMessage = {              
              errorMessage: `Error: ${response.status} - ${response.statusText}`,
            };                        
            throw new Error(errorMessage.errorMessage || 'Ocurrió un error inesperado');
          }
          return response.json()})
        .then((updatedRecor) => {        
        setRenderizar(!renderizar)
        
      })
      .then(
        setSeleccionado(null), // Deselecciona el registro una vez actualizado
        setForm({}),
        setFinalizada(null),
        setFecha(null),
      )
      .catch((error) => {
          console.error('Error en la solicitud:', error.message);
          navigate('/error', { state: { errorMessage: error.message } });
      });

    }

    const obtenerImagenes = async () => {
      try {
        const response = await fetch(`${baseUrl}/imagenes`); 
        if (!response.ok) {
          console.error('No se pudieron obtener las imagenes:', response.statusText);              
          const errorData = await response.json();
          throw new Error(errorData.message || 'Ocurrió un error inesperado');
        }
        const data = await response.json();
        setImagenes(data); 
      } catch (error) {
          console.error('Error en la solicitud:', error);
          navigate('/error', { state: { errorMessage: error.message } });
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
          const response = await fetch(`${baseUrl}/img-seleccionadas`,{
            method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                      partidaId:partida,
                      imagenId: seleccionada.imagenId,
                  }),
                });
                if (!response.ok) {
                    console.error('No se pudieron enviar las imagenes seleccionadas:', response.statusText);              
                    const errorData = await response.json();
                    throw new Error(errorData.message || 'Ocurrió un error inesperado');
                }
                console.log('Imagenes seleccionadas enviadas')  
        }
        setPartidasImagenes((prevPartidasImagenes) =>
          prevPartidasImagenes.map((p) =>
            p.partidaId === partida ? { ...p, hasImages: true } : p
          )
        );
        setForm({})
        setFecha(null)
      } catch (error) {
        console.error('Error en la solicitud:', error);
        navigate('/error', { state: { errorMessage: error.message } });
        
      }
    }

    const generarImagenes = (e)=>{
      e.preventDefault()
      if (imagenes.length > 0) {
        const imagenesSeleccionadas = seleccionarImagenesAleatorias(imagenes, 90);
        setSeleccionadas(imagenesSeleccionadas);
        setForm({});
        setFinalizada(null);
        setFecha(null);
        setTieneImagenes(true);        
      }
    }  

    useEffect(()=>{
      existeSala();
      obtenerImagenes();
    },[]);

    useEffect(()=>{
      if(seleccionado){
        enviarSeleccionadas(seleccionado.partidaId);
      }      
    },[seleccionadas])


    useEffect(()=>{
        const fetchPartidas = async ()=>{
            try {
                const response =  await fetch(`${baseUrl}/partidas`)
                if(!response.ok) {
                    console.error('No se pudieron obtener las partidas:', response.statusText);              
                    const errorData = await response.json();
                    throw new Error(errorData.message || 'Ocurrió un error inesperado');
                };
                const data = await response.json();
                if(Array.isArray(data)){
                  const dataConvertida = data.map((item) => ({
                    ...item,
                    horaInicio: parse(item.horaInicio, "dd/MM/yyyy HH:mm", new Date()), // Conversión a Date
                  }));             
                 
                  setPartidas(dataConvertida)
                }else{
                  console.log('data no es un array')
                }
                
            } catch (error) {
              console.error('Error en la solicitud:', error);
              navigate('/error', { state: { errorMessage: error.message } });
            }
        }        
        fetchPartidas();
        
    },[renderizar])

    useEffect(() => {
      let partidasFiltradas = partidas;
      if (estadoFiltro === 'pendientes') {
        partidasFiltradas = partidas.filter((partida) => partida.estadoPartida === false);
      } else if (estadoFiltro === 'finalizadas') {
        partidasFiltradas = partidas.filter((partida) => partida.estadoPartida === true);
      }
      setPartidasFiltradas(partidasFiltradas);
    }, [estadoFiltro, partidas]);    

    useEffect(()=>{

      const fetchImgPartida = async ()=>{
          try {
            if(seleccionado){
              const response = await fetch(`${baseUrl}/img-seleccionadas/partida/${seleccionado.partidaId}`);
              if(!response.ok) {
                    console.error('No se pudieron obtener las imagenes de la partida:', response.statusText);              
                    const errorData = await response.json();
                    throw new Error(errorData.message || 'Ocurrió un error inesperado');
              };
              const data = await response.json();
            if(data.length>0){
              setTieneImagenes(true)
            }else{
              setTieneImagenes(false)
            }
          }
              
          } catch (error) {
            console.error('Error en la solicitud:', error);
            navigate('/error', { state: { errorMessage: error.message } });
          }            
      }
      fetchImgPartida();
  },[seleccionado])

  useEffect(()=>{

    const fetchPartidasConImagenes = async ()=>{
        try {
            const response = await fetch(`${baseUrl}/partidas/conImagenes/`);
            if(!response.ok) {
              console.error('No se pudieron obtener las partidas con imagenes:', response.statusText);              
              const errorData = await response.json();
              throw new Error(errorData.message || 'Ocurrió un error inesperado');
        };
            const data = await response.json();
          setPartidasImagenes(data);            
        } catch (error) {
          console.error('Error en la solicitud:', error);
          navigate('/error', { state: { errorMessage: error.message } });
        }            
    }
    fetchPartidasConImagenes();
},[renderizar])

const conImagenes = (partidaId) => {
  const partida = partidasImagenes.find((p) => p.partidaId === partidaId);
  return partida ? partida.hasImages : false;
};
  

  return (
    <div style={{display:'flex', justifyContent:'center'}}>
        <div style={{display:'flex', flexDirection:'column',width:'50%'}}>
        <label>Filtrar por estado:</label>
      <select value={estadoFiltro} onChange={handleFiltroChange}>
        <option value="todas">Todas</option>
        <option value="pendientes">Pendientes</option>
        <option value="finalizadas">Finalizadas</option>
      </select>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id Partida</th>
            <th onClick={handleSort} style={{ cursor: 'pointer' }}>Inicio {isAsc ? '▲' : '▼'}</th>
            <th>Cantidad de Cartones</th>
            <th>Finalizada</th>
            <th>Imagenes</th>            
          </tr>
        </thead>
        <tbody>
          {partidasFiltradas.map((partida) => (
            <tr key={partida.partidaId}  onClick={() => handleSeleccionado(partida)} style={{cursor:'pointer'}}>
              <td>{partida.partidaId}</td>
              <td>{format(partida.horaInicio,"dd/MM/yyyy HH:mm")}</td>
              <td>{partida.cantidadCartones}</td>
              <td >
                <input type='checkbox' checked={partida.estadoPartida} readOnly/>
                </td>
              <td>
              <Button variant={conImagenes(partida.partidaId) ? "danger":"success"} style={{width:'100%'}} onClick={(e)=>generarImagenes(e)} type='submit' disabled={!seleccionado ? true : conImagenes(partida.partidaId) ? true : false}>{conImagenes(partida.partidaId) ? 'Con imágenes' : 'Generar imágenes'}</Button>{' '}
                </td>              
            </tr>
          ))}
        </tbody>
      </Table>
        </div>

        <div style={{width:'30%',display:'flex', justifyContent:'center'}}>
            <Form style={{width:'100%',padding:'5%'}}>
                <div style={{display:'flex', gap:'4%'}}>
                    <Form.Group  className='mb-3' controlId="exampleForm.ControlInput1" >
                    <Form.Label>Id Partida</Form.Label>
                        <Form.Control 
                        type="text"
                        name="idPartida"
                        value = {form.partidaId || ''}
                        onChange={handleForm}
                        readOnly
                        style={{backgroundColor:'#DDDDDD'}} />
                        
                    </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Inicio</Form.Label>
                        
                        <DatePicker 
                        selected={fecha}
                        onChange={handleDateChange}
                        className='custom-datepicker'                        
                        showTimeSelect
                        timeFormat="HH:mm" // Formato para la hora
                        timeIntervals={15} // Intervalo de minutos (opcional)
                        dateFormat="dd/MM/yyyy HH:mm" // Formato personalizado para fecha y hora
                        placeholderText="Selecciona fecha y hora"
                      />

                </Form.Group> 
                <div style={{display:'flex', gap:'4%'}}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                    <Form.Label>Cartones</Form.Label>
                        <Form.Control 
                        type="number" 
                        name="cantidadCartones"
                        value = {form.cantidadCartones || ''}
                        onChange={handleForm} />
                </Form.Group>
                </div>
                </div>

                
                
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
                    <Form.Label>Estado</Form.Label>
                    <div style={{display:'flex', justifyContent:'space-around'}}>
                    <Form.Check
                    type="checkbox"
                    label="Pendiente"
                    checked={finalizada === false} // Solo checked si es true
                    onChange={() => handleFinalizada(false)} // Marca como true
                    />
                    <Form.Check
                    type="checkbox"
                    label="Finalizada"
                    checked={finalizada === true} // Solo checked si es false
                    onChange={() => handleFinalizada(true)} // Marca como false
                    />
                    </div>
                    
                </Form.Group>
                <div style={{display:'flex', justifyContent:'space-around'}}>
                <Button variant="success" style={{backgroundColor:'#5BB117', marginTop:'1em', marginBottom:'1em',width:'30%'}} onClick={handleAdd} type='submit'>Agregar</Button>{' '}
                <Button variant="success" style={{backgroundColor:'#E5AA11', marginTop:'1em', marginBottom:'1em',width:'30%'}} onClick={handleUpdate} type='submit'>Modificar</Button>{' '}
                <Button variant="success" style={{backgroundColor:'#B11A17', marginTop:'1em', marginBottom:'1em',width:'30%'}} onClick={handleShowAlert} >Eliminar</Button>{' '}
                </div>
            </Form>
        </div>
        <CustomAlert
            show={showAlert}
            variant="danger"
            message='Esta seguro que desea eliminar?'
            showAcceptButton = {true}      
            onClose={handleCloseAlert}
            onAccept={handleAccept}
            titulo="Eliminar Partida"
        />
    </div>
  )
}
