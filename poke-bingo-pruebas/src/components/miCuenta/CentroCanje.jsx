import React, { useEffect, useState } from "react";
import { baseUrl } from "../../core/constant/constantes.ts";
import { useNavigate } from "react-router-dom";
import { ListaPremiosCanje } from "../varios/CarruselPremios/ListaPremiosCanje.jsx";

export const CentroCanje = () => {
  const [user, setUser] = useState("");
  const [premios, setPremios] = useState([]);
  const navigate = useNavigate();

  const idUser = localStorage.getItem("idUser");

  const fetchUser = async () => {
    try {
      const response = await fetch(`${baseUrl}/usuario/${idUser}`);
      if (!response.ok) {
        console.error("No se pudo obtener el usuario:", response.statusText);
        const errorData = await response.json();
        throw new Error(errorData.message || "Ocurrió un error inesperado");
      }
      const dataUser = await response.json();
      setUser(dataUser);
    } catch (error) {
      console.error("Error en la solicitud:", error);
      navigate("/error", { state: { errorMessage: error.message } });
    }
  };

  const fetchPremios = async () => {
    try {
      const response = await fetch(`${baseUrl}/premios`);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Ocurrió un error inesperado");
      }
      const data = await response.json();
      setPremios(data);
    } catch (error) {
      console.error("Error en la solicitud:", error);
      navigate("/error", { state: { errorMessage: error.message } });
    }
  };

  useEffect(() => {
    fetchPremios();
    fetchUser();
  }, []);
  const refrescarDatos = async () => {
    await fetchPremios();
    await fetchUser();
  };

  return (
    <div className="account_body">
      <div className="misdatos">
        <div className="data_style">
          <div className="info_row info_row_two info_style">
            <ListaPremiosCanje
              premiosIniciales={premios}
              puntosIniciales={user.puntos}
              usuarioId={user.id}
              onCanjeConfirmado={refrescarDatos}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
