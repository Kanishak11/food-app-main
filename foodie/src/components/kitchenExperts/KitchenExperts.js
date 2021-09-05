import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import './KitchenExperts.css'
const KitchenExperts = (props) => (
  <Card className="expertsCard">
    <Image style={{minHeight :"30vh"}} src={props.image}  size="medium"/>
    <Card.Content  >
      <Card.Header>{props.name}</Card.Header>
      <Card.Description>
      {props.Description}
      </Card.Description>
    </Card.Content>
  </Card>
)

export default KitchenExperts