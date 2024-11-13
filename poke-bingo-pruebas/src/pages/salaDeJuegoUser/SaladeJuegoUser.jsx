import React from "react";
import { Resultados } from "../../components/resultados/Resultados";
import "./salaUser.css";
import { ListarCartonUser } from "../../components/cartonUser/ListarCartonUser";
import { SeleccionarPartida } from "../../components/compraCartones/SeleccionarPartida";

export const SaladeJuegoUser = () => {
  return (
    <div>
    <div className="adquirir_body">
      <SeleccionarPartida/>
    </div>
    </div>
  );
};
