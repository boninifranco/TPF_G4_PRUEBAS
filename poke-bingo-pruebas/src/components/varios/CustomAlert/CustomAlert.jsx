import { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import './customAlert.css'; // Puedes agregar estilos personalizados aquí

function CustomAlert({ show, variant, message, onClose, titulo }) {
  
  if (!show) return null;

  return (
    <div className="alert-overlay">
      <div className="alert-centered">
        <Alert variant={variant} className="custom-alert" onClose={onClose} >
          <Alert.Heading >          
            <div style={{display:'flex', justifyContent:'center'}}>
            {titulo}
            </div>            
            </Alert.Heading>
          <p style={{textAlign:'center'}}>{message}</p>
          <div className="d-flex justify-content-end">
            <Button onClick={onClose} className="custom-close-btn">
              Cerrar
            </Button>
          </div>
        </Alert>
      </div>
    </div>
  );
}

export default CustomAlert;
