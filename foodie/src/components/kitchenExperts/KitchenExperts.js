import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import './KitchenExperts.css'
const KitchenExperts = () => (
  <Card className="expertsCard">
    <Image src='https://media.gettyimages.com/photos/professional-chef-picture-id1031440648'  size="medium"/>
    <Card.Content  >
      <Card.Header>Daniel</Card.Header>
      <Card.Meta>Joined in 2016</Card.Meta>
      <Card.Description>
        Daniel is a professional chef living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        100 Instagram Followers
      </a>
    </Card.Content>
  </Card>
)

export default KitchenExperts