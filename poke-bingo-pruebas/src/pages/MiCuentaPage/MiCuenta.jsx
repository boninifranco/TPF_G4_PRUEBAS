import React, { useState } from 'react'
import './micuenta.css'
import { MisDatos } from '../../components/miCuenta/MisDatos';
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
          <MisDatosPatch onGuardado={handleGuardado} />
        ) : (
          <MisDatos onModify={handleModificar}/>
        )}
        </div>
    </div>
    
  )
}
