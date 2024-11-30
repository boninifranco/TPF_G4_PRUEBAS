import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Modal } from 'react-bootstrap';
import { UploadImage } from '../varios/UploadImage/UploadImage';
import { ListaPremios } from '../varios/CarruselPremios/ListaPremios';
import poke from '../../assets/altPoke.png'
import {baseUrl} from '../../core/constant/constantes.ts';
import CustomAlert from '../varios/CustomAlert/CustomAlert.jsx';

export const AbmPremio = ()=> {
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
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();
  
   // Manejar el premio seleccionado desde AbmPremios
   const handleSelectPremio = (premio) => {
    // Crear una copia independiente para editar sin mutar la lista original
    setSelectedPremio({ ...premio });
    setDescription(premio.descripcion)
    setCredits(premio.creditos)
    setStock(premio.stock)
    setSelectedImage(premio.imagen)
  };
  
  const handleShowAlert = () => setShowAlert(true);
    const handleCloseAlert = () => setShowAlert(false);
    const handleAccept = () => {
      removePremio()
    };  

 
  const fetchImages = async () => {
    try {
      const response = await fetch(`${baseUrl}/imagenes/premios`);

      if (response.ok) {
        const data = await response.json();
        setImages(data.map((image) => image.secureUrl));
      } else {
        console.error('Error al obtener las imágenes:', response.statusText);
        const errorData = await response.json();
        throw new Error(errorData.message || 'Ocurrió un error inesperado');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      navigate('/error', { state: { errorMessage: error.message } });
    }
  };

  useEffect(() => {
    fetchImages();
    
  }, []);

  // Maneja el envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const saveResponse = await fetch(!selectedPremio ?
        `${baseUrl}/premios/` : 
        `${baseUrl}/premios/${selectedPremio.id}`, {
       method: !selectedPremio ? 'POST': 'PATCH',
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
     console.log(saveResponse)
    if(!saveResponse.ok) {
      const errorData = await saveResponse.json();
      throw new Error(errorData.message || 'Ocurrió un error inesperado');
     }

      const result = await saveResponse.json();
      console.log('Datos actualizados:', result)
     // Limpia los campos del formulario después de enviar
      setDescription('');
      setCredits('');
      setStock('')
      setSelectedImage(null);
      setSelectedPremio();
      setReload(!reload)
    
    } catch (error) {
      console.error('Error en la solicitud:', error);
      navigate('/error', { state: { errorMessage: error.message } });
      
    }
    
  };
  const removeImage = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    
    const fetchPremios = async () => {
      try {
        const response = await fetch(`${baseUrl}/premios`);
        if(!response.ok){
          const errorData = await response.json();
          throw new Error(errorData.message || 'Ocurrió un error inesperado');
        }
        const data = await response.json();
        setPremios(data); 
        setLoading(false);
      } catch (error) {        
        setLoading(false);
        console.error('Error en la solicitud:', error);
        navigate('/error', { state: { errorMessage: error.message } });
      }
    };
    fetchPremios();
  }, [reload]); 

  const removePremio = async ()=>{
    if (!selectedPremio.id) return;
    try {
      await fetch(`${baseUrl}/premios/${selectedPremio.id}`,{
        method: 'DELETE'
      })
      // Eliminar el premio localmente
      setPremios((prev) => prev.filter((p) => p.id !== selectedPremio.id));
      setSelectedPremio({
        descripcion: '',
        imagen: '',
        creditos: 0,
        stock: 0,
      });
      setDescription('');
    setCredits('');
    setStock('')
    setSelectedImage(null);
    setSelectedPremio();
    setReload(!reload)
    setShowAlert(false)
    } catch (error) {
      console.log(error)      
    }
    

  }

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
                value={description}
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
                value={credits}
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
                value={stock}
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
                <img src={selectedImage} alt={poke} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
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
            <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
              <Button variant="success" type="submit" >
                {selectedPremio ? 'Editar': 'Agregar'}
              </Button>
              <Button variant="danger" onClick={handleShowAlert} >
                Eliminar
              </Button>
            </div>
              
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
        <ListaPremios reload={reload} premios={premios} onSelectPremio={handleSelectPremio} onRemovePremio={removePremio}/>
        </div>
      </div>
      <CustomAlert
            show={showAlert}
            variant="danger"
            message='Esta seguro que desea eliminar?'
            showAcceptButton = {true}      
            onClose={handleCloseAlert}
            onAccept={handleAccept}
            titulo="Eliminar Premio"
        />
      
    </div>
    
  );
}

;
