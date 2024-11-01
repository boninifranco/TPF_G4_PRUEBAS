import { useState } from "react";
import "../cartonBingo/cartonBingo.css";
import "./filauser.css";
import "./cartonuser.css"

export const FilaUser = ({ fila }) => {
  const [selectedCasilleros, setSelectedCasilleros] = useState(
    fila.casillero.map(() => false)
  );

  const toggleCasillero = (index) => {
    const newSelectedCasilleros = [...selectedCasilleros];
    newSelectedCasilleros[index] = !newSelectedCasilleros[index];
    setSelectedCasilleros(newSelectedCasilleros);
  };

  return (
    <div className="fila-user">
      {fila.casillero.map((casillero, index) => (
        <div
          key={casillero.casilleroId}
          className={
            selectedCasilleros[index] ? "casilleroToggle" : "casilleroUser"
          }
          onClick={() => toggleCasillero(index)}
        >
          <img
            src={casillero.imagenId.url}
            alt={`Imagen ${casillero.imagenId.nombre}`}
          />
          <p>{casillero.imagenId.imagenId}</p>
        </div>
      ))}
    </div>
  );
};
