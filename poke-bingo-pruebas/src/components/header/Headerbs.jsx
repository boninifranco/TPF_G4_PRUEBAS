import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Pokebingo from '../../assets/PokeBingo.png'
import "../header/header.css"
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

export const Headerbs = () => {

  const [usuario, setUsuario] = useState(localStorage.getItem('user') || '');

  // Función para actualizar el usuario del localStorage
  const actualizarUsuario = () => {
    const nuevoUsuario = localStorage.getItem('user') || '';
    setUsuario(nuevoUsuario); // Actualiza el estado si el valor ha cambiado
  };
  //if(usuario){
    //const dataUser =JSON.parse(usuario)
    //console.log(dataUser)
    //setUsuario(dataUser)
    //console.log(usuario)
  //}

 // Escuchar cambios del localStorage
 useEffect(() => {
  window.addEventListener('storage', actualizarUsuario);
  
  // Cleanup al desmontar
  return () => {
    window.removeEventListener('storage', actualizarUsuario);
  };
}, []);

//const handleLogout = () => {
  //localStorage.removeItem('user');
  //window.dispatchEvent(new Event('storage')); // Dispara el evento de storage manualmente
//};

const handleLogout = async() => {
  try {
    const id = localStorage.getItem('idLogin')
    
    const logout = new Date();
    const response = await fetch(`http://localhost:3000/logueo/${id}`, {
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
    console.log(data);
  } catch (error) {
    console.error('Error al hacer la solicitud:', error);
  }
  localStorage.clear();
  window.dispatchEvent(new Event('storage')); // Dispara el evento de storage manualmente
};


  
  return (
    <Navbar expand="sm" className="bg-body-tertiary" >
        
      <Container fluid className='parentHeader fixed-top'>
        <Navbar.Brand as={NavLink} to={'/'}><img className='logoHeader'src={Pokebingo} alt="Imagen" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-justify mx-auto" >
            <Nav.Item>
            <Nav.Link className="tamanioHeader separarInicio" as={NavLink} to={'/Nosotros'}>Nosotros</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link className="tamanioHeader separarInicio" as={NavLink} to={'/SalaDeJuegos'}>Sala de Juegos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link className="tamanioHeader separarInicio" as={NavLink} to={'/MiCuenta'} >Mi Cuenta</Nav.Link>            
            </Nav.Item>
            <Nav.Item>
            {usuario ? (
        <div style={{color:'#FFFAB3'}} onClick={handleLogout}>Bienvenido, {usuario}! <span><div><NavLink className="tamanioHeader separarInicio"  as={NavLink} to={'/'}>Cerrar Sesión</NavLink>{' '}</div></span></div>
        
        
      ) : (
        <Nav.Link className="tamanioHeader separarInicio" as={NavLink} to={'/Login'}>Ingresar</Nav.Link>
      )}
            </Nav.Item>
            <Nav.Item>

            </Nav.Item>
            {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>*/}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

