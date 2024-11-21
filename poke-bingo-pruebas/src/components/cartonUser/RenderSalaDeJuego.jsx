import React from 'react'
import { ListarCartonUser } from './ListarCartonUser'
import '../../pages/salaDeJuegoUser/salaUser.css'

export const RenderSalaDeJuego = () => {
  return (
    <div className="sala_body">
        <div className="resultados_component">
          <ListarCartonUser></ListarCartonUser>
          <div className="resul_style">

          </div>
        </div>
      </div>
  )
}
