import React ,{useState} from 'react'
import './Navbar.css'
import {
 useRouteMatch
} from "react-router-dom";
import './Navbar.css';
import {LinkContainer} from 'react-router-bootstrap'
import { CartPopUp } from '../cart/CartPopUp';
import {Navbar,NavDropdown,Nav,Container} from 'react-bootstrap'
import LoginModal from '../login/LoginModal';
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
  
  <LinkContainer style={{ marginLeft : '10px' }} to={`/Home/${id[2]}`}><Navbar.Brand className="me-auto" > Foodie</Navbar.Brand></LinkContainer>
 
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="me-auto"
      navbarScroll
    >
  
<LinkContainer to = {`/menu/${id[2]}`}>
    <Nav.Link>Menu</Nav.Link>
</LinkContainer>
{!(userDetail.username === "" || userDetail.username === null)  &&
<LinkContainer to={`/Myorders/${id[2]}`}> 
    <Nav.Link>My Orders</Nav.Link>
</LinkContainer>}

    </Nav>
    <Nav className="me-auto">
    <Nav.Link style={{color:'white'}} >{(userDetail.username === "" || userDetail.username ===null)  ? <p style={{color :"white"}}> Please Log In </p>: <p style={{color :"white"}}>Welcome {userDetail.username} </p> } </Nav.Link>
   </Nav>
    <Nav.Link><CartPopUp/></Nav.Link>
    <Nav.Link><SearchModal/></Nav.Link>
    {(userDetail.username === "" || userDetail.username ===null) ? <Nav ><LoginModal/> </Nav> :
      <Nav.Link  style={{color :"white"}}
      onClick={()=> {dispatch(logOut())
      window.location.reload()}}>
        Log Out
      </Nav.Link>
}
    
  </Navbar.Collapse>  
</Navbar>
    )
}



