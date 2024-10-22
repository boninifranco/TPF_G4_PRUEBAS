import React from "react";
import { Resultados } from "../../components/resultados/Resultados";
import "./salaUser.css";

export const SaladeJuegoUser = () => {
  return (
    <div className="sala_body">
      <div className="resultados_component">
        <Resultados />
      </div>
    </div>
  );
};
