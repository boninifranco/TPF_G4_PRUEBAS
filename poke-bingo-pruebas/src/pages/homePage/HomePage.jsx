import React, { useEffect, useState } from 'react'
import "../homePage/homePage.css"
import { Carrousel } from '../../components/varios/Carrousel'
import { ModalUser } from '../../components/modalUser/ModalUser';
import {baseUrl} from '../../core/constant/constantes.ts';

 export const HomePage = () => {

  const [showModal, setShowModal] = useState(false);

  useEffect(()=> {
    const idUser = localStorage.getItem('idUser');

    if (idUser) {
      const fetchUser = async () => {
        try {
          const response = await fetch(`${baseUrl}/usuario/${idUser}`);
          const data = await response.json();
          if (!data.nombre || !data.apellido || !data.dni || !data.celular || !data.direccion) {
            setShowModal(true);
            console.log(data)
          }
        } catch (error) {
          console.error('Error al obtener los datos del usuario:', error);
        }
      };
      fetchUser();
    }
  }, [])

  const handleCloseModal = () => setShowModal(false);

  return (
    <div style={{backgroundColor: "#B11A17"}}>
        
        <div className='contiene-Body'>
          <section className='contieneCarrousel'>
            <Carrousel/>
          </section>
          <section className='contieneDescripcion' style={{paddingLeft:'5px'}}>
            <h3 style={{textAlign:'center'}}>🎉 ¡Bienvenido a PokeBingo! 🎉</h3>
            <p>
            
              ¡Prepárate para una experiencia única y emocionante con nuestro Bingo Pokémon!
            </p>              

              🌟 Únete a nosotros para disfrutar de un juego lleno de diversión y sorpresas con tus Pokémon favoritos.
              <br/>
              <p>
              ¡La diversión está garantizada y los premios son increíbles!
              </p>
              

            <h5>Cómo Participar?</h5>
            <h5>Registro Rápido 📋</h5>
            <p>
            ¡Regístrate ahora! Asegura tu lugar en el evento de manera rápida y sencilla.
            </p>
          <h5>Compra tus Cartones 🎫</h5>
          <p>
          Adquiere tus cartones para tener la oportunidad de jugar y ganar en las distintas instancias del bingo.
          </p>
        <h5>Instancias del Juego:</h5>
        <ul>
          <li style={{color:'#353333'}}>Ambo: Con dos Pokémon en tu cartón ya estás ganando.</li>
          <li style={{color:'#353333'}}>Terno: Marca tres Pokémon en tu cartón.</li>
          <li style={{color:'#353333'}}>Cuaterno: Completa cuatro Pokémon en una línea.</li>
          <li style={{color:'#353333'}}>Línea: Llena una línea completa en cualquier dirección.</li>
          <li style={{color:'#353333'}}>Bingo: ¡Marca todos los Pokémon y gana el gran premio!</li>
        </ul>          
        <h5>Premios y Créditos:</h5>
        <p>
        Gana Créditos: Cada vez que ganes, acumulas créditos.
        </p>
        <p>
        Canjea por Premios: Usa tus créditos para canjear premios fantásticos. ¡No te lo puedes perder!
        </p>          
        <h4 style={{textAlign:'center'}}>¡No Esperes Más!</h4>
        <p>
        Regístrate y compra tus cartones hoy mismo para ser parte de esta emocionante aventura. ¡Diviértete y gana con Pokémon!
        </p>
          </section>
        </div>        

        <ModalUser showModal={showModal} handleClose={handleCloseModal}/>
    </div> 
  )
}
