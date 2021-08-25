import React from 'react'
import { Card, Icon, Image ,Button} from 'semantic-ui-react'

import './Card.css'

export default function Cards(props) {
    return (
      <div className="Cards">
        <Card >
        <Image className="img" src={props.image} size="large" />
        <Card.Content textAlign="center">
          <Card.Header><p style={{color :"black" , padding : "0px",fontSize : "bolder" ,overflow : "hidden" ,fontSize:"1em"}}>{props.name}</p></Card.Header>
          <Card.Description textAlign="center">
            <p style={{color :"black" , padding : "0px",fontSize : "bolder" ,overflow : "hidden" ,fontSize:"1.2em"}}>{props.price} INR</p>
          </Card.Description>
        </Card.Content>
        <Card.Content textAlign="center">
            <Button secondary onClick={props.proceed}> Add </Button>
        </Card.Content>
      </Card>
      </div>
  )
    }