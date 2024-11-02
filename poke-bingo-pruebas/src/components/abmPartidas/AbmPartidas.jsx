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

    useEffect(()=>{
      existeSala();
    },[]);


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
