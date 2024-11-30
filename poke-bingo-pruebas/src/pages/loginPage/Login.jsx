
import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { ImagenLogin } from '../../components/varios/ImagenLogin';
import '../loginPage/login.css';
import ojoAbierto from '../../assets/eye.png';
import ojoCerrado from '../../assets/noeye.png';
import {baseUrl} from '../../core/constant/constantes.ts';
import CustomAlert from '../../components/varios/CustomAlert/CustomAlert';



export const Login = () => {

  const [data, setData] = useState({});
  const [error, setError] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const handleShowAlert = () => setShowAlert(true);
  const handleCloseAlert = () => setShowAlert(false);

  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [ver, setVer] = useState(true)

  const navigate = useNavigate();

  const handleUser = (e)=>{    
    setUser(e.target.value)
    console.log(user)
  }

  const handlePass = (e)=>{
    setPass(e.target.value)
    console.log(pass)
  }

  const focusUser = ()=>{
    setError('')
  }



  const handleSubmit = async (e)=>{
    e.preventDefault()
    try {
      const response = await fetch(`${baseUrl}/logueo/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: user,
          password: pass,// Enviar el valor de administrador
        }),
      });
       console.log(user)
       console.log(pass)
       console.log(response.statusText)
      if (response.ok) {
        const resp = await response.json()
        setData(resp)
        console.log(`Esto es resp ${resp}`);

        
        localStorage.setItem('user',resp.email) 
        localStorage.setItem('idUser', resp.id)
        localStorage.setItem('token', resp.access_token)
        localStorage.setItem('admin', resp.admin)
        localStorage.setItem('idLogin', resp.idLogin)
        localStorage.setItem('userName', resp.userName)
        localStorage.setItem('avatar', resp.avatar)
        
        window.dispatchEvent(new Event('storage'));
        navigate('/')    
       
        
      } else {
        
        setError('El usuario o la contraseña son inválidas')        
        const errorData = await response.json();
          console.log(errorData.error)
          
          
      }
    } catch (error) {
      
      setError(error.message); // Almacenar el mensaje de error
      handleShowAlert();      
      console.log(error)
        //navigate('/error', { state: { message: error.message } });      
    }
  };

  const changeVer = ()=>{
    setVer(!ver)
  }

  

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
          <Col sm="10" style={{marginRight:'2em'}} onChange={(e)=>handleUser(e)} onFocus={focusUser}>
          <div style={{display:'flex', gap:'10px'}}>
          <Form.Control type="email" placeholder="Email" />
          <img style={{width:'32px', cursor:'pointer'}} src='' />
          </div>
            
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
            <div style={{display:'flex', gap:'10px'}}>
              <Form.Control type={ver? "password" : "text"} placeholder="Password"  ></Form.Control>
              <img onClick={changeVer}style={{width:'32px', cursor:'pointer'}}src={ver? ojoAbierto : ojoCerrado} />
            </div>
            
            
          </Col>
        </Form.Group>
      </Form.Group>
      <p style={{color:'#FFFAB3'}}>{error}</p>
      {/*<NavLink as={NavLink} to={'./'}><Button variant="success" style={{backgroundColor:'#5BB117', marginTop:'1em', marginBottom:'1em'}} type='submit'>Iniciar Sesión</Button>{' '}</NavLink>*/}
      <Button variant="success" style={{backgroundColor:'#5BB117', marginTop:'1em', marginBottom:'1em'}} type='submit'>Iniciar Sesión</Button>{' '}      
      <p style={{color:'#FFFAB3'}}>No tienes una cuenta? <span style={{fontStyle:'italic', textDecoration:'underline', fontWeight:'bold', cursor:'pointer'}}><Link style={{color:'#FFFAB3'}} to='/Registro'>Registrate aquí!!</Link></span></p>
    </Form>
    {error && (
      <CustomAlert
      show={showAlert}
      variant="danger"
      message={error}
      showAcceptButton = {false}      
      onClose={handleCloseAlert}
      titulo="Ups!! Ha ocurrido un problema con su petición"/>
    )}    

    </div>
    
  )
};