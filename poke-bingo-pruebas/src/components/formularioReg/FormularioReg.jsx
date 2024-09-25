import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./formularioReg.css";

export const FormularioReg = () => {
  const [datosReg, setDatosReg] = useState({
    usuarioId: "",
    email: "",
    contrasenia: "",
    administrador: false,  // Añadir el estado para el campo 'administrador'
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDatosReg({
      ...datosReg,
      [name]: type === "checkbox" ? checked : value, // Manejar el checkbox para administrador
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!datosReg.usuarioId || !datosReg.email || !datosReg.contrasenia) {
      console.log("Faltan datos");
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/registro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          usuarioId: datosReg.usuarioId,
          email: datosReg.email,
          contrasenia: datosReg.contrasenia,
          administrador: datosReg.administrador,  // Enviar el valor de administrador
        }),
      });

      if (response.ok) {
        console.log("Usuario registrado con éxito");
      } else {
        const errorData = await response.json();
        console.log("Error al registrar usuario:", errorData);
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  return (
    <Form className="form_reg" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicUsuario">
        <h4 className="label_reg">Usuario</h4>
        <Form.Control
          type="number"
          placeholder="Usuario"
          name="usuarioId"
          value={datosReg.usuarioId}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <h4 className="label_reg">Email</h4>
        <Form.Control
          type="email"
          placeholder="Email"
          name="email"
          value={datosReg.email}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <h4 className="label_reg">Password</h4>
        <Form.Control
          type="password"
          placeholder="Password"
          name="contrasenia"
          value={datosReg.contrasenia}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAdmin">
        <Form.Check
          type="checkbox"
          label="Administrador"
          name="administrador"
          checked={datosReg.administrador}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Button className="button_reg" variant="primary" type="submit">
        REGISTRARSE
      </Button>
    </Form>
  );
};
