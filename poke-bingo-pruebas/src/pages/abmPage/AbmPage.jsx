import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import 'bootstrap/dist/css/bootstrap.min.css';
import './abmPage.css'
import { AbmUsuario } from '../../components/abmUsuarios/AbmUsuario';

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
      <osdiv className="tab-content-custom">
        <AbmUsuario/>
      </osdiv>
      </Tab>
      <Tab eventKey="partidas" title="Partidas" >
      <div className="tab-content-custom">Contenido de partidas</div>
      </Tab>
      <Tab eventKey="cartones" title="Cartones">
      <div className="tab-content-custom">Contenido de cartones</div>
      </Tab>
      <Tab eventKey="pokemones" title="Pokemones">
      <div className="tab-content-custom">Contenido de pokemones</div>
      </Tab>
      <Tab eventKey="premios" title="Premios">
      <div className="tab-content-custom">Contenido de premios</div>
      </Tab>
    </Tabs>
    </div>
    
  );
}


