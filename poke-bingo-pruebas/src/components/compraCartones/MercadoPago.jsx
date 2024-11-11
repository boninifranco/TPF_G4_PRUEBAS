import React from 'react'
import { CardPayment, initMercadoPago } from '@mercadopago/sdk-react';
import { Modal } from 'react-bootstrap';

export const MercadoPago = () => {
    initMercadoPago('TEST-72ff2cc3-d32b-4a96-93df-ce88a8c80186');
    const AMOUNT = 100;
    return (
        <Modal>
        <CardPayment
        initialization={{ amount: AMOUNT }}
        onSubmit={async (param) => {
          console.log(param);
        }}
      />
      </Modal>
    )
}
