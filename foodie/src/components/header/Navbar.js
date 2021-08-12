import React ,{useState} from 'react'
import './Navbar.css'
import {
 Link
} from "react-router-dom";
import './Navbar.css';
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar,NavDropdown,Nav} from 'react-bootstrap'
import ModalExampleModal from '../login/LoginModal';
import SearchModal from '../search/SearchModal';


export default function Navb() {
  const showEventHandler = () => {
    setShow(true)
  }
   const [show ,setShow] = useState(false)
    return (
  <Navbar bg="dark" expand="lg"  variant="dark" sticky="top">
  <Navbar.Brand className="me-auto" style={{ marginLeft : '20px' }}> <Link to = "/">Foodie</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="me-auto"
      navbarScroll
    >
      <LinkContainer to="/cart">
    <Nav.Link>Cart</Nav.Link>
</LinkContainer>
<LinkContainer to="/menu">
    <Nav.Link>Menu</Nav.Link>
</LinkContainer>
<LinkContainer to="/order">
    <Nav.Link>Order</Nav.Link>
</LinkContainer>


      <NavDropdown title="Link" id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
      </NavDropdown>
      
    </Nav>
    <Nav><SearchModal/></Nav>
    <Nav >
    <Nav.Link> <ModalExampleModal/> </Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Log Out
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}



