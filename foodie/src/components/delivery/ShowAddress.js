import React ,{useState, useEffect} from "react";
import {Button} from 'semantic-ui-react'
import './ShowAddress.css'
import axios from 'axios'
import { selectedAddress } from "../../actions/OrderAddressAction";
import {useDispatch} from 'react-redux'
let token;
if (typeof window !== "undefined") {
  token = localStorage.getItem("token");
}

export default function ShowAddress() {
  const dispatch = useDispatch()
  const [address , setAddress] = useState([])
  useEffect(()=>{
    const promise = axios.get('/api/customer/address',{
      headers:{
        "Authorization":`Bearer ${token}`
      }
    })
    promise.then((res)=>{
      setAddress(res.data)
      console.log("address",res.data)
    }).catch((err)=> console.error(err))
  },[])
  return (
    <>
    {address.map((value , i) => {
      return (      
        <div key ={i} className="showadd">
      <div className="ui link card">
        <div className="content">
          <div className="header">{value.line1}</div>
          <div className="meta">
            <span className="category">{value.line2}</span>
          </div>
          <div className="description">
            <p> First Name :{value.contactFirstName}</p>
            <p>Last Name :{value.contactLastName}</p>
            <p>Mobile Number :{value.contactNumber}</p>
            <p>Email :{value.contactEmail}</p>

          </div>
        </div>
        <div className="extra content">
          <div className="right floated author">
            <Button primary onClick = {() => {dispatch(selectedAddress(value))}}>
              Select
            </Button>
          </div>
        </div>
      </div>
      </div>
      )
    })}
    </>
  )
}
