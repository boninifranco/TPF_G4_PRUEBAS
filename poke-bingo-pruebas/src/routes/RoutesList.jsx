import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/homePage/HomePage'
import { Nosotros } from '../pages/nosotros/Nosotros'
import { Registro } from '../pages/registroPage/Registro'
import { Login } from '../pages/loginPage/Login'

export const RoutesList = () => {
  return (
    <> 
        <Routes>
            <Route path='/' element={<HomePage/>} >Home</Route>
            <Route path='/Nosotros' element={<Nosotros/>}>Nosotros</Route>
            <Route path='/Registro' element={<Registro/>}>Registro</Route>
            <Route path='/Login' element={<Login/>}>Login</Route>
            <Route path='/SalaDeJuegos'>Sala de Juegos</Route>
        </Routes>        
    </>
  )
}
