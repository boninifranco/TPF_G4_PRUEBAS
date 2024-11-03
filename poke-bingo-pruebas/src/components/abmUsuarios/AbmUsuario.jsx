import { useEffect, useState } from 'react';
import { Button, ButtonGroup, Dropdown, DropdownButton, InputGroup, Table } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './abmUsuario.css'

export const AbmUsuario =()=> {
    const [esAdmin, setEsAdmin] = useState(null); 
    const [data, setData] = useState([]);
    const [seleccionado, setSeleccionado]= useState(null);
    const [form, setForm] = useState({});
    const [textoBusqueda, setTextoBusqueda] = useState(''); // Texto de búsqueda
    const [campoBusqueda, setCampoBusqueda] = useState('apellido');

    const handleEsAdmin = (value)=>{
        setEsAdmin(value)
    }

    useEffect(() => {
        fetch('http://localhost:3000/usuario/') // El endpoint del backend
          .then((response) => response.json())
          .then((data) => setData(data)) // Guardar los datos en el estado
          .catch((error) => console.error('Error fetching data:', error));
      }, []);
    
      useEffect(() => {
        if(!seleccionado)return;
        fetch(`http://localhost:3000/registro/${seleccionado.id}/userId`) // El endpoint del backend
          .then((response) => response.json())
          .then((data) => setEsAdmin(data.administrador)) // Guardar los datos en el estado
          .catch((error) => console.error('Error fetching data:', error));
      }, [seleccionado]);

    const handleSeleccionado = (fila)=>{
        setSeleccionado(fila);
        setForm(fila);
    }
    console.log(seleccionado)
    const handleForm = (event)=>{
        const {name,value} = event.target;
        setForm((prevValues)=>({
            ...prevValues, [name]:value,
        }))
    }
    const handleDelete = async (e)=>{
        e.preventDefault();
        if (!seleccionado) return;
        if (window.confirm('¿Estás seguro de que deseas eliminar este registro?')){
        await fetch(`http://localhost:3000/usuario/${seleccionado.id}`,{
            method: 'DELETE',
        })
        .then(() => {
            // Actualiza el estado eliminando el registro de la tabla
            setData((prevData) => prevData.filter((item) => item.id !== seleccionado.id));
            setSeleccionado(null); // Deselecciona el registro después de eliminarlo
            setForm({}); // Limpia el formulario después de eliminar
          })
          .catch((error) => console.error('Error deleting data:', error));

        }
    }

    const handleUpdate = async (e)=>{
        e.preventDefault();
        console.log("Datos enviados:", form);
        await fetch(`http://localhost:3000/usuario/${seleccionado.id}`,{
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
              }), // Enviar los nuevos datos
        })
        .then((response) => response.json())
      .then((updatedRecord) => {
        // Actualiza el estado con el registro actualizado
        setData((prevData) =>
          prevData.map((item) =>
            item.id === updatedRecord.id ? updatedRecord : item
          )
        );
        setSeleccionado(null); // Deselecciona el registro una vez actualizado
      })
      .catch((error) => console.error('Error updating data:', error));

      console.log(`para el usuario ${seleccionado.id} es admin es ${esAdmin}`)
      await fetch(`http://localhost:3000/registro/${seleccionado.id}/admin`,{
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            administrador:esAdmin,
            
          }), // Enviar los nuevos datos
    })
    .then((response) => response.json())
    .then((updatedRecord) => {
    // Actualiza el estado con el registro actualizado
    setEsAdmin((updatedRecord),
    setForm({})
      //prev.map((item) =>
        //item.id === updatedRecord.id ? updatedRecord : item
      //)
    );
    //setSeleccionado(null); // Deselecciona el registro una vez actualizado
  }
)
    
    .catch((error) => console.error('Error updating data:', error));


    }
// Maneja la búsqueda, filtrando los resultados
const dataFiltrada = data.filter((item) => {
    return item[campoBusqueda].toString().toLowerCase().includes(textoBusqueda.toLowerCase());
  });
   
  return (
    <div style={{display:'flex', padding:'10px', backgroundColor:'#FFFAB3'}}>
        <div style={{width:'70%'}}>
        {/* Formulario de búsqueda con Button and Dropdown */}
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
            {/* Otros campos */}
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
              {/* Otros campos */}
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
                             
                
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                    <Form.Label>Dirección</Form.Label>
                        <Form.Control 
                        type="text" 
                        name="direccion"
                        value = {form.direccion || ''}
                        onChange={handleForm} />
                </Form.Group>
                
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
                <Button variant="success" style={{backgroundColor:'#B11A17', marginTop:'1em', marginBottom:'1em',width:'30%'}} onClick={handleDelete} type='submit'>Eliminar</Button>{' '}
                <Button variant="success" style={{backgroundColor:'#E5AA11', marginTop:'1em', marginBottom:'1em',width:'30%'}} onClick={handleUpdate} type='submit'>Modificar</Button>{' '}
                </div>
            </Form>
        </div>
    
    
    </div>
  );
};

