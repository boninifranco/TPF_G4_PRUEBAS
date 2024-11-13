import React, { useEffect, useState } from "react";
import "./adquirircarton.css";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { Button } from "react-bootstrap";
import { RenderSalaDeJuego } from "../cartonUser/RenderSalaDeJuego";

export const AdquirirCarton = () => {
  const [cartones, setCartones] = useState([]);
  const [selectedCartones, setSelectedCartones] = useState([]);
  const [preferenceId, setPreferenceId] = useState(null);
  const [quantity, setQuantity] = useState(0); // Cantidad de cartones seleccionados, inicializado en 0
  const [showSalaDeJuego, setShowSalaDeJuego] = useState(false);

  // Obtener cartones disponibles para la partida
  const fetchCartonByPartidaId = async () => {
    const partidaId = localStorage.getItem("partidaId");

    try {
      const response = await fetch(
        `http://localhost:3000/cartones/bypartida/${partidaId}`
      );
      if (!response.ok) {
        throw new Error("Error al recuperar el cartón");
      }
      const data = await response.json();
      setCartones(data);
    } catch (error) {
      console.error(error);
    }
  };

  // Función para asignar los cartones seleccionados al usuario
  const asignarUsuario = async (cartonId, usuarioId) => {
    try {
      const response = await fetch(
        `http://localhost:3000/cartones/asignar-usuario/${cartonId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ usuarioId }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Cartón asignado:", data);
      } else {
        console.error("Error al asignar el usuario al cartón");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Función para crear la preferencia de pago
  const createPreference = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/mercadopago/create_preference",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: "Cartón Bingo",
            quantity: quantity,
            unit_price: 1000, // Precio por cartón
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        const { id } = data;
        return id;
      } else {
        console.error("Error al registrar carton Id:", await response.json());
        return null;
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      return null;
    }
  };

  // Manejar la compra
  const handleBuy = async () => {
    setQuantity(selectedCartones.length); // Actualiza la cantidad antes de la compra
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
      const usuarioId = localStorage.getItem("idUser"); // Obtener el usuario desde localStorage
      if (usuarioId) {
        // Asignar los cartones seleccionados al usuario
        for (const cartonId of selectedCartones) {
          await asignarUsuario(cartonId, usuarioId);
        }
      }
    }
  };

  // Configuración de MercadoPago
  initMercadoPago("TEST-72ff2cc3-d32b-4a96-93df-ce88a8c80186", {
    locale: "es-AR",
  });

  // Cambiar partida (eliminar y recargar)
  const cambiarPartida = () => {
    localStorage.removeItem("partidaId");
    setTimeout(() => {
      window.location.reload();
    }, 750);
  };

  // useEffect para obtener cartones y configurar intervalo
  useEffect(() => {
    fetchCartonByPartidaId(); // Cargar cartones inicialmente

    const intervalId = setInterval(() => {
      fetchCartonByPartidaId(); // Refrescar cartones cada 5 segundos
    }, 5000); // Intervalo de 5 segundos

    return () => clearInterval(intervalId); // Limpiar intervalo cuando el componente se desmonte
  }, []);

  // Función para seleccionar o deseleccionar un cartón
  const handleSelectCarton = (cartonId) => {
    setSelectedCartones((prevSelectedCartones) => {
      const updatedCartones = prevSelectedCartones.includes(cartonId)
        ? prevSelectedCartones.filter((id) => id !== cartonId)
        : [...prevSelectedCartones, cartonId];
      setQuantity(updatedCartones.length); // Actualiza `quantity` al seleccionar o deseleccionar
      return updatedCartones;
    });
  };

  // Función para mostrar RenderSalaDeJuego
  const handleRenderSala = () => {
    setShowSalaDeJuego(true);
  };

  return (
    <div>
      {showSalaDeJuego ? (
        <RenderSalaDeJuego /> // Mostrar RenderSalaDeJuego si showSalaDeJuego es true
      ) : (
        <div className="box_adquirircarton">
          <div>Adquirir Carton</div>
          <div>
            <h4>Selecciona los cartones que deseas comprar:</h4>
            {cartones.map((carton) => (
              <div key={carton.cartonId}>
                <input
                  type="checkbox"
                  onChange={() => handleSelectCarton(carton.cartonId)}
                  checked={selectedCartones.includes(carton.cartonId)}
                />
                Cartón ID: {carton.cartonId}
              </div>
            ))}
          </div>

          <div>
            <h4>Cantidad de cartones seleccionados: {quantity}</h4>
            <h4>
              Precio total: ${quantity * 1000} (por cada cartón de $1000)
            </h4>
          </div>

          <Button className="button_reg" onClick={handleBuy}>
            Comprar
          </Button>

          {preferenceId && <Wallet initialization={{ preferenceId }} />}
          <Button className="button_reg" onClick={cambiarPartida}>
            Cambiar Partida
          </Button>
          <Button className="button_reg" onClick={handleRenderSala}>
            Ir a la Sala de Juego
          </Button>
        </div>
      )}
    </div>
  );
};
