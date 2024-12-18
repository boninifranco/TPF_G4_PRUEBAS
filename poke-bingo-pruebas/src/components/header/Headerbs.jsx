import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Pokebingo from '../../assets/PokeBingo.png'
import "../header/header.css"
import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CustomAlert from '../varios/CustomAlert/CustomAlert';
import {baseUrl} from '../../core/constant/constantes.ts';

export const Headerbs = () => {

  
  const [usuario, setUsuario] = useState(localStorage.getItem('userName') || '');
  const [isAdmin, setIsAdmin] = useState(null);
  const [showAlert, setShowAlert] = useState(false);  
  const handleShowAlert = () => setShowAlert(true);
  const handleCloseAlert = () => setShowAlert(false);
  

  const handleNavClick = () => {   
      if(isAdmin!=null)return;      
      handleShowAlert();
  };

  // Función para actualizar el usuario del localStorage
  const actualizarUsuario = () => {
    const nuevoUsuario = localStorage.getItem('userName') || '';
    setUsuario(nuevoUsuario); // Actualiza el estado si el valor ha cambiado
  };
  

 // Escuchar cambios del localStorage
 useEffect(() => {
  window.addEventListener('storage', actualizarUsuario);
  
  // Cleanup al desmontar
  return () => {
    window.removeEventListener('storage', actualizarUsuario);
  };
}, []);

// useEffect para verificar el estado del admin al montar el componente
useEffect(() => {
  // Revisar si el usuario está logueado y si es admin
  const adminStatus = localStorage.getItem('admin');
  
  if (adminStatus === 'true') {
    setIsAdmin(true); // Si es admin, actualizar el estado
  } else if (adminStatus === 'false') {
    setIsAdmin(false); // Si no es admin, actualizar el estado
  } else {
    setIsAdmin(null); // Si no hay estado o no está logueado, asignar null
  }
}, []);

// useEffect para monitorear cambios en el localStorage (cuando el usuario se loguea)
useEffect(() => {
  const handleStorageChange = () => {
    const adminStatus = localStorage.getItem('admin');
    if (adminStatus === 'true') {
      setIsAdmin(true);
    } else if (adminStatus === 'false') {
      setIsAdmin(false);
    } else {
      setIsAdmin(null);
    }  
  };

  // Escuchar cambios en el localStorage
  window.addEventListener('storage', handleStorageChange);

  return () => {
    // Limpiar el evento al desmontar el componente
    window.removeEventListener('storage', handleStorageChange);
  };
}, []);

const handleLogout = async() => {
  try {
    const id = localStorage.getItem('idLogin')
    
    const logout = new Date();
    const response = await fetch(`${baseUrl}/logueo/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json', // Especificamos que el body es JSON
      },
      body: JSON.stringify({
        logout: logout,
        logueado: false,
          // Aquí mandas el dato que quieres actualizar
      }),
    });
    const data = await response.json();
  } catch (error) {
    console.error('Error al hacer la solicitud:', error);
  }
  localStorage.clear();
  window.dispatchEvent(new Event('storage')); // Dispara el evento de storage manualmente
};


  
  return (
    <Navbar expand="sm" className="bg-body-tertiary" >
        
      <Container fluid className='parentHeader fixed-top'>
        <Navbar.Brand as={NavLink} to={'/'} ><img className='logoHeader'src={Pokebingo} alt="Imagen" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-justify mx-auto" >
            
            <Nav.Item>
            <Nav.Link className="tamanioHeader separarInicio" as={NavLink} to={'/Nosotros'}>Nosotros</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link className="tamanioHeader separarInicio" as={NavLink} onClick={handleNavClick} to={isAdmin===true ? '/SalaDeJuegos' : isAdmin===false ? '/SalaJuegoUser' : '/Login'}>Sala de Juegos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link className="tamanioHeader separarInicio"  as={NavLink}  onClick={handleNavClick} to={isAdmin===true ? '/ABMPage' : isAdmin===false ? '/MiCuenta':'/Login'}>{isAdmin ? 'Administración' : 'Mi Cuenta'}</Nav.Link>            
            </Nav.Item>
            <Nav.Item>
            {usuario ? (
        <div style={{color:'#FFFAB3'}} onClick={handleLogout}>Bienvenido, {usuario}! <span><div><NavLink className="tamanioHeader cerrarSesion"  as={NavLink} to={'/'}>Cerrar Sesión</NavLink>{' '}</div></span></div>
        
        
      ) : (
        <Nav.Link className="tamanioHeader separarInicio" as={NavLink} to={'/Login'}>Ingresar</Nav.Link>
      )}
            </Nav.Item>
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CustomAlert
      show={showAlert}
      variant="primary"
      message="Debe loguearse para ingresar"
      showAcceptButton = {false}      
      onClose={handleCloseAlert}
      titulo="Atención!!"/>
    </Navbar>
  );
}

