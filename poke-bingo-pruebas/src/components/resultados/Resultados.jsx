import React from "react";
import "./resultados.css";
import ResultadosImagen from "../../assets/Resultados.png";
import { Ganaron } from "./Ganaron";
import { ChatAdmin } from "../cartonBingo/ChatAdmin";
import { Tab, Tabs } from "react-bootstrap";

export const Resultados = () => {
  return (
    <div className="restotal_box">
      <div className="res_container">
        <img src={ResultadosImagen} alt="" />
        <div className="puntaje_box">
          <Tabs defaultActiveKey="ganaron" id="controlled-tab-example" className="resultados-tabs">
            <Tab eventKey="ganaron" title="Ganaron">
              <Ganaron />
            </Tab>
            <Tab eventKey="chat" title="Chat" className="chat_box" >
              <ChatAdmin />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
