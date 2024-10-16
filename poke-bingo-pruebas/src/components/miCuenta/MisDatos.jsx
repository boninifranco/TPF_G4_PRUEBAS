import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import "./misDatos.css";

export const MisDatos = ({ onModify }) => {
  const [user, setUser] = useState({});
  const [mail, setMail] = useState("");

  useEffect(() => {
    const idUser = localStorage.getItem("idUser");

    if (idUser) {
      const fetchUser = async () => {
        try {
          const response = await fetch(
            `http://localhost:3000/usuario/${idUser}`
          );
          const data = await response.json();
          setUser(data);
        } catch (error) {
          console.error("Error al obtener los datos del usuario:", error);
        }
      };
      fetchUser();
    }
    const fetchRegister = async () => {
      try {
        const response = await fetch(`http://localhost:3000/registro/${idUser}`)
        const data = await response.json();
        setMail(data);
      } catch (error) {
        console.error('Error al obtener los datos del registro:', error);
      }
    };
    fetchRegister();
  }, []);

  return (
   <div className="data_style">
    <h2>Mis datos</h2>
    <div className="info_style">
      <div className="info_row info_row_two">
        <div className="divcont">
          <p className="ptitle_style">Mail</p>
          <p className="pbox_style">{mail.email}</p>
        </div>
        <div className="divcont">
          <p className="ptitle_style">Nombre</p>
          <p className="pbox_style">
            {user.nombre} {user.apellido}
          </p>
        </div>
      </div>
      <div className="info_row info_row_three">
        <div className="divcont">
          <p className="ptitle_style">DNI</p>
          <p className="pbox_style">{user.dni}</p>
        </div>
        <div className="divcont">
          <p className="ptitle_style">Celular</p>
          <p className="pbox_style">{user.celular}</p>
        </div>
        <div className="divcont">
          <p className="ptitle_style">Dirección</p>
          <p className="pbox_style">{user.direccion}</p>
        </div>
      </div>
    </div>
    
    <div>
      <Button
        className="button_reg"
        onMouseUp={(e) => e.currentTarget.blur()}
        onClick={onModify}
      >
        Modificar
      </Button>
    </div>
  </div>
);
}