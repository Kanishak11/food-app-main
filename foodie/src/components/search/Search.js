import React  from 'react'
import {useDispatch} from 'react-redux'
import { Form ,FormControl } from 'react-bootstrap';
import {getItem} from '../../actions/searchItem'
import Show from './Show'

const myStyle = {
    "positon" : "relative",
    "transform": "translate(30vw,-35vh)",
    "width" : "40vw",
    "border" : "none",
    "backgroundBlendMode": "screen",
    "maxHeight" : "100px",
    "overflow" : "hidden"
}
function Search() {
    const dispatch = useDispatch();

    return (
          <div style ={myStyle}>
        <Form className="d-flex">
        <FormControl
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
            onChange = {(e) => {dispatch(getItem(e.target.value))}}    
        />
    </Form>
    <Show/>

        </div>
    )
}

export default Search
