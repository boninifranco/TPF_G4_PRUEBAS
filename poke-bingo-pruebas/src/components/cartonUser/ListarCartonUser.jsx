import React, { useState, useEffect } from "react";
import "../cartonBingo/cartonBingo.css";
import { Row, Accordion } from "react-bootstrap"; 
import { CartonUser } from "./CartonUser";
import { Reclamar } from "./Reclamar";

export const ListarCartonUser = () => {
  const [cartones, setCartones] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCartonesByUserId = async () => {
      const idUser = localStorage.getItem("idUser");
      const partidaId = localStorage.getItem("partidaId"); 

      try {
        const response = await fetch(
          `http://localhost:3000/cartones/usuario/${idUser}/partida/${partidaId}`
        );
        if (!response.ok) {
          throw new Error("Error al recuperar los cartones");
        }
        const data = await response.json();
        setCartones(data); 
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Error al recuperar los cartones");
        setLoading(false);
      }
    };

    fetchCartonesByUserId();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <div>
        {cartones.length > 0 ? (
          <Accordion className="cartones" defaultActiveKey={[0]}>
            {cartones.map((carton, index) => (
              <Accordion.Item eventKey={index} key={carton.cartonId} >
                <Accordion.Header>Cartón #{index + 1}</Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <CartonUser carton={carton} />
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        ) : (
          <div>No se encontraron cartones.</div>
        )}
      </div>
      <div className="reclamar">
        <Reclamar />
      </div>
    </div>
  );
};
