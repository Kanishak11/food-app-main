import React, { useEffect, useState } from "react";
import { Button, Alert, Form, Spinner } from "react-bootstrap";
import {Message} from 'semantic-ui-react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import "./CartMain.css";
import {
  incItemCount,
  decItemCount,
  fetchData,
} from "../../actions/CartItemAction";
import { useParams } from "react-router";
let token;
if (typeof window !== "undefined") {
  token = localStorage.getItem("token");
}
export default function CartMain() {
  const [couponApplied ,setCouponApplied] = useState('')
  const { id } = useParams();
  const dispatch = useDispatch();
  const [couponName, setCouponName] = useState("");
  const couponEventHandler = (event) => {
    setCouponName(event.target.value);
  };
  const applyCoupon = () => {
    axios.get(`api/customer/cart/coupon?coupon=${couponName}`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => 
    {console.log(res)
    dispatch(fetchData())
    setCouponApplied('Coupon Applied Successfully');
  }
    ).catch(error => {
      setCouponApplied(error.response.data.message);
      console.log(error.response.data.message)
    })
  };
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  const myItems = useSelector((state) => state.cartReducer);
  console.log("myitems" , myItems);
  const { loading, subtotal, GST, total ,discount ,coupon } = useSelector((state) => state.cartReducer);
  return (
    <div className="main">
      <Alert variant="primary">
        <div className="cartHeader">
          <p>  Items</p>
          <p> Price  </p>
        </div>
      </Alert>
      <div className="productsHeight">
 
        {myItems.items.map((itm, i) => {
          return (
            <div className="product" key={i}>
              <p className="items">{itm.item.name}</p>
              <div className="quantityContainer">
                <Button
                  primary
                  onClick={() => {
                    dispatch(
                      incItemCount({ quantity: itm.quantity, id: itm.id })
                    );
                  }}
                >
                  {" "}
                  INC{" "}
                </Button>
                <p>{itm.quantity} </p>
                <Button
                  primary
                  onClick={() => {
                    dispatch(
                      decItemCount({ quantity: itm.quantity, id: itm.id })
                    );
                  }}
                >
                  {" "}
                  DEC{" "}
                </Button>
              </div>
              {loading && <Spinner animation="grow" />}
              <p className="quantityPrice">₹{itm.item.sellingPrice*itm.quantity}</p>
            </div>
          );
        })}
      </div>
      <div className="summary">
        <li>
          <p>SubTotal</p>
          <p>₹{discount+myItems.total}</p>
        </li>
        <li>
          <p>Discount</p>
          <p>₹{discount}</p>
        </li>
      </div>
      <div className="offerInput">
        <Form.Control
          className="coupon"
          type="text"
          placeholder= {coupon?.name === undefined ? 'Apply coupon' : coupon?.name}
          value={couponName}
          onChange={couponEventHandler} 
        />
        <Button onClick={applyCoupon}>Apply</Button>
      </div>
      {couponApplied!=='' && <Message varient="danger">{couponApplied}</Message>}
      <div className="totalContainer">
        <p>Total</p>
        <p>₹{myItems.total}</p>
      </div>
      <Alert variant="primary" className="checkout">
        { myItems.items.length > 0 ?
        <Link to={`/order/${id}`}>
          <Button>PROCEED TO CHECKOUT</Button>{" "}
        </Link>
        : <Button disabled>PROCEED TO CHECKOUT</Button>
        }
      </Alert>
    </div>
  );
}
