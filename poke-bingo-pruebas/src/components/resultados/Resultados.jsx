import React from "react";
import "./resultados.css";
import ResultadosImagen from "../../assets/Resultados.png";

export const Resultados = () => {
  return (
    <div className="restotal_box">
      <div className="res_container">
        <img src={ResultadosImagen} alt="" />
        <div className="puntaje_box">
          <div>
            <h5>Puntajes</h5>
          </div>
          <div>
            <h5>Ya Salieron</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
