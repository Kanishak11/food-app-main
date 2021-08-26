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
        <Item.Extra>  <Label>Category: {props.category} </Label> </Item.Extra>
        <Item.Extra> <Label> Available :{props.Available ? ' True' : ' False'} </Label> </Item.Extra>
        <br/>
        <Item.Extra>
        <span className='price'>Price: ₹{props.price} </span>  
          <Button className='menuButton'  onClick ={props.proceed} primary floated='right'>
            Add To Cart
          </Button>
        </Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>
  </div>
)}

export default SearchCards