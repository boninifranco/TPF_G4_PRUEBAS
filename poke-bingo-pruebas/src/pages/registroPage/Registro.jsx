import React from "react";
import "./registro.css";
import { FormularioReg } from "../../components/formularioReg/FormularioReg";

export const Registro = () => {
  return (
    <body className="reg_body">
      <div className="reg_container">
        <FormularioReg/>
      </div>
    </body>
  );
};
