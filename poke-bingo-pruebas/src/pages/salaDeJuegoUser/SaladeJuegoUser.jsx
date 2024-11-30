import React, { useEffect } from "react";
import { Resultados } from "../../components/resultados/Resultados";
import "./salaUser.css";
import { ListarCartonUser } from "../../components/cartonUser/ListarCartonUser";
import { useNavigate } from "react-router-dom";

export const SaladeJuegoUser = () => {
  const navigate = useNavigate();

  const partidaId = localStorage.getItem("partidaId");
  const idUser = localStorage.getItem("idUser");

  const fetchCartonesUsuario = async () => {
    try {
      const response = await fetch(`http://localhost:3000/cartones/usuario/${idUser}/partida/${partidaId}`);
      if (!response.ok) {
        console.error("Error al recuperar los cartones:", response.status);
        return 0;
      }
      const data = await response.json();
      return Array.isArray(data) ? data.length : 0;
    } catch (error) {
      console.error("Error al obtener los cartones:", error);
      return 0;
    }
  };

  useEffect(() => {
    const checkData = async () => {

      if (!partidaId) {
        navigate("/SeleccionarPartida");
        return;
      }

      const cartonesCount = await fetchCartonesUsuario();
      if (cartonesCount === 0) {
        navigate("/AdquirirCartones");
        return;
      } 
    };

    checkData();
  }, [navigate, partidaId, idUser]);

  return (
    <div>
      <div className="adquirir_body">
        <ListarCartonUser />
        <Resultados />
      </div>
    </div>
  );
};
