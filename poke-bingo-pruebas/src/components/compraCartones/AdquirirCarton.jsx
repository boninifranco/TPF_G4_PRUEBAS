import React, { useEffect, useState } from "react";
import "./adquirircarton.css";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { Button, Carousel } from "react-bootstrap";
import { CartonUser } from "../cartonUser/CartonUser";
import { baseUrl } from "../../core/constant/constantes.ts"

export const AdquirirCarton = () => {
  const [cartones, setCartones] = useState([]);
  const [selectedCartones, setSelectedCartones] = useState([]);
  const [preferenceId, setPreferenceId] = useState(null);

  // Inicializar MercadoPago
  initMercadoPago("TEST-72ff2cc3-d32b-4a96-93df-ce88a8c80186", { locale: "es-AR" });

  // Obtener cartones disponibles
  const fetchCartonByPartidaId = async () => {
    const partidaId = localStorage.getItem("partidaId");
    try {
      const response = await fetch(`${baseUrl}/cartones/no-comprados/${partidaId}`);
      if (!response.ok) throw new Error("Error al recuperar los cartones");
      setCartones(await response.json());
    } catch (error) {
      console.error("Error al cargar los cartones:", error);
    }
  };

  // Crear preferencia de pago
  const createPreference = async () => {
    const usuarioId = localStorage.getItem("idUser");
    if (selectedCartones.length === 0) {
      alert("Debes seleccionar al menos un cartón.");
      return null;
    }

    try {
      const response = await fetch(`${baseUrl}/mercadopago/create_preference`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: "Cartón Bingo",
          quantity: selectedCartones.length,
          unit_price: 1000,
          usuarioId,
          cartones: selectedCartones,
        }),
      });

      const { id } = await response.json();
      return id;
    } catch (error) {
      console.error("Error al crear preferencia:", error);
      return null;
    }
  };

  // Manejar la compra
  const handleBuy = async () => {
    const id = await createPreference();
    if (id) setPreferenceId(id);
  };

  // Cargar cartones al iniciar
  useEffect(() => {
    fetchCartonByPartidaId();
  }, []);

  // Manejar selección de cartones
  const handleSelectCarton = (cartonId) => {
    setSelectedCartones((prev) =>
      prev.includes(cartonId)
        ? prev.filter((id) => id !== cartonId)
        : [...prev, cartonId]
    );
  };

  return (
    <div className="box_adquirircarton">
      <h3>Comprar tus Cartones</h3>
      <div className="carousel-margin">
        <h4>Selecciona los cartones que deseas comprar:</h4>
        {cartones.length > 0 ? (
          <Carousel interval={null}>
            {cartones.map((carton) => (
              <Carousel.Item key={carton.cartonId}>
                <div className="carton-container">
                  <CartonUser carton={carton} />
                  <div className="checkbox-container">
                    <label>Seleccionar</label>
                    <input
                      type="checkbox"
                      checked={selectedCartones.includes(carton.cartonId)}
                      onChange={() => handleSelectCarton(carton.cartonId)}
                    />
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <p>No hay cartones disponibles.</p>
        )}
      </div>
      <div>
        <h4>Total: ${selectedCartones.length * 1000}</h4>
      </div>
      <div className="botones_div">
        <Button className="button_reg" onClick={handleBuy}>
          Comprar
        </Button>
        {preferenceId && <Wallet initialization={{ preferenceId }} />}
      </div>
    </div>
  );
};
