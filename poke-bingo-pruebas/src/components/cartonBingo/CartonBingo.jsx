import { useEffect, useState } from "react";
import { FilaCartonBingo } from "../cartonBingo/FilaCartonBingo";
import '../cartonBingo/cartonBingo.css'
import { baseUrl } from "../../core/constant/constantes.ts";



export const CartonBingo = ({ carton }) => {
    const [showFilas, setShowFilas] = useState(false);
    const [ganoBingo, setGanoBingo] = useState({
      jugador: '',
      partida:'',
      instancia:'',
      puntos:''
    });    
    
  
    const toggleFilas = () => {
      setShowFilas(!showFilas);
      /*setGanoBingo({
        jugador:carton.idUsuario.id,
        partida: carton.partida.partidaId,
        instancia: 'Bingo',
        puntos: 1000
      })*/
    };
    console.log(carton)
    console.log('Datos del carton',JSON.stringify(ganoBingo))

    const bingo = async ()=>{
      const ganador = {
        jugador: carton.idUsuario.email,
        partida: carton.partida.partidaId,
        instancia: 'Bingo',
        puntos: 1000
      }
      
      await fetch(`${baseUrl}/resultado/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          idPuntaje: 5,
          partidaId: carton.partida.partidaId,
          usuarioId: carton.idUsuario.id
        }),
      });
      await fetch (`${baseUrl}/usuario/${carton.idUsuario.id}`,{
        method:'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          puntos: 1000,        
        }),
      })   
    }
    return (
      
      <li>
        <div style={{ cursor: 'pointer' }} onClick={toggleFilas}>
          <h5 style={{textAlign:'center',color:'#B11A17'}}>Cartón ID: {carton.cartonId} - Usuario ID: {carton.idUsuario ? carton.idUsuario.id : ''} - Aciertos: {carton.aciertos} <span onClick={()=>bingo()} style={{cursor:'pointer'}}>{carton.aciertos==15? 'Gano' : ''}</span></h5>
          
          
        </div>
        
        {showFilas && (
          <div className="carton-container">
            {carton.fila.map(fil => (
              <FilaCartonBingo key={fil.filaId} fila={fil} />
            ))}
          </div>
        
        )}
        
      </li>
    
    );
  };
  