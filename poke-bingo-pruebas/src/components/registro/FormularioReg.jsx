import React, { useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import "./formularioReg.css";
import { Link, useNavigate } from "react-router-dom";

export const FormularioReg = () => {
  const [datosReg, setDatosReg] = useState({
    email: "",
    contrasenia: "",
    confirmarContrasenia: "",
  });

  const [errores, setErrores] = useState({
    email: "",
    contrasenia: "",
    confirmarContrasenia: "",
  });

  const [registroExitoso, setRegistroExitoso] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setDatosReg({
      ...datosReg,
      [e.target.name]: e.target.value,
    });
  };

  const validarEmail = (email) => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return regexEmail.test(email);
  };

  const validarContrasenia = (contrasenia) => {
    const regexContrasenia = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return regexContrasenia.test(contrasenia);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let erroresTemp = {};

    // Validar email
    if (!validarEmail(datosReg.email)) {
      erroresTemp.email = "¡El email no es válido!";
    }

    // Validar contraseña
    if (!validarContrasenia(datosReg.contrasenia)) {
      erroresTemp.contrasenia = "¡La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número!";
    }
    if (datosReg.contrasenia !== datosReg.confirmarContrasenia) {
      erroresTemp.confirmarContrasenia = "¡Las contraseñas no coinciden!";
    }
    if (Object.keys(erroresTemp).length > 0) {
      setErrores(erroresTemp);
      return;
    }
    try {
      const response = await fetch("http://localhost:3000/registro/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: datosReg.email,
          contrasenia: datosReg.contrasenia,
        }),
      });

      if (response.ok) {
        console.log("Usuario registrado con éxito");
        setRegistroExitoso(true);
        setDatosReg({ email: "", contrasenia: "", confirmarContrasenia: "" });
        setErrores({});
        setTimeout(()=>{
          navigate('/Login');
        },2000)

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
      {registroExitoso && (
        <Alert className="alrt_sccss" variant="success" onClose={() => setRegistroExitoso(false)} dismissible>
          ¡Registro exitoso!
        </Alert>
      )}

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <h4 className="label_reg">Email</h4>
        <Form.Control
          type="email"
          placeholder="Email"
          name="email"
          value={datosReg.email}
          onChange={handleInputChange}
          isInvalid={!!errores.email}
        />
        {errores.email && (
          <div className="alert alert-warning p-1 mt-1 alrt_dark">
            {errores.email}
          </div>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <h4 className="label_reg">Password</h4>
        <Form.Control
          type="password"
          placeholder="Password"
          name="contrasenia"
          value={datosReg.contrasenia}
          onChange={handleInputChange}
          isInvalid={!!errores.contrasenia}
        />
        {errores.contrasenia && (
          <div className="alert alert-warning p-1 mt-1 alrt_dark">
            {errores.contrasenia}
          </div>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formConfirmPassword">
        <h4 className="label_reg">Confirmar Password</h4>
        <Form.Control
          type="password"
          placeholder="Confirmar Password"
          name="confirmarContrasenia"
          value={datosReg.confirmarContrasenia}
          onChange={handleInputChange}
          isInvalid={!!errores.confirmarContrasenia}
        />
        {errores.confirmarContrasenia && (
          <div className="alert alert-warning p-1 mt-1 alrt_dark">
            {errores.confirmarContrasenia}
          </div>
        )}
      </Form.Group>
      <div className="btn_div">
        <p className="label_log">¿Ya tenés cuenta? <Link className="alink" to={'/Login'}>INGRESAR</Link></p>
        <Button className="button_reg" type="submit" onMouseUp={(e) => e.currentTarget.blur()}>
          REGISTRARSE
        </Button>
      </div>
    </Form>
  );
};
