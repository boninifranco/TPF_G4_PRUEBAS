import React, { useEffect, useState } from "react";
import { Button, Card, Container, Row, Col, Spinner } from "react-bootstrap";
import "./seleccionarPartidas.css";
import { useNavigate } from "react-router-dom";

export const SeleccionarPartida = () => {
  const [partidas, setPartidas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [partidaId, setPartidaId] = useState(
    localStorage.getItem("partidaId")
  );

  const navigate = useNavigate();

  const fetchPartidasActivas = async () => {
    try {
      const response = await fetch("http://localhost:3000/partidas/activas");
      const data = await response.json();
      setPartidas(data);
    } catch (error) {
      console.error("Error al obtener las partidas activas:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!partidaId) {
      fetchPartidasActivas();
    }
  }, [partidaId]);

  const handleSelectPartida = (id) => {
    localStorage.setItem("partidaId", id);
    setPartidaId(id);
  };

  if (partidaId) {
    navigate("/SalaJuegoUser");
  }

  return (
    <Container fluid className="container-partidas">
      <h2 className="text-center partidas-title">Ingresa a una Partida</h2>
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : partidas.length > 0 ? (
        <div className="partidas-container">
          {partidas.map((partida) => (
            <div key={partida.partidaId} className="partida-item">
              <Card className="partida-card">
                <Card.Body className="partida-card-body">
                  <Card.Title className="partida-card-title">
                    Partida #{partida.partidaId}
                  </Card.Title>
                  <Card.Text className="partida-card-text">
                    Cartones disponibles: {partida.cantidadCartones}
                  </Card.Text>
                  <Button
                    className="button_reg"
                    onClick={() => handleSelectPartida(partida.partidaId)}
                  >
                    Unirse a la Partida
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">No hay partidas activas en este momento.</p>
      )}
    </Container>
  );
};
