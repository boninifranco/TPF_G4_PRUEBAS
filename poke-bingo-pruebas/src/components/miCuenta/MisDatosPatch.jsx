import { Button, Form } from "react-bootstrap";
import React, { useEffect, useState } from 'react';
import './misDatos.css';

export const MisDatosPatch = ({ onGuardado }) => {
  const [user, setUser] = useState({
    nombre: '',
    apellido: '',
    dni: '',
    celular: '',
    direccion: ''
  });

  const [registro, setRegistro] = useState({
    email: '',
    contrasenia: ''
  });

  

  useEffect(() => {
    const idUser = localStorage.getItem('idUser');

    if (idUser) {
      const fetchUser = async () => {
        try {
          const response = await fetch(`http://localhost:3000/usuario/${idUser}`);
          const data = await response.json();
          setUser(data);
        } catch (error) {
          console.error('Error al obtener los datos del usuario:', error);
        }
      };
      fetchUser();

      const fetchRegister = async () => {
        try {
          const response = await fetch(`http://localhost:3000/registro/${idUser}`)
          const data = await response.json();
          setRegistro(data);
        } catch (error) {
          console.error('Error al obtener los datos del registro:', error);
        }
      };
      fetchRegister();
    }
  }, []);

const handleChange = (e) => {
  const { name, value } = e.target;
  if (name === 'email' || name === 'contrasenia') {
    setRegistro((prevRegistro) => ({
      ...prevRegistro,
      [name]: value,
    }));
  } else {
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  }
};

const handleSubmit = async (e) => {
  e.preventDefault();

  const idUser = localStorage.getItem('idUser');

  const { id, ...userData } = user;

  const { email, contrasenia } = registro;

  console.log('Datos de usuario a enviar:', userData);
  console.log('Datos de registro a enviar:', { email, contrasenia });
  try {
    await fetch(`http://localhost:3000/usuario/${idUser}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    await fetch(`http://localhost:3000/registro/${idUser}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, contrasenia }),
    });


    onGuardado();
  } catch (error) {
    console.error('Error al guardar los cambios:', error);
  }
};


return (
  <div className='data_style'>
    <h2>Modificar datos</h2>
    <Form className="info_style" onSubmit={handleSubmit}>
      <div className="registro_style">

        <Form.Group className="form_group">
          <p className="pform_style">Email:</p>
          <Form.Control
            type="email"
            name="email"
            value={registro.email}
            onChange={handleChange}
            className="form_input_style1"
          />
        </Form.Group>
        <Form.Group className="form_group">
          <p className="pform_style">Contraseña:</p>
          <Form.Control
            type="password"
            name="contrasenia"
            value={registro.contrasenia}
            onChange={handleChange}
            className="form_input_style1"
          />
        </Form.Group>
      </div>

      <div className="form_nombres">
        <Form.Group className="form_group">
          <p className="pform_style">Nombre:</p>
          <Form.Control
            type="text"
            name="nombre"
            value={user.nombre}
            onChange={handleChange}
            className="form_input_style1"
          />
        </Form.Group>

        <Form.Group className="form_group">
          <p className="pform_style">Apellido:</p>
          <Form.Control
            type="text"
            name="apellido"
            value={user.apellido}
            onChange={handleChange}
            className="form_input_style1"
          />
        </Form.Group>
      </div>
      <div className="form_info">
        <Form.Group className="form_group">
          <p className="pform_style">DNI:</p>
          <Form.Control
            type="text"
            name="dni"
            value={user.dni}
            onChange={handleChange}
            className="form_input_style2"
          />
        </Form.Group>

        <Form.Group className="form_group">
          <p className="pform_style">Celular:</p>
          <Form.Control
            type="text"
            name="celular"
            value={user.celular}
            onChange={handleChange}
            className="form_input_style2"
          />
        </Form.Group>

        <Form.Group className="form_group">
          <p className="pform_style">Dirección:</p>
          <Form.Control
            type="text"
            name="direccion"
            value={user.direccion}
            onChange={handleChange}
            className="form_input_style2"
          />
        </Form.Group>
      </div>
      <div className="btn_div">
        <Button className="button_reg" type="submit" onMouseUp={(e) => e.currentTarget.blur()}>
          Guardar
        </Button>
      </div>
    </Form>
  </div>
);
};