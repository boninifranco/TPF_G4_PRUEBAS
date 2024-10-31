import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export const Reclamar = () => {
  const handleOnClick = async (click) => {//Funcion iniciar Partida
    click.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:3000/partidas/ultima-partida"
      );
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("partidaId", data.partidaId);
      } else {
        const errorData = await response.json();
        console.log("Error al asignar partida:", errorData);
      }
    } catch (error) {
      console.log(error);
    }
  };
  
    const [buttonText, setButtonText] = useState('Ambo');
  
    useEffect(() => { //Funcion Reclamar
      const partidaId = localStorage.getItem('partidaId');
  
      const fetchResultados = async () => {
        try {
          const response = await fetch(`http://localhost:3000/resultado/bypartida/${partidaId}`);
          const resultados = await response.json();
  
          const resultadosTexto = resultados.map((r) => r.resultado);
  
          if (resultadosTexto.includes('Fila')) {
            setButtonText('Bingo');
          } else if (resultadosTexto.includes('Cuaterno')) {
            setButtonText('Fila');
          } else if (resultadosTexto.includes('Terno')) {
            setButtonText('Cuaterno');
          } else if (resultadosTexto.includes('Ambo')) {
            setButtonText('Terno');
          } else {
            setButtonText('Ambo');
          }
        } catch (error) {
          console.error('Error fetching resultados:', error);
        }
      };
  
      fetchResultados();
    }, []);
  return (
    <div>
      {/* <Button className="button_reg" onClick={handleOnClick}>Iniciar Partida</Button> */}
      <Button className="button_reg" onMouseUp={(e) => e.currentTarget.blur()}>Reclamar {buttonText}</Button>
    </div>
  );
};
