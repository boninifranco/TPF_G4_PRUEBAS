import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
//import "./miDesempenio.css";
//import '../../pages/MiCuentaPage/micuenta.css'
import {baseUrl} from '../../core/constant/constantes.ts';
import { useNavigate } from "react-router-dom";
import { ListaPremios } from "../varios/CarruselPremios/ListaPremios.jsx";
import { ListaPremiosCanje } from "../varios/CarruselPremios/ListaPremiosCanje.jsx";

export const CentroCanje = () => {
  
  const [user, setUser] = useState('');
  const [premios, setPremios] = useState([]);
  const navigate = useNavigate();
  
  
    const idUser = localStorage.getItem("idUser");

   
      const fetchUser = async () => {
        try {
          const response = await fetch(
            `${baseUrl}/usuario/${idUser}`
          );
          if(!response.ok){
            console.error('No se pudo obtener el usuario:', response.statusText);              
            const errorData = await response.json();
            throw new Error(errorData.message || 'Ocurrió un error inesperado')      
    }
          const dataUser = await response.json();
          setUser(dataUser);
        } catch (error) {
          console.error('Error en la solicitud:', error);
          navigate('/error', { state: { errorMessage: error.message } });
        }
      };
   

  
    
    const fetchPremios = async () => {
      try {
        const response = await fetch(`${baseUrl}/premios`);
        if(!response.ok){
          const errorData = await response.json();
          throw new Error(errorData.message || 'Ocurrió un error inesperado');
        }
        const data = await response.json();
        setPremios(data); 
        
      } catch (error) {        
        
        console.error('Error en la solicitud:', error);
        navigate('/error', { state: { errorMessage: error.message } });
      }
    };
    

  useEffect(() => {
    fetchPremios();
    fetchUser();
  }, []);
  const refrescarDatos = async () => {
    await fetchPremios();
    await fetchUser();
  };
  
  console.log("Premios cargados en el padre:", premios);
  return (
    <div className='account_body'>
      
      <div className="misdatos">
        <div className="data_style">
        {/*<h1>Mi Desempeño</h1>*/}
        
          <div className="info_row info_row_two info_style">
            {/*<div className="divcont">
              <p className="ptitle_style">Puntos</p>
              <p className="pbox_style">{user.puntos}</p>
              
            </div>*/}
            <ListaPremiosCanje premiosIniciales={premios} puntosIniciales={user.puntos} usuarioId={user.id} onCanjeConfirmado={refrescarDatos}/>
          </div>
                {/*<div style={{display:'flex', justifyContent:'center',width:'600px',gap:'30px'}}>
                  <Button
                    className="button_reg"
                    onMouseUp={(e) => e.currentTarget.blur()}
                    //onClick={onModify}
                  >
                  Canjear
                  </Button>
                  <Button
                  className="button_reg"
                  onMouseUp={(e) => e.currentTarget.blur()}
                  onClick={()=>{volver()}}
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
              </div>*/}
        
        
      <div>
        
      </div>
    
      
  </div>
      </div>
      
      
    </div>
   
);
}