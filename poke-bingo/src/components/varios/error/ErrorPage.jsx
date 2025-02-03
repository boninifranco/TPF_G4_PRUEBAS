import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../error/errorPage.css'

export const ErrorPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { errorMessage } = location.state || { errorMessage: 'Error desconocido' };

  return (
    <div className='contiene-error-page'>
      <div className="error-page">
      <h1>Algo salió mal</h1>
      <p>{errorMessage}</p>
      <button onClick={() => navigate('/')}>Volver al inicio</button>
    </div>

    </div>
    
  );
};


