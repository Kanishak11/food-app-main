import React from 'react'
import {Button,Icon,Label, Image, Item } from 'semantic-ui-react'
import './SearchCards.css'


const SearchCards = (props) =>{
  return (
    <div className="menuCard">
  <Item.Group relaxed>
    <Item >
      <Item.Image className="image-container" size='small' src={props.image} />
      <Item.Content verticalAlign="middle">
        <Item.Header>{props.name}</Item.Header>
        <Item.Meta>
          <span className='price'>{props.price} INR</span>
          <span className='stay'></span>
        </Item.Meta>
        <Item.Extra>
          <Button onClick ={props.proceed} primary floated='right'>
            Add To Cart
            <Icon name='right chevron' />
          </Button>
          <Label>{props.type} </Label>
        </Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>
  </div>
)}

export default SearchCards