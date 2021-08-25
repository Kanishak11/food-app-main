import React ,{useState, useEffect} from "react";
import {Button ,Message} from'semantic-ui-react'
import { OverlayTrigger,Overlay ,Tooltip} from "react-bootstrap";
import './ShowAddress.css'
import axios from 'axios'
import { selectedAddress } from "../../actions/OrderAddressAction";
import {useDispatch} from 'react-redux'
import {Spinner} from 'react-bootstrap'
let token;
if (typeof window !== "undefined") {
  token = localStorage.getItem("token");
}

const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    This Address is Selected
  </Tooltip>
);
export default function ShowAddress() {
  const dispatch = useDispatch()
  const [show , setShow] = useState(true)
  const [loading,setLoading] = useState(true)
  const [address , setAddress] = useState([])
  useEffect(()=>{
    const promise = axios.get('/api/customer/address',{
      headers:{
        "Authorization":`Bearer ${token}`
      }
    })
    promise.then((res)=>{
      setLoading(false)
      setAddress(res.data)
      console.log("address",res.data)
    }).catch((err)=> console.error(err))
  },[])
  return (
    <>
   
    {loading && <Spinner animation="border" />}
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
            <p>First Name :{value.contactFirstName}</p>
            <p>Last Name :{value.contactLastName}</p>
            <p>Mobile Number :{value.contactNumber}</p>
            <p>Email :{value.contactEmail}</p>
            <p>Pincode : {value.pincode}</p>
          </div>
        </div>
        <div className="extra content">
          <div className="right floated author">
            <br/>
            <OverlayTrigger
            rootClose={true}
        trigger={'click'}
        placement="top"
        overlay={renderTooltip}
      >
          <Button className="selectButton" primary onClick = {() => {
              dispatch(selectedAddress(value))
            }}>
              Select
            </Button>
            </OverlayTrigger>
          </div>
        </div>
      </div>
      </div>
  
      )
    })}
    </>
  )
}
