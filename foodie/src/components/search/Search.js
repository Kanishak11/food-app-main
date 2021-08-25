import React  from 'react'
import {useDispatch} from 'react-redux'
import { Form ,FormControl } from 'react-bootstrap';
import {getItem} from '../../actions/searchItem'
import Show from './Show'
import { useParams } from 'react-router';

function Search() {
    const {id} = useParams()
    const dispatch = useDispatch();

    return (
          <div >
        <Form className="d-flex">
        <FormControl
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
            onChange = {(e) => {dispatch(getItem(e.target.value,id))}}    
        />
    </Form>

        </div>
    )
}

export default Search
