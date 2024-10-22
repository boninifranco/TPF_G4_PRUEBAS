import { Button, Form } from "react-bootstrap";
import React, { useEffect, useState } from 'react';
import './misDatos.css';

export const MisDatosPatch = ({ onGuardado, hideEmailAndPassword }) => {
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

  const [error, setError] = useState("");

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

    if (!user.nombre || !user.apellido || !user.dni || !user.celular || !user.direccion) {
      setError("Existen campos sin completar");
      return;
    }
    setError("");

    const idUser = localStorage.getItem('idUser');

    const { id, ...userData } = user;

    const { email, contrasenia } = registro;

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
    <Form className="flex_container" onSubmit={handleSubmit}>
    {error && (
      <div className="alert alert-warning p-1 mt-1 alrt_dark">
        {error}
      </div>
    )}
      {!hideEmailAndPassword && (<div>
        <h1>Modificar datos</h1>
      </div>
      )}
      {!hideEmailAndPassword && (<div className="registro_style">
        <Form.Group className="divcont">
          <p className="pform_style">Email</p>
          <Form.Control
            type="email"
            name="email"
            value={registro.email}
            onChange={handleChange}
            className="form_input_style"
          />
        </Form.Group>
        <Form.Group className="divcont">
          <p className="pform_style">Contraseña</p>
          <Form.Control
            type="password"
            name="contrasenia"
            value={registro.contrasenia}
            onChange={handleChange}
            className="form_input_style"
          />
        </Form.Group>
      </div>
      )}
      <div className="form_nombres">
        <Form.Group className="divcont">
          <p className="pform_style">Nombre</p>
          <Form.Control
            type="text"
            name="nombre"
            value={user.nombre}
            onChange={handleChange}
            className="form_input_style"
          />
        </Form.Group>

        <Form.Group className="divcont">
          <p className="pform_style">Apellido</p>
          <Form.Control
            type="text"
            name="apellido"
            value={user.apellido}
            onChange={handleChange}
            className="form_input_style"
          />
        </Form.Group>

        <Form.Group className="divcont">
          <p className="pform_style">DNI</p>
          <Form.Control
            type="text"
            name="dni"
            value={user.dni}
            onChange={handleChange}
            className="form_input_style"
          />
        </Form.Group>
      </div>
      <div className="form_info">
        <Form.Group className="divcont">
          <p className="pform_style">Celular</p>
          <Form.Control
            type="text"
            name="celular"
            value={user.celular}
            onChange={handleChange}
            className="form_input_style"
          />
        </Form.Group>

        <Form.Group className="divcont">
          <p className="pform_style">Dirección</p>
          <Form.Control
            type="text"
            name="direccion"
            value={user.direccion}
            onChange={handleChange}
            className="form_input_style"
          />
        </Form.Group>
      </div>
      <div className="btn_div">
        <Button className="button_reg" type="submit" onMouseUp={(e) => e.currentTarget.blur()}>
          Guardar
        </Button>
      </div>
    </Form>
  );
};
