import React from 'react'
import {Button,Alert,Form} from 'react-bootstrap'
import { useSelector ,useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './CartMain.css'
import {incItemCount,decItemCount} from '../../actions/CartItemAction'


export default function CartMain() {
    const myItems = useSelector( state => state.cartReducer)
    const {subtotal ,GST , total} = useSelector (state =>state.cartReducer)
    const dipatch = useDispatch();
    const sendCartItems = () => {
    const promise = axios.post("http://localhost:4001/cart" ,myItems)
        promise.then((res) =>{console.log(res)})
        .catch((err) => {console.log(err)})
    }
    return (

        <div className="main">

        <Alert variant = "primary" > 
        <div className = "cartHeader">
        <p> My Cart : Total Items</p>
         <p> Total Price</p>
        </div>
        </Alert>
        {
			myItems.items.map((itm ,i )=>{ 
				return (
                    <div className ="product" key = {i}>
               <p className="items">{itm.itemName}</p>
            <div className = "quantityContainer"> 
            <svg onClick= {() => {dipatch(incItemCount(myItems,itm))}}
            xmlns="http://www.w3.org/2000/svg" width="30" height="30`" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
             <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
                <p>{itm.quantity} </p> 
                <svg onClick = {() => {dipatch(decItemCount(itm))}}xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-dash-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                </svg>
            </div>
            <p className="quantityPrice">price:{itm.price}</p>
            </div>
                ) 
        })
    }
      
        <div className= "summary">
            <li>
                <p>subtotal</p>
                <p>{subtotal}</p>
            </li>
            <li>
                <p>charged</p>
                <p>price</p>
            </li>
            <li>
                <p>charges</p>
                <p>price</p>
            </li>
            <li>
                <p>GST</p>
                <p>{GST}</p>
            </li>
        </div>
            <div className="offerInput">
            <Form.Control className="coupon" type="text" placeholder="Coupons" />
            <Button>Apply</Button>
            </div>
            <div className="totalContainer">
            <p>Total</p>
            <p>{total}</p>
            </div>
            <Alert  variant = "primary" className="checkout">
               <Link to="/order"><Button onClick={sendCartItems}>PROCEED TO CHECKOUT</Button> </Link> 
            </Alert>

        </div>
    )
}
