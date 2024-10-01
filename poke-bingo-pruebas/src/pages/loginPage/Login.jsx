
import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import pokeJson from '../../assets/pokemon.json'
import { ImagenLogin } from '../../components/varios/ImagenLogin';
import '../loginPage/login.css'



export const Login = () => {

  const [data, setData] = useState({});

  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const navigate = useNavigate();

  const handleUser = (e)=>{
    setUser(e.target.value)
    console.log(user)
  }

  const handlePass = (e)=>{
    setPass(e.target.value)
    console.log(pass)
  }



  const handleSubmit = async (e)=>{
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:3000/logueo/login/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: user,
          password: pass,// Enviar el valor de administrador
        }),
      });
       console.log(user)
       console.log(pass)
      if (response.ok) {
        const resp = await response.json()
        setData(resp)
        console.log(`Esto es resp ${resp.idUsuario}`);

        //localStorage.setItem('user', JSON.stringify(dataLocalStorage));
        localStorage.setItem('user',user)
        localStorage.setItem('idUser', resp.idUsuario)
        localStorage.setItem('idLogin', resp.id)
        window.dispatchEvent(new Event('storage'));
        navigate('/')    
       
        
      } else {
        const errorData = await response.json();
        console.log("Error al registrar usuario:", errorData);
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  

  return (
    <div className='form-container'>
      <Form className='form-login' style={{display:'flex', flexDirection:'column', alignItems:'center',marginTop:'100px',height:'75vh', minWidth:'400px',maxWidth:'780px',borderRadius:'20px', backgroundColor:'#B11A17'}} onSubmit={handleSubmit}>
      {/*<h2 style={{paddingTop:'1em', color:'#FFFAB3'}}></h2>*/}
      <ImagenLogin/>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail" style={{paddingTop:'2em',display:'flex', width:'100%'}}>
        <Form.Group style={{display:'flex', justifyContent:'start', width:'10%', marginLeft:'1em'}}>
          <Form.Label column sm="2" style={{color:'#FFFAB3',marginRight:'5px'}} >
            Email
          </Form.Label>
        </Form.Group>
        <Form.Group style={{display:'flex', justifyContent:'end', width:'85%'}}>
          <Col sm="10" style={{marginRight:'2em'}} onChange={(e)=>handleUser(e)}>
            <Form.Control type="email" placeholder="Email" />
          </Col>
        </Form.Group>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail" style={{paddingTop:'1em',display:'flex', width:'100%'}}>
        <Form.Group style={{display:'flex', justifyContent:'start', width:'10%', marginLeft:'1em'}}>
          <Form.Label column sm="2" style={{color:'#FFFAB3',marginRight:'5px'}} >
            Password
          </Form.Label>
        </Form.Group>
        <Form.Group style={{display:'flex', justifyContent:'end', width:'85%'}}>
          <Col sm="10" style={{marginRight:'2em'}} onChange={(e)=>handlePass(e)}>
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>
      </Form.Group>
      {/*<NavLink as={NavLink} to={'./'}><Button variant="success" style={{backgroundColor:'#5BB117', marginTop:'1em', marginBottom:'1em'}} type='submit'>Iniciar Sesión</Button>{' '}</NavLink>*/}
      <Button variant="success" style={{backgroundColor:'#5BB117', marginTop:'1em', marginBottom:'1em'}} type='submit'>Iniciar Sesión</Button>{' '}      
      <p style={{color:'#FFFAB3'}}>No tienes una cuenta? <span style={{fontStyle:'italic', textDecoration:'underline', fontWeight:'bold', cursor:'pointer'}}><Link style={{color:'#FFFAB3'}} to='/Nosotros'>Registrate aquí!!</Link></span></p>
    </Form>

    </div>
    
  )
};