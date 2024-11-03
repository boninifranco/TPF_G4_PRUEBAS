import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import 'bootstrap/dist/css/bootstrap.min.css';
import './abmPage.css'
import { AbmUsuario } from '../../components/abmUsuarios/AbmUsuario';
import { AddImages } from '../../components/varios/utilitarios/AddImages';
import { AddCartones } from '../../components/varios/utilitarios/AddCartones';
import { AbmPartidas } from '../../components/abmPartidas/AbmPartidas';
import { AbmCartones } from '../../components/abmCartones/AbmCartones';
import { AbmPokemones } from '../../components/abmPokemones/AbmPokemones';

export const AbmPage = ()=> {
  const [key, setKey] = useState('usuarios');

  return (
    <div style={{marginTop:'95px', backgroundColor:'#FFFAB3'}}>
    {/*<h3>Administración del Sitio</h3>*/}
    <Tabs    
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      //className="mb-3"
     className='my-custom-tabs'        
      justify
      
    >
      <Tab eventKey="usuarios" title="Usuarios" >
      <div className="tab-content-custom">
        <AbmUsuario/>
      </div>
      </Tab>
      <Tab eventKey="partidas" title="Partidas" >
      <div className="tab-content-custom">
        <AbmPartidas/>
      </div>
      </Tab>
      <Tab eventKey="cartones" title="Cartones">
      <div className="tab-content-custom">
        <AbmCartones/>
      </div>
      </Tab>
      <Tab eventKey="pokemones" title="Pokemones">
      <div className="tab-content-custom">
        <AbmPokemones/>
      </div>
      </Tab>
      <Tab eventKey="premios" title="Premios">
      <div className="tab-content-custom">
      <AddImages/>
      <AddCartones/>
      
      </div>      
      </Tab>
    </Tabs>
    </div>
    
  );
}


