import React from 'react'
import './footer.css'
import instagram from '../../assets/instagram.png'
import tiktok from '../../assets/tiktok.png'
import x from '../../assets/x.png'

export const Footer = () => {
    return (
        <footer className="fixed-bottom">
            <div className='copyright'>
                <p className='parrafo_style'>Diseñado por: Juan Pablo Wibaux & Franco Bonini</p>
                <p className='parrafo_style'>Copyright © 2024 PokeBingo</p>
                <p className='parrafo_style'>Todos los derechos reservados</p>
            </div>
            <div className='redes'>
                <img src={instagram} alt="" />
                <img src={tiktok} alt="" />
                <img src={x} alt="" />
            </div>
        </footer>
    )
}
