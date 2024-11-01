import React from "react";
import { Resultados } from "../../components/resultados/Resultados";
import "./salaUser.css";
import { AddImages } from "../../components/varios/utilitarios/AddImages";
import { AddCartones } from "../../components/varios/utilitarios/AddCartones";
import { ListarCartonUser } from "../../components/cartonUser/ListarCartonUser";
import { ChatAdmin } from "../../components/cartonBingo/ChatAdmin";

export const SaladeJuegoUser = () => {
  return (
    <div className="sala_body">
      <div className="resultados_component">
        {/* <AddImages></AddImages>
        <AddCartones></AddCartones> */}
        <ListarCartonUser></ListarCartonUser>
        <div className="resul_style">
        <Resultados />
        {/* <ChatAdmin/> */}
        </div>
      </div>
    </div>
  );
};
