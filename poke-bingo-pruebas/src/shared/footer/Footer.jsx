import React from 'react'
import './footer.css'
import instagram from '../../assets/instagram.png'
import tiktok from '../../assets/tiktok.png'
import x from '../../assets/x.png'

export const Footer = () => {
    return (
        <footer className="footer">
            <div className='copyright'>
                <p className='parrafo_style'>Diseñado por: Juan Pablo Wibaux & Franco Bonini</p>
                <p className='parrafo_style'>Copyright © 2024 PokeBingo</p>
            </div>
            <div className='redes'>
                <img className='social' src={instagram} alt="" />
                <img className='social' src={tiktok} alt="" />
                <img className='social' src={x} alt="" />
            </div>
        </footer>
    )
}
