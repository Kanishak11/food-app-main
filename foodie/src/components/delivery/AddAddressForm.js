import axios from "axios";
import React,{useState} from "react";
import { Button } from "semantic-ui-react";

export default function AddAddressForm() {
  const [address ,setAddress] = useState({})
  const changeHandler = (e) =>{
    console.log(address)
    setAddress({...address , [e.target.name] : e.target.value})
  }
  const submitData = (e) =>{
    e.preventDefault()
      const promise = axios.post('http://localhost:4001/address',address)
      promise.then((res) => {console.log(res)})
      .catch(err=>console.log(err))
  }
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
                name="First Name"
                placeholder="First Name"
                onChange={changeHandler}
              />
            </div>
            <div className="field">
              <input
                type="text"
                name="Last-name"
                placeholder="Last Name"
                onChange={changeHandler}

              />
            </div>
          </div>
        </div>
        <div className="field">
          <label>Delivery Address</label>
          <div className="fields">
            <div className="twelve wide field">
              <input
                type="text"
                name="address"
                placeholder="Street Address"
                onChange={changeHandler}
              />
            </div>
            <div className="four wide field">
              <input
                type="text"
                name="shipping[address-2]"
                placeholder="Pin Code"
                onChange={changeHandler}
              />
            </div>
          </div>
        </div>
        <div className="field">
        <div className="field">
          <label>Contact Detail</label>
        <div className="six wide field">
              <input
                type="Number"
                name="Contact Detail"
                placeholder="Contact Detail"
                onChange={changeHandler}
              />
        </div>
        <label>Alternate Contact Detail</label>
        <div className="six wide field">
              <input
                type="Number"
                name="Alternate Contact Detail"
                placeholder="Alternate Contact Detail"
                onChange={changeHandler}

              />
        </div>
        <div className="ui center aligned container">
          <Button onClick={submitData}>Submit</Button>
        </div>
        
        </div>
        </div>
      </form>
    </div>
  );
}
