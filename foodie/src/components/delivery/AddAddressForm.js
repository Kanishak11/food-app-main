import axios from "axios";
import React, { useState } from "react";
import { Button } from "semantic-ui-react";

export default function AddAddressForm() {
  const [address, setAddress] = useState({});
  const changeHandler = (e) => {
    console.log(address);
    setAddress({ ...address, [e.target.name]: e.target.value });
  };
  const submitData = (e) => {
    e.preventDefault();
    const promise = axios.post(
      "https://food-app-timesinternet.herokuapp.com/api/customer/address",
      address
    );
    promise
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form className="ui form">
        <h4 className="ui dividing header">Shipping Information</h4>
        <div className="field">
          <label>Name</label>
          <div className="two fields">
            <div className="field">
              <input
                type="text"
                name="contactFirstName"
                placeholder="First Name"
                onChange={changeHandler}
              />
            </div>
            <div className="field">
              <input
                type="text"
                name="contactLastName"
                placeholder="Last Name"
                onChange={changeHandler}
              />
            </div>
          </div>
        </div>
        <div className="field">
          <label>Delivery Address</label>
          <div className="fields">
            <div className="six wide field">
              <input
                type="text"
                name="line1"
                placeholder="Street Address"
                onChange={changeHandler}
              />
            </div>
            <div className="six wide field">
              <input
                type="text"
                name="line2"
                placeholder="Street Address Line 2"
                onChange={changeHandler}
              />
            </div>
            <div className="four wide field">
              <input
                type="text"
                name="pincode"
                placeholder="Pin Code"
                onChange={changeHandler}
              />
            </div>
          </div>
        </div>
        <div className="field">
          <label>Contact Detail</label>
          <div className="fields">
            <div className="six wide field">
              <input
                type="Number"
                name="contactNumber"
                placeholder="Contact Detail"
                onChange={changeHandler}
              />
            </div>
            <div className="six wide field">
              <input
                type="Email"
                name="contactEmail"
                placeholder="Email"
                onChange={changeHandler}
              />
            </div>
          </div>
        </div>
        <div className="field">
          <div className="fields">
            <div className="six wide field">
              <input
                type="text"
                name="city"
                placeholder="City"
                onChange={changeHandler}
              />
            </div>
            <div className="six wide field">
              <input
                type="text"
                name="state"
                placeholder="State"
                onChange={changeHandler}
              />
            </div>
          </div>
        </div>
        <div className="ui center aligned container">
          <Button onClick={submitData}>Submit</Button>
        </div>
      </form>
    </div>
  );
}
