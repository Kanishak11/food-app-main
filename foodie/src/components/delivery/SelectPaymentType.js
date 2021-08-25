import React, { useEffect ,useState } from "react";
import { useSelector ,useDispatch } from "react-redux";
import axios from "axios";
import { orderPlaced ,orderFailed } from "../../actions/OrderAddressAction";
import ShowAddress from "./ShowAddress";

let token;
if (typeof window !== "undefined") {
  token = localStorage.getItem("token");
}
export default function SelectPaymentType() {
  const dispatch = useDispatch()
  const address = useSelector((state) => state.orderAddressDetails.address);
  const contact = useSelector((state) => state.orderAddressDetails.contact);
  const coupon = useSelector((state) => state.orderAddressDetails.couponName)
  const placeOrder = () => {
    console.log(address, contact);
        axios
          .post(
            "/api/customer/order",
            { address, contact },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((res) => {
            dispatch(orderPlaced())
            console.log(res);
          })
          .catch((err) => {
            dispatch(orderFailed())
            console.log(err.message);
          });
  };
  const selected = () => {
    //
  };

  return (
    <div>
      <div className="ui form">
        <div className="grouped fields">
          <div className="field">
            <div className="ui disabled checkbox">
              <input
                type="radio"
                name="example2"
                readOnly
                onChange={selected}
              />
              <label>Card</label>
            </div>
          </div>
          <div className="field">
            <div className="ui disabled checkbox">
              <input
                type="radio"
                name="example2"
                readOnly
                onChange={selected}
              />
              <label>UPI</label>
            </div>
          </div>
          <div className="field">
            <div className="ui radio checkbox">
              <input
                type="radio"
                name="example2"
                checked="checked"
                onChange={selected}
              />
              <label>Cash On delivery</label>
            </div>
          </div>
          <div className="field">
            <div className="ui disabled checkbox">
              <input
                type="radio"
                name="example2"
                readOnly
                onChange={selected}
              />
              <label>Paytm</label>
            </div>
          </div>
        </div>
      </div>
      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
}
