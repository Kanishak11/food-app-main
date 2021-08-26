import React ,{useState} from 'react'
import './Navbar.css'
import {
 useRouteMatch
} from "react-router-dom";
import './Navbar.css';
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar,NavDropdown,Nav,Container} from 'react-bootstrap'
import ModalExampleModal from '../login/LoginModal';
import SearchModal from '../search/SearchModal';
import { logOut } from '../../actions/UserDetails'; 
import  {useSelector,useDispatch} from 'react-redux';


export default function Navb() {
   const dispatch = useDispatch()
  const {path , url} = useRouteMatch()
  console.log(path,url)
  const id  = url.split("/")
  const userDetail = useSelector(state => state.userDetail)
  const showEventHandler = () => {
    setShow(true)
  }
   const [show ,setShow] = useState(false)
    return (
  <Navbar bg="dark" expand="lg"  variant="dark" sticky="top">
  
  <LinkContainer style={{ marginLeft : '20px' }} to={`/Home/${id[2]}`}><Navbar.Brand className="me-auto" > Foodie</Navbar.Brand></LinkContainer>
 
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="me-auto"
      navbarScroll
    >
      <LinkContainer to={`/cart/${id[2]}`}>
    <Nav.Link>Cart</Nav.Link>
</LinkContainer>
<LinkContainer to = {`/menu/${id[2]}`}>
    <Nav.Link>Menu</Nav.Link>
</LinkContainer>
<LinkContainer to={`/order/${id[2]}`}>
    <Nav.Link  >CheckOut</Nav.Link>
</LinkContainer>
<LinkContainer to={`/Myorders/${id[2]}`}>
    <Nav.Link>My Orders</Nav.Link>
</LinkContainer>

<div style={{ marginLeft : '20vw' }} >{(userDetail.username === "" || userDetail.username ===null)  ? <p style={{color :"white"}}> Please Log In </p>: <p style={{color :"white"}}>Welcome {userDetail.username} </p> } </div>
    </Nav>
    <Nav  ><SearchModal/></Nav>
    <Nav >
    <Nav.Link > <ModalExampleModal/> </Nav.Link>
      <Nav.Link  
      onClick={()=> {dispatch(logOut())
      window.location.reload()}}>
        Log Out
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}



