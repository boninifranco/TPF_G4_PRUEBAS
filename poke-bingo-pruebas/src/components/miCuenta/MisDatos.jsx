import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import "./misDatos.css";
import { useNavigate } from "react-router-dom";
import { MiDesempenio } from "./MiDesempenio";

export const MisDatos = ({ onModify }) => {
  const [user, setUser] = useState({});
  const [mail, setMail] = useState("");
  const [datosRegistro, setDatosRegistro] = useState({})
  const navigate = useNavigate();

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
        setDatosRegistro({
          mail: data.email,
          userName: data.userName,
          avatar: data.avatar
        })
      } catch (error) {
        console.error('Error al obtener los datos del registro:', error);
      }
    };
    fetchRegister();
  }, []);

  const miDesempenio = ()=>{
    //e.preventDefault();
    navigate('/centroCanje')
  }

  return (
   <div className="data_style">
    <h1>Mis datos</h1>
    <div className="info_style">
      <div className="info_row info_row_two">
        <div className="divcont">
          <p className="ptitle_style">Mail</p>
          <p className="pbox_style">{datosRegistro.mail}</p>
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
        <div className="divcont">
          <p className="ptitle_style">UserName</p>
          <p className="pbox_style">{datosRegistro.userName}</p>
        </div>
        <div className="divcont">
          <p className="ptitle_style">Avatar</p>
          <img src={datosRegistro.avatar} style={{width:'100px'}}/>
          
        </div>
      </div>
    </div>
    
    <div style={{display:'flex',justifyContent:'center', gap:'50px', width:'100wh'}}>
      <Button
        className="button_reg"
        onMouseUp={(e) => e.currentTarget.blur()}
        onClick={onModify}
        style={{width:'160px'}}
      >
        Modificar
      </Button>

      <Button
        className="button_reg"
        onMouseUp={(e) => e.currentTarget.blur()}
        onClick={()=> miDesempenio()}
        style={{width:'160px'}}
      >
        Centro de Canjes
      </Button>
    </div>
  </div>
);
}