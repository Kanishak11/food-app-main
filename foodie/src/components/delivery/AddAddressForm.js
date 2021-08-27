import axios from "axios";
import React, { useState ,useEffect } from "react";
import { Button ,Message} from "semantic-ui-react";
import {useParams} from 'react-router-dom'
import { useForm } from "react-hook-form";

let token;
if (typeof window !== "undefined") {
  token = localStorage.getItem("token");
}
export default function AddAddressForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [successMessage ,setSuccessMessage] = useState("")
  const [failureMessage ,setFailureMessage] = useState({status : false, message : ""})
  const {id} = useParams();
  const [address, setAddress] = useState({});
  const [pincodesArray ,setPincodesArray] = useState([]);
  const changeHandler = (e) => {
    console.log(address);
    setAddress({ ...address, [e.target.name]: e.target.value });
  };
  useEffect( () =>{
    axios.get(`api/customer/restaurant/${id}/pincode`)
    .then((res) =>{
      const data = res.data ;
      setPincodesArray(data)
    }).catch((err) => console.log(err))
  }, [])
  const onSubmit = (e) => {
    const promise = axios.post(
      "https://food-app-timesinternet.herokuapp.com/api/customer/address",
      address , {
        headers:{
          "Authorization":`Bearer ${token}`
        }
      }
    );
    promise
      .then((res) => {
        setSuccessMessage(true)
        setTimeout(() => {window.location.reload();},1000)
      })
      .catch((err) => {
        setFailureMessage({status: true , message : err?.response?.data?.message})
        console.log(err)});
  };

  return (
    <div>
   {successMessage && <Message success fluid>Address Saved Successfully</Message>}
   {failureMessage.status && <Message warning fluid>{failureMessage.message}</Message>}
      <form onSubmit={handleSubmit(onSubmit)} className="ui form">
        <h4 className="ui dividing header">Shipping Information</h4>
        <div className="field">
          <label>Name</label>
          <div className="two fields">
            <div className="field">
              <input
              {...register('contactFirstName', { required: true})}
                type="text"
                name="contactFirstName"
                placeholder="First Name"
                onChange={changeHandler}
              />
                 {errors.contactFirstName && errors.contactFirstName.type === "required" && <span>This is required</span>}
                 {errors.contactFirstName && errors.contactFirstName.type === "maxLength" && <span>Max length exceeded</span> }    
            </div>
            <div className="field">
              <input
               {...register('contactLastName', { required: true})}
                type="text"
                name="contactLastName"
                placeholder="Last Name"
                onChange={changeHandler}
              />
            </div>
          </div>
        </div>
        <div className="field">
          <label>Contact Detail</label>
          <div className="fields">
            <div className="eight wide field">
              <input
               {...register('contactNumber', { required: true})}
                type="Number"
                name="contactNumber"
                placeholder="Contact Detail"
                onChange={changeHandler}
              />
            </div>
            <div className="eight wide field">
              <input
               {...register('contactEmail', { required: true})}
                type="Email"
                name="contactEmail"
                placeholder="Email"
                onChange={changeHandler}
              />
            </div>
          </div>
        </div>
        <div className="field">
          <label>Delivery Address</label>
          <div className="fields">
            <div className="eight wide field">
              <input
               {...register('line1', { required: true})}
                type="text"
                name="line1"
                placeholder="Street Address"
                onChange={changeHandler}
              />
            </div>
            <div className="eight wide field">
              <input
               {...register('line2', { required: true})}
                type="text"
                name="line2"
                placeholder="Street Address Line 2"
                onChange={changeHandler}
              />
            </div>
          </div>
        </div>
        <div className="field">
          <div className="fields">
            <div className="six wide field">
              <input
               {...register('city', { required: true})}
                type="text"
                name="city"
                placeholder="City"
                onChange={changeHandler}
              />
            </div>
            <div className="five wide field">
              <input
               {...register('state', { required: true})}
                type="text"
                name="state"
                placeholder="State"
                onChange={changeHandler}
              />
            </div>
            <div className="four wide field">
              <select placeholder="pincode" name ="pincode" onChange={changeHandler}>
                <option>Select Pincode</option> 
              {pincodesArray.map((values ,i ) => {
                return <option key={i} value={values?.pincode}>
                  {values?.pincode}
                </option>
              })}
              </select>
            </div>
          </div>
        </div>
        <div className="ui center aligned container">
        <input type="submit" />
        </div> 
      </form>
    </div>
  );
}
