import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { Button, Form, Table } from 'react-bootstrap'
import { format,parse} from 'date-fns';
import '../abmPartidas/abmPartidas.css'



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
    


  const handleDateChange = (date) => {
    
    setFecha(date);
  };

  //const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  const handleRowClick = (fecha) => {
    // Convertir la fecha desde el formato ISO al tipo Date
    //const parsedDate = parse(fecha, "dd/MM/yyyy HH:mm", new Date());;
    //setSelectedDate(parsedDate);
    //console.log(fecha)
    //console.log(parsedDate)
    setFecha(fecha)
    //console.log(fecha)
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
      const response = await fetch('http://localhost:3000/sala/1')
      if(!response.ok){
        await fetch ('http://localhost:3000/sala',{
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
              
        //console.log("Datos enviados:", form);
        await fetch(`http://localhost:3000/partidas/`,{
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
        .then((response) => response.json())
        //.then((response)=> console.log(`response en handleAdd: ${response}`))
        
      .then((updatedRecor) => {        
        setRenderizar(!renderizar)
        
      })
      .then(
        setSeleccionado(null), // Deselecciona el registro una vez actualizado
        setForm({}),
        setFinalizada(null),
        setFecha(null),
      )
      .catch((error) => console.error('Error agregando data:', error));

    }

    const handleDelete = async (e)=>{
      e.preventDefault();
        //console.log("Datos enviados:", form);
        await fetch(`http://localhost:3000/partidas/${seleccionado.partidaId}`,{
            method: 'DELETE',            
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
      )
        .catch((error) => console.error('Error updating data:', error));

    }

    const handleUpdate = async (e)=>{

      e.preventDefault();
        //console.log("Datos enviados:", form);
        await fetch(`http://localhost:3000/partidas/${seleccionado.partidaId}`,{
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
        .then((response) => response.json())
      .then((updatedRecor) => {
        // Actualiza el estado con el registro actualizado
        /*setPartidas((prevData) =>
          prevData.map((item) =>
            item.partidaId === updatedRecor.partidaId ?
          {...updatedRecor} : item
          )
          
        );
        console.log(`estas son las partidas actualizadas: ${JSON.stringify(partidas)}`)*/
        setRenderizar(!renderizar)
        
      })
      .then(
        setSeleccionado(null), // Deselecciona el registro una vez actualizado
        setForm({}),
        setFinalizada(null),
        setFecha(null),
      )
      .catch((error) => console.error('Error updating data:', error));

    }

    const obtenerImagenes = async () => {
      try {
        const response = await fetch('http://localhost:3000/imagenes'); 
        if (!response.ok) {
          //console.log(response)
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
                      imagenId: seleccionada.imagenId,//imagenId
                  }),
                });
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
                console.log('No se pudieron enviar las imagenes seleccionadas')
        
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
                const response =  await fetch(`http://localhost:3000/partidas`)
                if(!response.ok) throw new Error (`no se obtuvieron partidas de la base de datos`);
                const data = await response.json();
                if(Array.isArray(data)){
                  const dataConvertida = data.map((item) => ({
                    ...item,
                    horaInicio: parse(item.horaInicio, "dd/MM/yyyy HH:mm", new Date()), // Conversión a Date
                  }));
              
                  //setData(datosConvertidos);
                  setPartidas(dataConvertida)
                }else{
                  console.log('data no es un array')
                }
                
            } catch (error) {
                console.log(error)
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
    //console.log(partidas)

    useEffect(()=>{

      const fetchImgPartida = async ()=>{
          try {
              const response = await fetch(`http://localhost:3000/img-seleccionadas/partida/${seleccionado.partidaId}`);
              if(!response.ok) throw new Error ('Error al recuperar las imagenes')
              const data = await response.json();
            if(data.length>0){
              setTieneImagenes(true)
            }else{
              setTieneImagenes(false)
            }
              
          } catch (error) {
              
          }            
      }
      fetchImgPartida();
  },[seleccionado])

  useEffect(()=>{

    const fetchPartidasConImagenes = async ()=>{
        try {
            const response = await fetch(`http://localhost:3000/partidas/conImagenes/`);
            if(!response.ok) throw new Error ('Error al recuperar las partidas con imagenes')
            const data = await response.json();
          setPartidasImagenes(data);
         
          
            
        } catch (error) {
            
        }            
    }
    fetchPartidasConImagenes();
},[renderizar])

const conImagenes = (partidaId) => {
  const partida = partidasImagenes.find((p) => p.partidaId === partidaId);
  return partida ? partida.hasImages : false;
};
  console.log(`tiene imagenes?:${tieneImagenes}`)
  console.log(`seleccionadas:${seleccionadas.length}`)
  console.log(`Partidas con imagenes: ${JSON.stringify(partidasImagenes)}`)

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
                        {/*<Form.Control 
                        type="text" 
                        name="horaInicio"
                        value = {form.horaInicio || ''}
                        onChange={handleForm} />*/}
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
                    {/*<Button variant={tieneImagenes ? "danger":"success"} style={{marginTop:'1em', marginBottom:'1em',width:'50%'}} onClick={(e)=>generarImagenes(e)} type='submit' disabled={!seleccionado ? true : tieneImagenes ? true : false}>{tieneImagenes ? 'Partida con imágenes' : 'Generar imágenes'}</Button>{' '}*/}                
                </Form.Group>
                <div style={{display:'flex', justifyContent:'space-around'}}>
                <Button variant="success" style={{backgroundColor:'#5BB117', marginTop:'1em', marginBottom:'1em',width:'30%'}} onClick={handleAdd} type='submit'>Agregar</Button>{' '}
                <Button variant="success" style={{backgroundColor:'#E5AA11', marginTop:'1em', marginBottom:'1em',width:'30%'}} onClick={handleUpdate} type='submit'>Modificar</Button>{' '}
                <Button variant="success" style={{backgroundColor:'#B11A17', marginTop:'1em', marginBottom:'1em',width:'30%'}} onClick={handleDelete} type='submit'>Eliminar</Button>{' '}
                </div>
            </Form>
        </div>
    

    </div>
  )
}
