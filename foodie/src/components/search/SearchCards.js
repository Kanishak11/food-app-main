import React from 'react'
import {Button,Icon,Label, Image, Item } from 'semantic-ui-react'
import './SearchCards.css'


const SearchCards = (props) =>{
  return (
    <div className="menuCard">
  <Item.Group relaxed>
    <Item className="menuContainer">
      <Item.Image className="image-container" size='small' src={props.image} />
      <Item.Content verticalAlign="right">
        <Item.Header>
          <p style={{fontSize:"1.5em" ,fontWeight:"bolder"}}>{props.name}</p></Item.Header>
        <Item.Description>
        </Item.Description>
        <Item.Extra>  <Label>{props.type} </Label></Item.Extra>
        <Item.Extra>
          <Button className='menuButton'  onClick ={props.proceed} primary floated='right'>
            Add To Cart
            <Icon name='right chevron' />
          </Button>
        </Item.Extra>
        <Item.Meta>
          <span className='price'>Price :{props.price} INR</span>
        </Item.Meta>
      </Item.Content>
    </Item>
  </Item.Group>
  </div>
)}

export default SearchCards