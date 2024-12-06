import React, { useEffect, useState } from 'react';
import '../CarruselPremios/listaPremiosCanje.css'
import { Button, Card, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {baseUrl} from '../../../core/constant/constantes.ts';
import CustomAlert from '../CustomAlert/CustomAlert.jsx';

export const ListaPremiosCanje = ({ premiosIniciales, puntosIniciales, usuarioId, onCanjeConfirmado }) => {
    const [puntosDisponibles, setPuntosDisponibles] = useState(0);
    const [premios, setPremios] = useState([]); // El stock no se modifica aquí
    const [premiosSeleccionados, setPremiosSeleccionados] = useState([]);
    const [listaCanje, setListaCanje] = useState([]);
    const navigate = useNavigate();
    const [showAlert, setShowAlert] = useState(false);
    const handleShowAlert = () => setShowAlert(true);
    const handleCloseAlert = () => setShowAlert(false);
    //const [puntosActual, setPuntosActual] = useState(puntosDisponibles)

    // Sincronizar el estado con los cambios en premiosIniciales
  useEffect(() => {
    setPremios(premiosIniciales);
    setPremiosSeleccionados(
        Array.from({ length: premiosIniciales.length }, () => 0)
    )
    setPuntosDisponibles(puntosIniciales)
  }, [premiosIniciales, puntosIniciales]);

  
  
    const handleIncrement = (index, creditos) => {
      if (
        premiosSeleccionados[index] < premios[index].stock &&
        puntosDisponibles >= creditos
      ) {
        // Actualiza la cantidad seleccionada
        const nuevosSeleccionados = [...premiosSeleccionados];
        nuevosSeleccionados[index] += 1;
  
        // Actualiza los puntos disponibles
        setPremiosSeleccionados(nuevosSeleccionados);
        setPuntosDisponibles(puntosDisponibles - creditos);

        // Actualiza la lista de premios seleccionados
    actualizarListaCanje(index, nuevosSeleccionados[index]);
      }
    };
  
    const handleDecrement = (index, creditos) => {
      if (premiosSeleccionados[index] > 0) {
        // Reduce la cantidad seleccionada
        const nuevosSeleccionados = [...premiosSeleccionados];
        nuevosSeleccionados[index] -= 1;
  
        // Actualiza los puntos disponibles
        setPremiosSeleccionados(nuevosSeleccionados);
        setPuntosDisponibles(puntosDisponibles + creditos);

        // Actualiza la lista de premios seleccionados
    actualizarListaCanje(index, nuevosSeleccionados[index]);
      }
    };

    // Función para actualizar la lista de canje
const actualizarListaCanje = (index, cantidadSeleccionada) => {
    setListaCanje((prevLista) => {
      const premio = premios[index];
      const nuevaLista = [...prevLista];
  
      // Busca si el premio ya está en la lista
      const itemIndex = nuevaLista.findIndex((item) => item.id === premio.id);
  
      if (cantidadSeleccionada > 0) {
        if (itemIndex !== -1) {
          // Actualiza la cantidad si ya existe
          nuevaLista[itemIndex].cantidad = cantidadSeleccionada;
        } else {
          // Agrega el premio si no está en la lista
          nuevaLista.push({
            id: premio.id,
            descripcion: premio.descripcion,
            cantidad: cantidadSeleccionada,
          });
        }
      } else {
        // Elimina el premio si la cantidad seleccionada es 0
        if (itemIndex !== -1) {
          nuevaLista.splice(itemIndex, 1);
        }
      }
  
      return nuevaLista;
    });
};  
  
const confirmarCanje = async () => {
    try {
      // Realizar el PATCH para cada premio seleccionado
      for (const item of listaCanje) {
        await fetch(`${baseUrl}/premios/canje/${item.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            stock: -item.cantidad, // Restar la cantidad seleccionada del stock actual
          }),
        });
      }
  
      // Actualizar los puntos del usuario
      const puntosGastados = listaCanje.reduce(
        (total, item) => total + item.cantidad * premios.find((p) => p.id === item.id).creditos,
        0
      );
  
      await fetch(`${baseUrl}/usuario/${usuarioId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          puntos: -puntosGastados, // Restar los puntos gastados del usuario
        }),
      });
  
      handleShowAlert();
      onCanjeConfirmado();
  
      // Reiniciar el estado
      setPremiosSeleccionados(Array(premios.length).fill(0));
      //setPuntosDisponibles(puntosIniciales);
      setListaCanje([]);
    } catch (error) {
      console.error("Error al confirmar el canje:", error);
      alert("Hubo un error al confirmar el canje. Por favor, inténtalo de nuevo.");
    }
  };
    const volver = ()=>{
        //e.preventDefault();
        navigate('/MiCuenta')
      }
    const resetear = ()=>{
        setPremios(premiosIniciales);
        setPremiosSeleccionados(
        Array.from({ length: premiosIniciales.length }, () => 0)
        )
        setPuntosDisponibles(puntosIniciales)
        setListaCanje([])
        }
    console.log("Premios recibidos en el hijo:", premiosIniciales);
    console.log("Premios:",premios)
    console.log("Premios seleccionados",premiosSeleccionados)
    console.log("Puntos disponibles", puntosDisponibles)
    return (
      <div style={{textAlign:'center'}}>
        <h1 style={{color:'#FFFAB3'}}>Centro de Canje</h1>
        <div style={{display:'flex', justifyContent:'space-around'}}>
        <div style={{display:'flex', flexDirection:'column'}}>
        <h3 className='color-canje'>Puntos disponibles: {puntosDisponibles}</h3>
        </div>
        
        <div style={{display:'flex', flexDirection:'column'}}>
        <h3 className='color-canje'>Premios seleccionados para canje:</h3>
<ul className='color-canje' style={{textAlign:'left'}}>
  {listaCanje.length > 0 ? (
    listaCanje.map((item) => (
      <li className='color-canje' key={item.id}>
        {item.cantidad} - {item.descripcion}  
      </li>
    ))
  ) : (
    <p>No has seleccionado premios aún.</p>
  )}
</ul>   
        </div>
        </div>
        
        <div className="premios-list-container-canje">
        <ListGroup className="premios-list-group">
            <Card className='premio-card'>

            </Card>
          {premios.map((premio, index) => (
            <ListGroup key={premio.id}className="premio-list-item">
               <Card 
                  className='premio-card'
                  >
                    <Card.Img
                      variant="top"
                      src={premio.imagen}
                      alt={`Imagen de ${premio.descripcion}`}
                      className="premio-card-img"
                    />
                    
                    <Card.Body className="premio-card-body">
                      <Card.Title>{premio.descripcion}</Card.Title>
                      <Card.Text>
                        <strong>Créditos:</strong> {premio.creditos}
                        <br />
                        <strong>Stock:</strong> {premio.stock}
                        <div style={{display:'flex', justifyContent:'space-around'}}>
                        <button
                            onClick={() => handleDecrement(index, premio.creditos)}
                            disabled={premiosSeleccionados[index] === 0}
                            style={{width:'30px', borderRadius:'10px', backgroundColor:'#FFFCCD', color:'#B11A17', cursor:'pointer'}}
                        >
                        -                
                        </button>
                        <span style={{color:'#FFFCCD'}}>{premiosSeleccionados[index]}</span>
                        <button
                            onClick={() => handleIncrement(index, premio.creditos)}
                            disabled={
                        premiosSeleccionados[index] >= premio.stock ||
                        puntosDisponibles < premio.creditos
                        }
                        style={{width:'30px', borderRadius:'10px', backgroundColor:'#5BB117', color:'#FFFAB3', cursor:'pointer'}}
                        >
                        +
                        </button>
                      </div>
                      </Card.Text>
                      
                      
                    </Card.Body>
                  </Card>
                
              
            </ListGroup> 
          ))}
          
          </ListGroup>
        </div>
        {/*<button onClick={confirmarCanje} disabled={premiosSeleccionados.every((v) => v === 0)}>
          Confirmar Canje
        </button>*/}
        <div style={{display:'flex', justifyContent:'center',width:'100wh',gap:'30px'}}>
                  <Button
                    className="button_reg"
                    onMouseUp={(e) => e.currentTarget.blur()}
                    onClick={()=>{confirmarCanje()}}
                  >
                  Canjear
                  </Button>
                  <Button
                  className="button_reg"
                  onMouseUp={(e) => e.currentTarget.blur()}
                  onClick={()=>{resetear()}}
                  >
                  Resetar
                  </Button>
                <Button
                  className="button_reg"
                  onMouseUp={(e) => e.currentTarget.blur()}
                  onClick={()=>{volver()}}
                  >
                  Volver
                  </Button>
              </div>
              <CustomAlert
      show={showAlert}
      variant="success"
      message="Nos contactaremos a la dirección de mail informada para coordinar el envio"
      showAcceptButton = {false}      
      onClose={handleCloseAlert}
      titulo="Canje generado con éxito!!"/>
      </div>
      
    );
    
    
  };
  
  
  