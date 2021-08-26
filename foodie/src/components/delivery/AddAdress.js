
import React ,{useState} from 'react'
import { Modal , Button  } from "react-bootstrap";
import AddAddressForm from './AddAddressForm'

function AddAdress() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        AddAdress
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>  
        <AddAddressForm/>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default AddAdress



