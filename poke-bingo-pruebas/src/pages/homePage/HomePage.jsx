import React from 'react'
import "../homePage/homePage.css"
import { Carrousel } from '../../components/varios/Carrousel'


 export const HomePage = () => {
  return (
    <div style={{backgroundColor: "#B11A17"}}>
        
        <div className='contieneBody'>
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
          <li>Terno: Marca tres Pokémon en tu cartón.</li>
          <li>Cuaterno: Completa cuatro Pokémon en una línea.</li>
          <li>Línea: Llena una línea completa en cualquier dirección.</li>
          <li>Bingo: ¡Marca todos los Pokémon y gana el gran premio!</li>
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
    </div> 
  )
}
