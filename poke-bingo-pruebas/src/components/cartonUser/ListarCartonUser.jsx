import React, { useState, useEffect } from "react";
import "../cartonBingo/cartonBingo.css";
import { Row } from "react-bootstrap";
import { ChatAdmin } from "../cartonBingo/ChatAdmin";
import { CartonUser } from "./CartonUser";
import { Reclamar } from "./Reclamar";

export const ListarCartonUser = () => {
  const [carton, setCarton] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCartonByUserId = async () => {
      const idUser = localStorage.getItem("idUser");
      try {
        const response = await fetch(
          `http://localhost:3000/cartones/usuario/${idUser}`
        );
        if (!response.ok) {
          throw new Error("Error al recuperar el cartón");
        }
        const data = await response.json();
        setCarton(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Error al recuperar el cartón");
        setLoading(false);
      }
    };

    fetchCartonByUserId();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <div className="listar-carton-user">
        <Row>
          {carton ? (
            <CartonUser carton={carton} />
          ) : (
            <div>No se encontró el cartón para el usuario.</div>
          )}
        </Row>
      </div>
      <div>
        <Reclamar />
      </div>
    </div>
  );
};
