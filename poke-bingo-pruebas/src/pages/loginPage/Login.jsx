
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
  const [envioEmail, setEnvioEmail] = useState(false);
  const [messageEmail, setMessageEmail] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [ver, setVer] = useState(true);
  const [datosRecuperar, setDatosRecuperar]= useState('')

  const navigate = useNavigate();

  const handleShowAlert = () => setShowAlert(true);
  const handleCloseAlert = () => {
    setShowAlert(false)
    setEnvioEmail(false)
    setMessageEmail('')};

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

  const olvidePass = async ()=>{
    if(!user){
      alert('indique un email')
    }else{
      const response = await fetch(`${baseUrl}/logueo/buscar/`,{
        method:'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: user,          
        }),
      })
      if (response.ok) {
        const resp = await response.json()
        console.log(resp.email)
        setDatosRecuperar(resp)
        enviarCorreo()
        
      }
    }
  }
  console.log(datosRecuperar)
  function generarContrasenia() {
    // Generar la primera letra en mayúscula
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const primeraLetra = letras[Math.floor(Math.random() * letras.length)];
  
    // Generar las siguientes 5 letras en minúscula
    const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
    const otrasLetras = Array.from({ length: 5 }, () =>
      letrasMinusculas[Math.floor(Math.random() * letrasMinusculas.length)]
    ).join('');
  
    // Generar 4 números
    const numeros = '0123456789';
    const numerosAleatorios = Array.from({ length: 4 }, () =>
      numeros[Math.floor(Math.random() * numeros.length)]
    ).join('');
  
    // Combinar y devolver la contraseña
    return primeraLetra + otrasLetras + numerosAleatorios;
  }

  const recuperarContrasenia = async (contrasenia)=>{
    const response = await fetch(`${baseUrl}/registro/recuperar-contrasenia/${datosRecuperar.id}`,{
      method:'PATCH',
      headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          newPassword: contrasenia
        }),
    });
    const data = response.json();

  }
  const enviarCorreo = async () => {
    const contrasenia = generarContrasenia();
    try {
      const response = await fetch(`${baseUrl}/correo/enviar`,{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          destinatario: datosRecuperar.email,
          asunto: 'Recuperación de Contraseña - PokeBingo',
          mensaje: `Hola ${datosRecuperar.userName}, su nueva contraseña es: ${contrasenia}.
          Sugerimos cambiarla luego del primer ingreso `,
        }),
      });
  
      const data = await response.json();
      if (data.success) {
        setShowAlert(true);
        setEnvioEmail(true);
        setMessageEmail('Hemos enviado una nueva contraseña a su email')
        recuperarContrasenia(contrasenia)
      } else {
        setShowAlert(true);
        setEnvioEmail(true);
        setMessageEmail('No se pudo enviar el correo, intente nuevamente')
      }
    } catch (error) {
      console.error('Error al enviar correo:', error);
    }
  };

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
      <p style={{color:'#FFFAB3', cursor:'pointer'}} onClick={()=>olvidePass()}>Olvide mi contraseña (indique su email de autenticación)</p>
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

    {envioEmail && ( <CustomAlert
    show={showAlert}
    variant="danger"
    message={messageEmail}
    showAcceptButton = {false}      
    onClose={handleCloseAlert}
    titulo="Recuperación de contraseña"
    />)}    

    </div>
    
  )
};