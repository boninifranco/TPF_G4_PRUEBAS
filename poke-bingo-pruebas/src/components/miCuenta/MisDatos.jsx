import { Button } from "react-bootstrap";
import React, { useEffect, useState } from 'react'
import './misDatos.css'

export const MisDatos = ({ onModify }) => {
  const [user, setUser] = useState({});

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
    }
  }, [])

  return (
    <div className='data_style'>
      <h2>Mis datos</h2>
      <div className="info_style">
        <p className="pbox_style">Nombre: {user.nombre} {user.apellido}</p>
        <p className="pbox_style">DNI: {user.dni}</p>
        <p className="pbox_style">Celular: {user.celular}</p>
        <p className="pbox_style">Dirección: {user.direccion}</p>
        </div>
        <div>
        <Button className="button_reg" onMouseUp={(e) => e.currentTarget.blur()} onClick={onModify}>Modificar</Button>
        </div>
    </div>
  )
}
