import React from 'react';
import './adquirircarton.css'
import { MercadoPago } from './MercadoPago';
import { Button } from 'react-bootstrap';
import { Wallet } from '@mercadopago/sdk-react';

export const AdquirirCarton = () => {
    const initialization = {
        preferenceId: '<PREFERENCE_ID>',
    }

    const customization = {
        texts: {
            valueProp: 'smart_option',
        },
        visual: {
            buttonBackground: 'black',
            borderRadius: '6px',
        },
    }

    const onSubmit = async (formData) => {
        // callback llamado al hacer clic en Wallet Brick
        // esto es posible porque Brick es un botón 
    };

    const onError = async (error) => {
        // callback llamado para todos los casos de error de Brick
        console.log(error);
    };

    const onReady = async () => {
        // Callback llamado cuando Brick esté listo.
        // Aquí puedes ocultar loadings en tu sitio, por ejemplo.  
    };

    return (
        <div className='box_adquirircarton'>
            <div>Adquirir Carton</div>
            <Button></Button>
            <MercadoPago />
            <Wallet
                initialization={initialization}
                customization={customization}
                onSubmit={onSubmit}
                onReady={onReady}
                onError={onError}
            />
        </div>
    )
}
