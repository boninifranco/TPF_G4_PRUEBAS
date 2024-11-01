import React from "react";
import "./resultados.css";
import ResultadosImagen from "../../assets/Resultados.png";
import { Ganaron } from "./Ganaron";

export const Resultados = () => {
  return (
    <div className="restotal_box">
      <div className="res_container">
        <img src={ResultadosImagen} alt="" />
        <div className="puntaje_box">
          <div>
            <Ganaron/>
          </div>
        </div>
      </div>
    </div>
  );
};
