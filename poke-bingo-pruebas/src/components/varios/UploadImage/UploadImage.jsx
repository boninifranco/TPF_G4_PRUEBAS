import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import {baseUrl} from '../../../core/constant/constantes.ts';

export const UploadImage = () => {

    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileChange = (event) => {
        setSelectedFiles(Array.from(event.target.files));
      };
    
      const handleFileClick = () => {
        document.getElementById("fileInput").click();
      };

    // Elimina una imagen seleccionada
  const handleRemoveImage = (index) => {
    setSelectedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };
  
    
  const handleSubmit = async (event) => {
    event.preventDefault();

    const uploadPreset = 'poke-bingo'; // Reemplaza con tu upload_preset de Cloudinary
    const cloudName = 'pokebingo'; // Reemplaza con tu cloud_name de Cloudinary

    for (const file of selectedFiles) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", uploadPreset);

      try {
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          {
            method: 'POST',
            body: formData
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log('Imagen subida:', data.secure_url);
          const imageUrl = data.secure_url
          const saveResponse = await fetch(`${baseUrl}/imagenes/premios/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              secureUrl: imageUrl,
              
            }),
          });
          const savedData = await saveResponse.json();
            console.log('Imagen guardada en la tabla:', savedData);
        } else {
          console.error('Error al subir la imagen:', response.statusText);
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    }

    // Limpia las imágenes seleccionadas después de la carga
    setSelectedFiles([]);
  };



  
    return (
        <Form onSubmit={handleSubmit}>
            <h4>Gestión de imágenes para premios</h4>
          <Form.Group controlId="formFileMultiple" className="mb-3" style={{display:'flex', gap:'50px'}}>           
            
            <div style={{display:'flex', flexDirection:'column', gap:'20px', alignItems:'center', justifyContent:'center'}}>
                <Button variant="success" onClick={handleFileClick} style={{width:'150px'}}>
                Seleccionar
                </Button>
                <Button variant="success" type="submit" disabled={selectedFiles.length === 0} style={{width:'150px'}}>
                Subir
                </Button>
            </div>
            
    
            <div>

            <Form.Control
              id="fileInput"
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
    
            {/* Muestra las miniaturas de las imágenes seleccionadas con botón de eliminación */}
            <div className="mt-3 d-flex flex-wrap gap-2" >
              {selectedFiles.length > 0 && 
                selectedFiles.map((file, index) => {
                  const imageUrl = URL.createObjectURL(file);
                  return (
                    <div
                      key={index}
                      style={{
                        position: 'relative',
                        width: '100px',
                        height: '100px',
                        overflow: 'hidden',
                        border:'solid 1pt',
                        padding:'10px',
                        borderRadius:'5px'
                      }}
                    >
                      <img
                        src={imageUrl}
                        alt={`selected-${index}`}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          borderRadius: '8px'
                        }}
                      />
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleRemoveImage(index)}
                        style={{
                          position: 'absolute',
                          top: '5px',
                          right: '5px',
                          borderRadius: '50%',
                          padding: '2px 5px',
                          fontSize: '0.8rem'
                        }}
                      >
                        ×
                      </Button>
                    </div>
                  );
                })
              }
            </div>
                
            </div>
            
          </Form.Group>
    
          
        </Form>
      );
}
