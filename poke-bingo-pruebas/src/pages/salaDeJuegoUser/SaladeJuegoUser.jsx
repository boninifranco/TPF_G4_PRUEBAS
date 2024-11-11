import React from "react";
import { Resultados } from "../../components/resultados/Resultados";
import "./salaUser.css";
import { ListarCartonUser } from "../../components/cartonUser/ListarCartonUser";
import { AdquirirCarton } from "../../components/compraCartones/AdquirirCarton";

export const SaladeJuegoUser = () => {
  return (
    <div>
    <div className="adquirir_body">
      <AdquirirCarton/>
    </div>
    <div className="sala_body">
      <div className="resultados_component">
        <ListarCartonUser></ListarCartonUser>
        <div className="resul_style">
        <Resultados />
        </div>
      </div>
    </div>
    </div>
  );
};
