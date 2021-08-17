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

import  {useSelector} from 'react-redux';


export default function Navb() {
  const userDetail = useSelector(state => state.userDetail)
  const showEventHandler = () => {
    setShow(true)
  }
   const [show ,setShow] = useState(false)
    return (
  <Navbar bg="dark" expand="lg"  variant="dark" sticky="top">
  <LinkContainer style={{ marginLeft : '20px' }} to="/"><Navbar.Brand className="me-auto" > Foodie</Navbar.Brand></LinkContainer>
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
    <Nav.Link  >Order</Nav.Link>
</LinkContainer>

<Nav.Link style={{ marginLeft : '350px' }} >{userDetail.username === ""  ? <p style={{color :"white"}}> Please Log In </p>: <p style={{color :"white"}}>Welcome {userDetail.username} </p> } </Nav.Link>
    </Nav>
    <Nav  ><SearchModal/></Nav>
    <Nav >
    <Nav.Link > <ModalExampleModal/> </Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Log Out
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}



