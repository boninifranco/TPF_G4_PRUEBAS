import { useState } from "react";
import '../cartonBingo/cartonBingo.css';
import { FilaUser } from "./FilaUser";
import "./cartonuser.css"

export const CartonUser = ({ carton }) => {

  return (
        <div className="carton-user">
          {carton.fila.map(fil => (
            <FilaUser key={fil.filaId} fila={fil} />
          ))}
        </div>
  );
};
