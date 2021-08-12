import React from 'react'
import {Button,Icon,Label, Image, Item } from 'semantic-ui-react'


const paragraph = <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />

const SearchCards = (props) =>{

  return (
  
  <Item.Group relaxed>
    <Item >
      <Item.Image size='small' src='https://react.semantic-ui.com/images/wireframe/image.png' />

      <Item.Content verticalAlign="middle">
        <Item.Header>{props.name}</Item.Header>
        <Item.Meta>
          <span className='price'>$1200</span>
          <span className='stay'>Veg {props.image}</span>
        </Item.Meta>
        <Item.Description>{paragraph}</Item.Description>
        <Item.Extra>
          
          <Button onClick ={props.proceed} primary floated='right'>
            Add To Cart
            <Icon name='right chevron' />
          </Button>
          <Label>Limited</Label>
        </Item.Extra>
      </Item.Content>
    </Item>

  </Item.Group>
)}

export default SearchCards