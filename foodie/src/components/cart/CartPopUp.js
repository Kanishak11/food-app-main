import React from 'react'
import './caart.css'
import { useSelector } from 'react-redux'
export default function Cart() {
    const myItems = useSelector( state => state.cartReducer.items)
    return (
        <div className="cart">
            <input type="checkbox" id="toggle" className="toggle__checkbox" />
    <aside className="box">
	<label htmlFor="toggle" className="toggle"><i className="icon"></i></label>
	
	<section>

		<h1  className="box__item">Cart</h1>
		<h2  className="box__item">Your Order :
		{
			myItems.map((itm)=>{ 
				return <p>{itm.itemName}</p>
			})
		}
		</h2>
		<p  className="box__item">Coupons</p>
		<p  className="box__item">Total Payment</p>
		<p className="box__item">Check </p>
	</section>
</aside>
        </div>
    )
}
