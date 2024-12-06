import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/homePage/HomePage'
import { Nosotros } from '../pages/nosotrosPage/Nosotros'
import { Registro } from '../pages/registroPage/Registro'
import { Login } from '../pages/loginPage/Login'
import { SalaDeJuegos } from '../pages/salaDeJuegosPage/SalaDeJuegos'
import { MiCuenta } from '../pages/MiCuentaPage/MiCuenta'
import { AbmPage } from '../pages/abmPage/AbmPage'
import {ErrorPage} from '../components/varios/error/ErrorPage'
import { SaladeJuegoUser } from '../pages/salaDeJuegoUser/SaladeJuegoUser'
import { SeleccionarPartida } from '../components/compraCartones/SeleccionarPartida'
import { AdquirirCarton } from '../components/compraCartones/AdquirirCarton'
import { CentroCanje } from '../components/miCuenta/CentroCanje'




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
            <Route path='/ABMPage' element={<AbmPage/>}>Administración del Sitio</Route>
            <Route path='/error' element={<ErrorPage/>}>Error</Route>
            <Route path='/SalaJuegoUser' element={<SaladeJuegoUser/>}>Sala de Juegos User</Route>
            <Route path='/SeleccionarPartida' element={<SeleccionarPartida/>}>Seleccionar Partidar</Route>
            <Route path='/AdquirirCartones' element={<AdquirirCarton/>}>Adquirir Cartones</Route>            
            <Route path='/CentroCanje' element={<CentroCanje/>}>Centro de Canje</Route>
        </Routes>        
    </>
  )
}
