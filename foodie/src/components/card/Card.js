import React,{useEffect,useState} from 'react'
import { Card, Icon, Image ,Button} from 'semantic-ui-react'
import './Card.css'
import { incItemCount,decItemCount } from '../../actions/CartItemAction'
import { useSelector ,useDispatch } from 'react-redux'

export default function Cards(props) {
    let quantity = 1
    let id
    console.log(props)
    const dispatch = useDispatch()
    const itemsInCart = useSelector(state => state.cartReducer.items)
    console.log(itemsInCart, "items in cart")
    const ifAdded = () => {
      return itemsInCart.some((item) => {
        id=item.id
        quantity = item?.quantity
        return props.itemId === item.item.id 
      })
    }
    return (
      <div className="Cards">
        <Card >
        <Image className="img" src={props.image} size="large" />
        <Card.Content textAlign="center" style={{maxHeight:"20vh" }}>
          <Card.Header style={{maxHeight:"5vh" }}><div style={{textOverflow:"hidden"}}><p style={{color :"black" , padding : "0px",fontSize : "bolder" ,overflow : "hidden" ,fontSize:"1em" , textOverflow: "ellipsis"}}>{props.name}</p></div></Card.Header>
          <Card.Description style={{maxHeight:"5vh",textOverflow: "ellipsis"}} >
            <p style={{color :"black" , padding : "0px",fontSize : "bolder" ,overflow : "hidden" ,fontSize:"1.2em",height:'1em'}}>₹{props.price}</p>
          </Card.Description>
        </Card.Content>
        <Card.Content textAlign="center">
            {!ifAdded() ? <Button secondary onClick={props.proceed}> Add </Button> 
            :               
            <div className="quantityContainer" style={{marginLeft:'2em'}}>
            <Button
              secondary
              onClick={() => {
                dispatch(
                  incItemCount({ quantity: quantity, id: id })
                );
              }}
            >
              {" "}
              INC{" "}
            </Button>
            <p>{quantity} </p>
            <Button
              secondary
              onClick={() => {
                dispatch(
                  decItemCount({ quantity: quantity, id: id })
                );
              }}
            >
              {" "}
              DEC{" "}
            </Button>
          </div>}
        </Card.Content>
      </Card>
      </div>
  )
    }