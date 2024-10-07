import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react'
// import './misdatos.css'

export const MisDatos = ({onchange}) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch('http://localhost:3000/user');
      const data = await response.json();
      setUser(data);
    }
    fetchUser();
  }, [])

  return (
    <div className='data_style'>
       <h2>Mi Cuenta</h2>
        <div>
          <p>Nombre: {user.nombre}</p>
          <p>Apellido: {user.apellido}</p>
          <p>DNI: {user.dni}</p>
          <p>Celular: {user.celular}</p>
          <p>Dirección: {user.direccion}</p>
          <Button onClick={onchange}>Modificar</Button>
        </div>
    </div>
  )
}
