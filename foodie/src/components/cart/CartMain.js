import React, { useEffect, useState } from "react";
import { Button, Alert, Form, Spinner } from "react-bootstrap";
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
    dispatch(fetchData())}
    ).catch(err => {console.log(err)})
  };
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  const myItems = useSelector((state) => state.cartReducer);
  console.log("myitems" , myItems);
  const { loading, subtotal, GST, total ,discount } = useSelector((state) => state.cartReducer);
  const sendCartItems = () => {
    const promise = axios.post("http://localhost:4001/cart", myItems);
    promise
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="main">
      <Alert variant="primary">
        <div className="cartHeader">
          <p> My Cart : Total Items</p>
          <p> Total Price</p>
        </div>
      </Alert>
      <div className="productsHeight">
        <div className="product">
          <p className="items">ITEMS</p>
          <div className="quantityContainer"></div>

          <p className="quantityPrice">Price</p>
        </div>
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
              <p className="quantityPrice">{itm.item.sellingPrice} Rup</p>
            </div>
          );
        })}
      </div>
      <div className="summary">
        <li>
          <p>Discount</p>
          <p>{discount}</p>
        </li>
        <li>
          <p>Delivery</p>
          <p>{GST}</p>
        </li>
      </div>
      <div className="offerInput">
        <Form.Control
          className="coupon"
          type="text"
          placeholder="Coupons"
          value={couponName}
          onChange={couponEventHandler} 
        />
        <Button onClick={applyCoupon}>Apply</Button>
      </div>
      <div className="totalContainer">
        <p>Total</p>
        <p>{myItems.total}</p>
      </div>
      <Alert variant="primary" className="checkout">
        <Link to={`/order/${id}`}>
          <Button onClick={sendCartItems}>PROCEED TO CHECKOUT</Button>{" "}
        </Link>
      </Alert>
    </div>
  );
}
