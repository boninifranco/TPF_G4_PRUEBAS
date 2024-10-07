import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/homePage/HomePage'
import { Nosotros } from '../pages/nosotrosPage/Nosotros'
import { Registro } from '../pages/registroPage/Registro'
import { Login } from '../pages/loginPage/Login'
import { SalaDeJuegos } from '../pages/salaDeJuegosPage/SalaDeJuegos'
import { MiCuenta } from '../pages/MiCuentaPage/MiCuenta'

export const RoutesList = () => {
  return (
    <> 
        <Routes>
            <Route path='/' element={<HomePage/>} >Home</Route>
            <Route path='/Nosotros' element={<Nosotros/>}>Nosotros</Route>
            <Route path='/Registro' element={<Registro/>}>Registro</Route>
            <Route path='/Login' element={<Login/>}>Login</Route>
            <Route path='/SalaDeJuegos' element={<SalaDeJuegos/>}>Sala de Juegos</Route>
            <Route path='/MiCuenta' element={<MiCuenta/>}>Mi Cuenta</Route>
        </Routes>        
    </>
  )
}
