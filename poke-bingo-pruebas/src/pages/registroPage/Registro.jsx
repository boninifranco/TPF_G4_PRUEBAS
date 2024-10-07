import React from "react";
import "./registro.css";
import { FormularioReg } from "../../components/registro/FormularioReg";

export const Registro = () => {
  return (
    <body className="reg_body">
      <div className="reg_container">
        <FormularioReg/>
      </div>
    </body>
  );
};
