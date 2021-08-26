import React ,{useState} from 'react'
import { Modal , Button  } from "react-bootstrap";
import LoginForm from '../../views/login/Login'
import './LoginModal.css'


function ModalExampleModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <p style={{color: 'white' , padding:'1.05em'}} onClick={handleShow}>
        Login
      </p>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>  <LoginForm/></Modal.Body>
      </Modal>
    </>
  );
}


export default ModalExampleModal
