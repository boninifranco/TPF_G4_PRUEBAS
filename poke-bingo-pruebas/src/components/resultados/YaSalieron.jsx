import React, { useEffect, useState } from 'react';
import './yasalieron.css'

export const YaSalieron = () => {
  const [fichaSalio, setFichaSalio] = useState('');
  const [salieronTodos, setSalieronTodos] = useState([]);

  useEffect(() => {
    const fetchSalieron = async () => {
      try {
        const response = await fetch('http://localhost:3000/casilleros/salieron');
        if (!response.ok) {
          throw new Error('Error al recuperar las fichas');
        }
        const data = await response.json();
        setSalieronTodos(data);

        // Actualiza la última ficha salida
        if (data.length > 0) {
          setFichaSalio(data[0]); // Última ficha que salió
        }
      } catch (err) {
        console.error(err);
      }
    };

    // Llama a la función inmediatamente
    fetchSalieron();

    // Configura un intervalo para llamar a la función cada 5 segundos
    const intervalId = setInterval(fetchSalieron, 500);

    // Limpia el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='fichasUser'>
       {fichaSalio && (
        <div className='salio'>
          <h4>Última ficha salida:</h4>
          <div className="casillero">
            <img src={fichaSalio.imagen_url} alt={`Última ficha ${fichaSalio.casillero_imagenId}`} />
          </div>
        </div>
      )}
      <h4>Ya salieron:</h4>
      <div className='salieron'>
        {salieronTodos.map((ficha) => (
          <div key={ficha.casillero_imagenId} className="casillero">
            <img src={ficha.imagen_url} alt={`Ficha ${ficha.casillero_imagenId}`} />
          </div>
        ))}
      </div>
    </div>
  );
};