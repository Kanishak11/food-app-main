import React, {useState} from 'react'
import {Modal ,Button} from 'react-bootstrap'
import CartMain from './CartMain';

export const CartPopUp = () => {
	const [show, setShow] = useState(false);
  
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
  
	return (
	  <>
		<Button variant="secondary" onClick={handleShow}>
		  Open Cart
		</Button>
		<Modal show={show} onHide={handleClose}>
		  <Modal.Header closeButton>
			<Modal.Title>Your Cart</Modal.Title>
		  </Modal.Header>
		  <Modal.Body><CartMain/></Modal.Body>
		</Modal>
	  </>
	);
  }

