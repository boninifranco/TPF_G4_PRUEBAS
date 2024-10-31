import React, { useState } from "react";
import { Alert, Button, Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import "./contraseniapatch.css";

export const ContraseniaPatch = () => {
  const [datos, setDatos] = useState({
    contrasenia: "",
    contraseniaNueva: "",
    confirmarContrasenia: "",
  });

  const [errores, setErrores] = useState({
    contrasenia: "",
    contraseniaNueva: "",
    confirmarContrasenia: "",
  });

  const [cambioExitoso, setCambioExitoso] = useState(false);

  const validarContrasenia = (contraseniaNueva) => {
    const regexContrasenia = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return regexContrasenia.test(contraseniaNueva);
  };

  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleInputChange = (e) =>{
  setDatos({
    ...datos,
    [e.target.name]: e.target.value,
  });
};

  const handlePasswordChange = async (e) => {
    e.preventDefault();

    let erroresTemp = {};

    if (!validarContrasenia(datos.contraseniaNueva)) {
      erroresTemp.contraseniaNueva =
        "¡La nueva contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número!";
    }
    if (datos.contraseniaNueva !== datos.confirmarContrasenia) {
      erroresTemp.comparacion =
        "Las contraseñas deben coincidir.";
    }
    if (Object.keys(erroresTemp).length > 0) {
      setErrores(erroresTemp);
      return;
    }
    const idUser = localStorage.getItem("idUser");
    try {
      const response = await fetch(
        `http://localhost:3000/registro/cambiar-contrasenia/${idUser}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            currentPassword: datos.contrasenia,
            newPassword: datos.contraseniaNueva,
          }),
        }
      );

      if (response.ok) {
        setCambioExitoso(true);
        setDatos({
          contrasenia: "",
          contraseniaNueva: "",
          confirmarContrasenia: "",
        });
        setErrores({});
        setTimeout(() => {
          handleShow(false);
          window.location.reload();
        }, 2000);
      } else {
        const errorData = await response.json();
        console.log("Error al cambiar la contraseña:", errorData);
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  return (
    <div>
      <Modal className="custom-modal" show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifica tu contraseña</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            {cambioExitoso && (
            <Alert className="alrt_sccss" variant="success" onClose={() => setCambioExitoso(false)} dismissible>
                ¡Cambio de contraseña exitoso!
              </Alert>
            )}

            <Form.Group>
              <Form.Label>Contraseña Actual</Form.Label>
              <Form.Control
                type="password"
                name="contrasenia"
                value={datos.contrasenia}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Contraseña Nueva</Form.Label>
              <Form.Control
                type="password"
                name="contraseniaNueva"
                value={datos.contraseniaNueva}
                onChange={handleInputChange}
                isInvalid={!!errores.contraseniaNueva}
              />
              {errores.contraseniaNueva && (
          <div className="alert alert-warning p-1 mt-1 alrt_dark">
            {errores.contraseniaNueva}
          </div>
        )}
        
            </Form.Group>
            <Form.Group>
              <Form.Label>Repetir Contraseña</Form.Label>
              <Form.Control
                type="password"
                name="confirmarContrasenia"
                value={datos.confirmarContrasenia}
                onChange={handleInputChange}
                isInvalid={!!errores.comparacion}
              />
                  {errores.comparacion && (
          <div className="alert alert-warning p-1 mt-1 alrt_dark">
            {errores.comparacion}
          </div>
        )}

            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handlePasswordChange} className="btn_changePass" onMouseUp={(e) => e.currentTarget.blur()}>Guardar</Button>
        </Modal.Footer>
      </Modal>

      <Button onClick={handleShow} className="btn_changePass" onMouseUp={(e) => e.currentTarget.blur()}>
        Cambiar Contraseña
      </Button>
    </div>
  );
};
