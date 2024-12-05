import React, { useState, useEffect } from 'react';
//import AbmPremios from './AbmPremios';
import { Form, Button } from 'react-bootstrap';
import { ListaPremios } from '../varios/CarruselPremios/ListaPremios';
import {baseUrl} from '../../core/constant/constantes.ts';

export const AbmPremios1 = ()=> {
  const [premios, setPremios] = useState([]);
  const [selectedPremio, setSelectedPremio] = useState({
    descripcion: '',
    imagen: '',
    creditos: 0,
    stock: 0,
  });

  // Cargar premios al montar el componente
  useEffect(() => {
    const fetchPremios = async () => {
      try {
        const response = await fetch(`${baseUrl}/premios`);
        const data = await response.json();
        setPremios(data);
      } catch (error) {
        console.error('Error al cargar premios:', error);
      }
    };

    fetchPremios();
  }, []);

  // Manejar el premio seleccionado desde AbmPremios
  const handleSelectPremio = (premio) => {
    setSelectedPremio({ ...premio });
  };

  // Actualizar los datos del premio seleccionado al editar el formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedPremio((prev) => ({
      ...prev,
      [name]: value, // Actualiza el campo específico
    }));
  };

  const handleUpdatePremio = async () => {
    if (!selectedPremio.id) return;

    try {
      await fetch(`${baseUrl}/premios/${selectedPremio.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(selectedPremio),
      });

      // Actualizar la lista local de premios
      setPremios((prev) =>
        prev.map((p) =>
          p.id === selectedPremio.id ? { ...p, ...selectedPremio } : p
        )
      );
      alert('Premio actualizado correctamente');
    } catch (error) {
      console.error('Error al actualizar el premio:', error);
      alert('Error al actualizar el premio');
    }
  };

  const handleDeletePremio = async () => {
    if (!selectedPremio.id) return;

    try {
      await fetch(`${baseUrl}/premios/${selectedPremio.id}`, {
        method: 'DELETE',
      });

      // Eliminar el premio localmente
      setPremios((prev) => prev.filter((p) => p.id !== selectedPremio.id));
      setSelectedPremio({
        descripcion: '',
        imagen: '',
        creditos: 0,
        stock: 0,
      });
      alert('Premio eliminado correctamente');
    } catch (error) {
      console.error('Error al eliminar el premio:', error);
      alert('Error al eliminar el premio');
    }
  };

  return (
    <div>
      <h1>Gestión de Premios</h1>

      {/* Renderizar lista de premios */}
      <ListaPremios premios={premios} onSelectPremio={handleSelectPremio} />

      {/* Formulario */}
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            type="text"
            name="descripcion"
            value={selectedPremio.descripcion || ''}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Imagen (URL)</Form.Label>
          <Form.Control
            type="text"
            name="imagen"
            value={selectedPremio.imagen || ''}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Créditos</Form.Label>
          <Form.Control
            type="number"
            name="creditos"
            value={selectedPremio.creditos || 0}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Stock</Form.Label>
          <Form.Control
            type="number"
            name="stock"
            value={selectedPremio.stock || 0}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button variant="primary" onClick={handleUpdatePremio}>
          Actualizar
        </Button>
        <Button
          variant="danger"
          onClick={handleDeletePremio}
          className="ms-2"
        >
          Eliminar
        </Button>
      </Form>
    </div>
  );
};


