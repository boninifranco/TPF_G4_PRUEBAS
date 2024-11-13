import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';

export const UploadImage = () => {

    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileChange = (event) => {
        setSelectedFiles(Array.from(event.target.files));
      };
    
      const handleFileClick = () => {
        document.getElementById("fileInput").click();
      };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Aquí podrías realizar acciones con los archivos seleccionados
      console.log('Archivos seleccionados:', selectedFiles);
    };
  
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formFileMultiple" className="mb-3">
          <Form.Label>Selecciona varios archivos</Form.Label>
          {/* Botón personalizado para seleccionar archivos */}
        <Button variant="primary" onClick={handleFileClick}>
          Seleccionar archivos
        </Button>

        {/* Input de archivo oculto */}
        <Form.Control
          id="fileInput"
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />

        {/* Muestra las miniaturas de las imágenes seleccionadas */}
        <div className="mt-3 d-flex flex-wrap gap-2">
          {selectedFiles.length > 0 && 
            selectedFiles.map((file, index) => {
              const imageUrl = URL.createObjectURL(file);
              return (
                <div key={index} style={{ width: '100px', height: '100px', overflow: 'hidden' }}>
                  <img
                    src={imageUrl}
                    alt={`selected-${index}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
                  />
                </div>
              );
            })
          }
        </div>
        </Form.Group>
        <Button variant="primary" type="submit">
          Subir archivos
        </Button>
      </Form>
    );
}
