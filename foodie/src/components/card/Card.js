import React from 'react'
import { Button ,Card } from 'react-bootstrap'

export default function Cards(props) {
    return (
    <Card style={{ width: '18rem'}}>
    <Card.Img variant="top" src="https://images.pexels.com/photos/3928854/pexels-photo-3928854.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"  />
        <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
           {props.name}
            </Card.Text>
            <Button variant="primary" onClick={props.proceed}>Add</Button>
        </Card.Body>
    </Card>
       
    )
}
