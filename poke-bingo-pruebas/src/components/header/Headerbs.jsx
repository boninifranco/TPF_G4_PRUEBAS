import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Pokebingo from '../../assets/PokeBingo.png'
import "../header/header.css"

export const Headerbs = () => {
  return (
    <Navbar expand="sm" className="bg-body-tertiary" >
        
      <Container fluid className='parentHeader'>
        <Navbar.Brand href="#home"><img className='logoHeader'src={Pokebingo} alt="Imagen" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-justify mx-auto">
            <Nav.Item>
            <Nav.Link className="tamanioHeader separarInicio" href="#Nosotros">Nosotros</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link className="tamanioHeader separarInicio" href="#SalaDeJuegos">Sala de Juegos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link className="tamanioHeader separarInicio" href="#MiCuent">Mi Cuenta</Nav.Link>
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

