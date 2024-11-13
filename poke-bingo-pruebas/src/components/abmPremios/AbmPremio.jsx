import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup, Dropdown, DropdownButton, Form, Table } from 'react-bootstrap';
import { UploadImage } from '../varios/UploadImage/UploadImage';

export const AbmPremio = () => {
  const [premios, setPremios] = useState([]);
  const [premioSeleccionado, setPremioSeleccionado] = useState(null);
  const [formData, setFormData] = useState({
    descripcion: '',
    imagen: null,
    creditos: '',
  });


    const imagenesDisponibles = [
    { nombre: 'gofrera', path: 'http://localhost:3000/static-assets/gofrera.png' },
    { nombre: 'gorraPokemon', path: 'http://localhost:3000/static-assets/gorraPokemon.png' },
    { nombre: 'mochilaPicachu', path: 'http://localhost:3000/static-assets/mochilaPicachu.png' },
  ];

  
    useEffect(()=>{
        
        fetchPremios();
    },[])

    const fetchPremios = async()=>{
        try {
            const response = await fetch('http://localhost:3000/premios')
            if(!response.ok) throw new Error('No se pudieron recuperar los premios');
            const data = await response.json();
            setPremios(data)
            
        } catch (error) {
            console.log(error)                
        }
    }

   
    /*const handleAdd = async()=>{
        try {
            const response = await fetch('http://localhost:3000/premios',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({
                    descripcion,
                    imagen,
                    //creditos,                    
                  }) 
            })
            if(!response.ok) throw new Error('no se pudo agregar el premio')
            
            setForm({})
        } catch (error) {
            console.error(error)
            
        }
    };*/

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleFileChange = (e) => {
        setFormData({ ...formData, imagen: e.target.files[0] });
      };
    
      const handleSelectPremio = (premio) => {
        setPremioSeleccionado(premio);
        setFormData({
          descripcion: premio.descripcion,
          imagen: premio.imagen,
          creditos: premio.creditos,
        });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formDataToSend = new FormData();
        formDataToSend.append('descripcion', formData.descripcion);
        formDataToSend.append('creditos', formData.creditos);
        if (formData.imagen) {
          formDataToSend.append('imagen', formData.imagen);
        }
    
        const url = premioSeleccionado
          ? `http://localhost:3000/premios/${premioSeleccionado.id}`
          : 'http://localhost:3000/premios';
        const method = premioSeleccionado ? 'PATCH' : 'POST';
    
        const response = await fetch(url, {
          method,
          body: formDataToSend,
        });
    
        if (response.ok) {
          fetchPremios();
          resetForm();
          alert(`Premio ${premioSeleccionado ? 'actualizado' : 'creado'} con éxito`);
        }
      };
    
      const resetForm = () => {
        setPremioSeleccionado(null);
        setFormData({
          descripcion: '',
          imagen: null,
          creditos: '',
        });
      };

      const fileUpload = async (file)=>{

        if (!file) throw new Error('No tenemos archivo para subir');

        const cloudUrl = 'https://api.cloudinary.com/v1_1/dsqrqtwql/upload';

        const formData = new FormData();
        formData.append('upload_preset','poke-bingo');
        formData.append('file', file);

        try {

          const resp = await fetch(cloudUrl,{
            method:'POST',
            body: formData
          });
          if( !resp.ok) throw new Error ('No se pudo enviar el archivo')
          const cloudResp = await resp.json();

          return cloudResp.secure_url;
          
        } catch (error) {
          throw new Error(error.message)
        }

      }
    
    
    
  return (
    <div>
      <UploadImage/>
      <h2>Lista de Premios</h2>
      <ul>
        {premios.map((premio) => (
          <li key={premio.id} onClick={() => handleSelectPremio(premio)}>
            {premio.descripcion} - {premio.creditos} créditos
          </li>
        ))}
      </ul>

      <h2>{premioSeleccionado ? 'Editar Premio' : 'Nuevo Premio'}</h2>
      <form onSubmit={handleSubmit}>
        <label>Descripción:</label>
        <input
          type="text"
          name="descripcion"
          value={formData.descripcion}
          onChange={handleInputChange}
          required
        />

        <label>Créditos:</label>
        <input
          type="number"
          name="creditos"
          value={formData.creditos}
          onChange={handleInputChange}
          required
        />

        <label>Imagen:</label>
        <input type="file" name="imagen" onChange={handleFileChange} />

        <button type="submit">
          {premioSeleccionado ? 'Actualizar Premio' : 'Crear Premio'}
        </button>
        {premioSeleccionado && (
          <button type="button" onClick={resetForm}>
            Cancelar
          </button>
        )}
      </form>
    </div>
  )
}
