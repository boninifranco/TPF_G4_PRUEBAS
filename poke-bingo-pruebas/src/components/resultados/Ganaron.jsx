import React, { useEffect, useState } from 'react'

export const Ganaron = () => {
    const [ganadores, setGanadores] = useState([])

  const partidaId = localStorage.getItem('partidaId');
  const fetchResultados = async () =>{
    try {
      const response = await fetch(`http://localhost:3000/resultado/bypartida/${partidaId}`);
      const data = await response.json();
      setGanadores(data);
    } catch (error) {
      console.error('Error fetching results:', error);
    }
  };

  useEffect(()=> {
    const fetchInterval = setInterval(() => {
      fetchResultados();
    }, 500)
    console.log(ganadores)
    return () => clearInterval(fetchInterval);
  }, []);

  return (
    <div>{ganadores.length > 0 ? (
        ganadores.map((ganador, index) => (
          <div key={ganador.resultadoId || index}>
            <p> <strong>{ganador.usuario.nombre} {ganador.usuario.apellido}</strong> ganó {ganador.resultado}</p>
            <hr />
          </div>
        ))
      ) : (
        <p>No hay ganadores aún.</p>
      )}</div>
  )
}
