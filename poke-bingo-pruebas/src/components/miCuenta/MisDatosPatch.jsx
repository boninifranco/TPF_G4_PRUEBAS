// import React from 'react'
// import { Form } from 'react-bootstrap'
// import { Button } from 'bootstrap'

// export const MisDatosPatch = () => {
//   return (
//     <Form className="form_reg" onSubmit={handleSubmit}>
//       {registroExitoso && (
//         <Alert
//           className="alrt_sccss"
//           variant="success"
//           onClose={() => setRegistroExitoso(false)}
//           dismissible
//         >
//           ¡Registro exitoso!
//         </Alert>
//       )}

//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <h4 className="label_reg">Email</h4>
//         <Form.Control
//           type="email"
//           placeholder="Email"
//           name="email"
//           value={datosReg.email}
//           onChange={handleInputChange}
//           isInvalid={!!errores.email}
//         />
//         {errores.email && (
//           <div className="alert alert-warning p-1 mt-1 alrt_dark">
//             {errores.email}
//           </div>
//         )}
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <h4 className="label_reg">Password</h4>
//         <Form.Control
//           type="password"
//           placeholder="Password"
//           name="contrasenia"
//           value={datosReg.contrasenia}
//           onChange={handleInputChange}
//           isInvalid={!!errores.contrasenia}
//         />
//         {errores.contrasenia && (
//           <div className="alert alert-warning p-1 mt-1 alrt_dark">
//             {errores.contrasenia}
//           </div>
//         )}
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formConfirmPassword">
//         <h4 className="label_reg">Confirmar Password</h4>
//         <Form.Control
//           type="password"
//           placeholder="Confirmar Password"
//           name="confirmarContrasenia"
//           value={datosReg.confirmarContrasenia}
//           onChange={handleInputChange}
//           isInvalid={!!errores.confirmarContrasenia}
//         />
//         {errores.confirmarContrasenia && (
//           <div className="alert alert-warning p-1 mt-1 alrt_dark">
//             {errores.confirmarContrasenia}
//           </div>
//         )}
//       </Form.Group>
//       <div className="btn_div">
//         <p className="label_log">
//           ¿Ya tenés cuenta?{" "}
//           <Link className="alink" to={"/Login"}>
//             INGRESAR
//           </Link>
//         </p>
//         <Button
//           className="button_reg"
//           type="submit"
//           onMouseUp={(e) => e.currentTarget.blur()}
//         >
//           REGISTRARSE
//         </Button>
//       </div>
//     </Form>
//   )
// }
