import '../cartonBingo/cartonBingo.css'

export const FilaCartonBingo = ({ fila }) => {
    return (
      <div className="fila">
        {/*<p>Aciertos: {fila.aciertos}</p>*/}
        
        {fila.casillero.map(casiller => (          
          
          <div
           key={casiller.casilleroId}
           className="casillero"
           style={{
            backgroundColor: casiller.salio ? '#AEA742' : '#f0f0f0' // Color cuando el casillero ha salido
          }}>
            <img
              src={casiller.imagenId.url}
              alt={`Imagen ${casiller.imagenId.nombre}`}
              width={50}
              height={50}
              style={{marginTop:'15px', marginRight:'5px'}}
            />
            <p style={{marginBottom:'10px'}}>{casiller.imagenId.imagenId}</p>
            {/*<p>{casiller.salio ? 'X' : ''}</p>*/}
          </div>
          
          
        ))}
      </div>
    );
  };
  