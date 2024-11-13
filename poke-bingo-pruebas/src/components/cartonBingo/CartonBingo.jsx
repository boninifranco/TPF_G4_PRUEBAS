import { useEffect, useState } from "react";
import { FilaCartonBingo } from "../cartonBingo/FilaCartonBingo";
import '../cartonBingo/cartonBingo.css'



export const CartonBingo = ({ carton }) => {
    const [showFilas, setShowFilas] = useState(false);    
    
  
    const toggleFilas = () => {
      setShowFilas(!showFilas);
    };
  
    return (
      
      <li>
        <div style={{ cursor: 'pointer' }} onClick={toggleFilas}>
          <h5 style={{textAlign:'center',color:'#B11A17'}}>Cartón ID: {carton.cartonId} - Usuario ID: {carton.idUsuario ? carton.idUsuario.id : ''} - Aciertos: {carton.aciertos}</h5>
          
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
  