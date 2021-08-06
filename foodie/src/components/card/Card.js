import React from 'react'
import { Card, Icon, Image ,Button} from 'semantic-ui-react'

import './Card.css'

export default function Cards(props) {
    return (
        <Card className="Cards">
        <Image className="img" src='https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' size="large" />
        <Card.Content textAlign="center">
          <Card.Header>{props.name}</Card.Header>
          <Card.Description textAlign="center">
            Discription of food
          </Card.Description>
        </Card.Content>
        <Card.Content textAlign="center">
            <Button secondary onClick={props.proceed}> Add </Button>
        </Card.Content>
      </Card>
  )
    }