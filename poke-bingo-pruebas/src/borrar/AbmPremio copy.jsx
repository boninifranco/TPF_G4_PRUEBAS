import React, { useState, useEffect } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { UploadImage } from '../varios/UploadImage/UploadImage';
import { ListaPremios } from '../varios/CarruselPremios/ListaPremios';

export const AbmPremio = ({ onSubmit })=> {
  const [description, setDescription] = useState('');
  const [credits, setCredits] = useState('');
  const [stock, setStock] = useState('');
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [reload, setReload] = useState(false);
  const [premios, setPremios] = useState([]);
  const [selectedPremio, setSelectedPremio] = useState(null);
  const [loading, setLoading] = useState(true);
  
   // Manejar el premio seleccionado desde AbmPremios
   const handleSelectPremio = (premio) => {
    // Crear una copia independiente para editar sin mutar la lista original
    setSelectedPremio({ ...premio });
  };

  // Actualizar los datos del premio seleccionado al editar el formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedPremio((prev) => ({
      ...prev,
      [name]: value, // Actualiza el campo que se está editando
    }));
  };

 
  const fetchImages = async () => {
    

    try {
      const response = await fetch(`http://localhost:3000/imagenes/premios`);

      if (response.ok) {
        const data = await response.json();
        setImages(data.map((image) => image.secureUrl));
      } else {
        console.error('Error al obtener las imágenes:', response.statusText);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  // Maneja el envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault();

    const saveResponse = await fetch('http://localhost:3000/premios/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        descripcion:description,
        creditos:credits,
        imagen: selectedImage,
        stock: stock
        
      }),
    });
    const savedData = await saveResponse.json();
      console.log('Imagen guardada en la tabla:', savedData);

    // Limpia los campos del formulario después de enviar
    setDescription('');
    setCredits('');
    setStock('')
    setSelectedImage(null);
    setReload(!reload)
  };
  const removeImage = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    
    const fetchPremios = async () => {
      try {
        const response = await fetch('http://localhost:3000/premios'); 
        const data = await response.json();
        setPremios(data); 
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener los premios:', error);
        setLoading(false);
      }
    };

    fetchPremios();
  }, [reload]);
  
  const handleUpdatePremio = async () => {
    if (!selectedPremio) return;

    try {
      await fetch(`http://localhost/premios/${selectedPremio.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(selectedPremio),
      });

      setPremios((prev) =>
        prev.map((p) =>
          p.id === selectedPremio.id ? { ...p, ...selectedPremio } : p
        )
      );
      alert('Premio actualizado correctamente');
    } catch (error) {
      console.error('Error al actualizar el premio:', error);
      alert('Error al actualizar el premio');
    }
  };

  return (
    <div>
      <UploadImage/>
      
      <div style={{display:'flex', gap:'50px'}}>
        <div style={{width:'25%'}}>
            <Form onSubmit={handleSubmit} >
              <h4>Gestión de Premios</h4>
            <div style={{display:'flex', marginBottom:'10px'}}>
              <Form.Group controlId="description">        
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                type="text"
                //placeholder="Descripción"
                value={selectedPremio ? selectedPremio.descripcion : description}
                onChange={(e) => setDescription(e.target.value)}
                required
                style={{width:'200px'}}
              />
            </Form.Group>

            <Form.Group controlId="credits">
              <Form.Label>Créditos</Form.Label>
              <Form.Control
                type="number"
                //placeholder="Créditos"
                value={selectedPremio ? selectedPremio.creditos : credits}
                onChange={(e) => setCredits(e.target.value)}
                required
                style={{width:'80px'}}
              />
            </Form.Group>

            <Form.Group controlId="stock">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type="number"
                //placeholder="Stock"
                value={selectedPremio ? selectedPremio.stock : stock}
                onChange={(e) => setStock(e.target.value)}
                required
                style={{width:'80px'}}
              />
            </Form.Group>
              
            </div>
          

          <Form.Group controlId="image">
            {/*<Form.Label>Imagen</Form.Label>*/}
            <div style={{display:'flex', justifyContent:'space-around', alignItems:'center'}}>
            <Button variant="success" onClick={() => setShowModal(true)}>
              Imagen
            </Button>

            {selectedImage ? (
              <div className="mt-2">
                <img src={selectedImage} alt="Imagen seleccionada" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                <Button 
                variant="danger" 
                onClick={removeImage} 
                style={{ 
                  position: 'absolute',
                  //top: '15px',
                  //right: '15px',
                  borderRadius: '50%',
                  padding: '2px 5px',
                  fontSize: '0.8rem'}}
              >
                ×
              </Button>
              </div>          
            ) : 
            (
              selectedPremio && <div className="mt-2">
                <img src={selectedPremio.imagen} alt="" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                
              </div>)
            }
              <Button variant="success" type="submit" >
                {selectedPremio ? 'Editar': 'Agregar'}
              </Button>
        </div>        
      </Form.Group>

      

      {/* Modal para seleccionar la imagen */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Selecciona una imagen</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-wrap gap-2">
            {images.map((url, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelectedImage(url);
                  setShowModal(false);
                }}
                style={{ cursor: 'pointer', width: '100px', height: '100px', overflow: 'hidden' }}
              >
                <img src={url} alt={`cloudinary-${index}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </Modal.Body>
      </Modal>
    </Form>
        </div>
        <div>
        <ListaPremios reload={reload} premios={premios} onSelectPremio={handleSelectPremio}/>
        </div>
      </div>      
      
    </div>
    
  );
}

;
