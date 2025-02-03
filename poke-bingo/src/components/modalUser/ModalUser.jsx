import React from 'react'
import { Modal } from 'react-bootstrap'
import { MisDatosPatch } from '../miCuenta/MisDatosPatch';
import './modalUser.css';

export const ModalUser = ({showModal, handleClose}) => {

  return (
    <Modal show={showModal} onHide={handleClose} backdrop="static" keyboard={false} className="custom-modal">
      <Modal.Header>
        <Modal.Title>Complete la información de su usuario:</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <MisDatosPatch hideEmailAndPassword={true} onGuardado={handleClose} className="modal-form"/>
      </Modal.Body>
    </Modal>
  );
}
