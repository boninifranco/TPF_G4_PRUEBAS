import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, ButtonGroup, Dropdown, DropdownButton, InputGroup, Table } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import {baseUrl} from '../../core/constant/constantes.ts';
import CustomAlert from '../varios/CustomAlert/CustomAlert.jsx';


export const AbmUsuario =()=> {
    const [esAdmin, setEsAdmin] = useState(null); 
    const [data, setData] = useState([]);
    const [seleccionado, setSeleccionado]= useState(null);
    const [form, setForm] = useState({});
    const [textoBusqueda, setTextoBusqueda] = useState(''); // Texto de búsqueda
    const [campoBusqueda, setCampoBusqueda] = useState('apellido');
    const [eliminar, setEliminar] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [editable, setEditable] = useState(false);    
    const navigate = useNavigate();
    
    const handleShowAlert = () => setShowAlert(true);
    const handleCloseAlert = () => setShowAlert(false);
    const handleAccept = () => {
      handleDelete()
    };      

    const handleEsAdmin = (value)=>{
        setEsAdmin(value)
    }
    useEffect(() => {
        fetch(`${baseUrl}/usuario/`)
          .then((response) => {
            if(!response.ok){
              console.error('No se pudieron obtener los usuarios:', response.statusText);              
              const errorMessage = {              
                errorMessage: `Error: ${response.status} - ${response.statusText}`,
              };                        
              throw new Error(errorMessage.errorMessage || 'Ocurrió un error inesperado');
            }
            return response.json()})
          .then((data) => setData(data)) // Guardar los datos en el estado
          .catch((error) => {
            console.error('Error en la solicitud:', error.message);
            navigate('/error', { state: { errorMessage: error.message } });
          });
      }, []);

    
      useEffect(() => {
        if(!seleccionado)return;
        fetch(`${baseUrl}/registro/${seleccionado.id}/userId`) // El endpoint del backend
          .then((response) => {
            if(!response.ok){
              console.error('No se pudo obtener el usuario:', response.statusText);              
              const errorMessage = {              
                errorMessage: `Error: ${response.status} - ${response.statusText}`,
              };                        
              throw new Error(errorMessage.errorMessage || 'Ocurrió un error inesperado');
            }
            return response.json()})
          .then((data) => setEsAdmin(data.administrador)) // Guardar los datos en el estado
          .catch((error) => {
            console.error('Error en la solicitud:', error.message);
            navigate('/error', { state: { errorMessage: error.message } });
          });
      }, [seleccionado]);

    const handleSeleccionado = (fila)=>{
        setSeleccionado(fila);
        setForm(fila);
    }
    const handleForm = (event)=>{
        const {name,value} = event.target;
        setForm((prevValues)=>({
            ...prevValues, [name]:value,
        }))
    }
    const handleDelete = async ()=>{
        if (!seleccionado) return;
        await fetch(`${baseUrl}/usuario/${seleccionado.id}`,{
            method: 'DELETE',
        })
        .then(() => {
            // Actualiza el estado eliminando el registro de la tabla
            setData((prevData) => prevData.filter((item) => item.id !== seleccionado.id));
            setSeleccionado(null); // Deselecciona el registro después de eliminarlo
            setForm({}); // Limpia el formulario después de eliminar
            setEliminar(false);
            setShowAlert(false);

          })
          .catch((error) => {
            console.error('Error en la solicitud:', error.message);
            navigate('/error', { state: { errorMessage: error.message } });
          });

        
    }

    const handleUpdate = async (e)=>{
        e.preventDefault();
        await fetch(`${baseUrl}/usuario/${seleccionado.id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                
                apellido:form.apellido,
                nombre: form.nombre,
                dni: form.dni,
                direccion: form.direccion,
                celular:form.celular,
                puntos: editable ? form.puntos : 0,
              } 
            ), // Enviar los nuevos datos
        })
        .then((response) => {
          if(!response.ok){
            console.error('No se pudo editar el usuario:', response.statusText);              
            const errorMessage = {              
              errorMessage: `Error: ${response.status} - ${response.statusText}`,
            };                        
            throw new Error(errorMessage.errorMessage || 'Ocurrió un error inesperado');
          }
          return response.json()})
        .then((updatedRecord) => {
        // Actualiza el estado con el registro actualizado
        setData((prevData) =>
          prevData.map((item) =>
            item.id === updatedRecord.id ? updatedRecord : item
          )
        );
        setSeleccionado(null); // Deselecciona el registro una vez actualizado
        setEditable(false);
      })
      .catch((error) => {
          console.error('Error en la solicitud:', error.message);
          navigate('/error', { state: { errorMessage: error.message } });
      });
      await fetch(`${baseUrl}/registro/${seleccionado.id}/admin`,{
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            administrador:esAdmin,
            
          }), // Enviar los nuevos datos

    })
    .then((response) => {
      if(!response.ok){
        console.error('No se pudo editar el registro:', response.statusText);              
        const errorMessage = {              
          errorMessage: `Error: ${response.status} - ${response.statusText}`,
        };                        
        throw new Error(errorMessage.errorMessage || 'Ocurrió un error inesperado');
      }
      return response.json()})
    .then((updatedRecord) => {
    // Actualiza el estado con el registro actualizado
    setEsAdmin((updatedRecord),
    setForm({})
      
    );    
  }
)
    
    .catch((error) => {
        console.error('Error en la solicitud:', error.message);
        navigate('/error', { state: { errorMessage: error.message } });
    });


    }
// Maneja la búsqueda, filtrando los resultados
const dataFiltrada = data.filter((item) => {
    return item[campoBusqueda].toString().toLowerCase().includes(textoBusqueda.toLowerCase());
  });
   
  return (
    <div style={{display:'flex', padding:'10px', backgroundColor:'#FFFAB3'}}>
        <div style={{width:'70%'}}>
      <Form inline className="mb-3" style={{display:'flex', justifyContent:'center'}}>
        <ButtonGroup className="ml-2">
          <Button variant="danger" >{`Buscar en: ${campoBusqueda.charAt(0).toUpperCase()}${campoBusqueda.slice(1)}`}</Button>
          <DropdownButton as={ButtonGroup}  title="Campos" id="bg-nested-dropdown" variant="danger" >
            <Dropdown.Item onClick={() => setCampoBusqueda('apellido')}>Apellido</Dropdown.Item>
            <Dropdown.Item onClick={() => setCampoBusqueda('nombre')}>Nombre</Dropdown.Item>
            <Dropdown.Item onClick={() => setCampoBusqueda('direccion')}>Direccion</Dropdown.Item>
          </DropdownButton>
        </ButtonGroup>
        <Form.Control
          type="text"
          placeholder="Buscar..."
          value={textoBusqueda}
          onChange={(e) => setTextoBusqueda(e.target.value)}
          style={{width:'60%'}}
        />
      </Form>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Apellido</th>
            <th>Nombres</th>
            <th>Dni</th>
            <th>Direccion</th>
            <th>Celular</th>
          </tr>
        </thead>
        <tbody>
          {dataFiltrada.map((item) => (
            <tr key={item.id} onClick={() => handleSeleccionado(item)} style={{cursor:'pointer'}}>
              <td>{item.apellido}</td>
              <td>{item.nombre}</td>
              <td>{item.dni}</td>
              <td>{item.direccion}</td>
              <td>{item.celular}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  


        <div style={{width:'30%',display:'flex', justifyContent:'center'}}>
            <Form style={{width:'100%',padding:'5%'}}>
                <div style={{display:'flex', gap:'4%'}}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" style={{width:'48%'}}>
                    <Form.Label>Apellido</Form.Label>
                        <Form.Control 
                        type="text"
                        name="apellido"
                        value = {form.apellido || ''}
                        onChange={handleForm} />
                    </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2" style={{width:'48%'}}>
                    <Form.Label>Nombre</Form.Label>
                        <Form.Control 
                        type="text" 
                        name="nombre"
                        value = {form.nombre || ''}
                        onChange={handleForm} />
                </Form.Group>  
                </div>

                <div style={{display:'flex', gap:'4%'}}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                    <Form.Label>Dni</Form.Label>
                        <Form.Control 
                        type="text" 
                        name="dni"
                        value = {form.dni || ''}
                        onChange={handleForm} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                    <Form.Label>Celular</Form.Label>
                        <Form.Control 
                        type="text" 
                        name="celular"
                        value = {form.celular || ''}
                        onChange={handleForm} />
                </Form.Group>

                </div>
                             
                <div style={{display:'flex', gap:'4%'}}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                    <Form.Label>Dirección</Form.Label>
                        <Form.Control 
                        type="text" 
                        name="direccion"
                        value = {form.direccion || ''}
                        onChange={handleForm}
                        style={{width:'200px'}} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput7">
                    <Form.Label>Puntos</Form.Label>
                        <Form.Control 
                        type="number" 
                        name="puntos"
                        value = {form.puntos || ''}                        
                        onChange={handleForm}
                        style={{width:'80px'}}
                        disabled = {!editable}
                         />
                </Form.Group>
                <label>
                  <input
                    type="checkbox"
                    checked={editable}
                    onChange={(e) => setEditable(e.target.checked)}
                  />
                    Editar
                </label>               

                </div>
                
                
                
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
                    <Form.Label>Rol</Form.Label>
                    <div style={{display:'flex', justifyContent:'space-around'}}>
                    <Form.Check
                    type="checkbox"
                    label="Administrador"
                    checked={esAdmin === true} // Solo checked si es true
                    onChange={() => handleEsAdmin(true)} // Marca como true
                    />
                    <Form.Check
                    type="checkbox"
                    label="Usuario"
                    checked={esAdmin === false} // Solo checked si es false
                    onChange={() => handleEsAdmin(false)} // Marca como false
                    />
                    </div>                
                </Form.Group>
                <div style={{display:'flex', justifyContent:'space-around'}}>
                <Button variant="success" style={{backgroundColor:'#B11A17', marginTop:'1em', marginBottom:'1em',width:'30%'}} onClick={handleShowAlert} >Eliminar</Button>{' '}
                <Button variant="success" style={{backgroundColor:'#E5AA11', marginTop:'1em', marginBottom:'1em',width:'30%'}} onClick={handleUpdate} type='submit'>Modificar</Button>{' '}
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
            titulo="Eliminar Usuario"
        />
    
    </div>
  );
};

