import React, { useState } from 'react'
import { MisDatos } from '../../components/miCuenta/MisDatos'
import './micuenta.css'
import { MisDatosPatch } from '../../components/miCuenta/MisDatosPatch';



export const MiCuenta = () => {
  const [editando, setEditando] = useState(false);
  
const handleModificar = () => {
  setEditando(true);
};

const handleGuardado= () => {
  setEditando(false);
}

  return (
    <div className='account_body'>
      <div className='misdatos'>
        {editando ? (
          <MisDatosPatch onChange={handleGuardado} />
        ) : (
          <MisDatos onChange={handleModificar}/>
        )}
        </div>
    </div>
    
  )
}
