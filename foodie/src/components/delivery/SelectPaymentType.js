import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import ShowAddress from "./ShowAddress";

let token;
if (typeof window !== "undefined") {
  token = localStorage.getItem("token");
}

export default function SelectPaymentType() {
  const address = useSelector((state) => state.orderAddressDetails.address);
  const contact = useSelector((state) => state.orderAddressDetails.contact);
  const response = { status: "IMMUTABLE" };
  const placeOrder = () => {
    console.log(address, contact);
    axios
      .put("/api/customer/cart/status", response, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
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
            console.log(res);
          })
          .catch((err) => console.log(err));
        console.log(res);
      })
      .catch((err) => console.log(err));
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
