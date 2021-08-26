  
import React, {useState ,useEffect} from 'react'
import DisplaySearchItems from '../displaysearchitems/DisplaySearchItems'
import Search from './Search'
import {Modal ,Button} from 'react-bootstrap'
import {useParams} from  'react-router-dom'
import { Form ,FormControl } from 'react-bootstrap';
import axios from 'axios'

function SearchModal(props){
  const {id} = useParams()
  const [word,setWord] = useState("")
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
  const [foodItem,setFoodItem] = useState([])
  const [matches,setMatches] = useState([])
  const getItem = (e) =>{
      setWord(e.target.value)
  }
  useEffect(() => {
  const promise= axios.get(`https://food-app-timesinternet.herokuapp.com/api/customer/restaurant/${id}/item`)
  promise.then((res)=>{
    setFoodItem(res.data)
  }).catch((err) => {console.error(err)})
  },[])
console.log("food items are" ,foodItem)
	return (
	  <>
		<Button variant="secondary" onClick={handleShow}>
      Search
		</Button>
		<Modal show={show} onHide={handleClose}>
		  <Modal.Header closeButton>
			<Modal.Title>Search</Modal.Title>
		  </Modal.Header>
		  <Modal.Body>
      <Form className="d-flex">
        <FormControl
            type="text"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
            onChange = {getItem}    
        />
    </Form>
    <DisplaySearchItems  FoodItem={foodItem} word={word}/> 
      </Modal.Body>
		</Modal>
	  </>
	);
  }

  export default SearchModal

