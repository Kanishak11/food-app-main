import React , {useState,useEffect} from "react";
import { Card, Image } from "semantic-ui-react";
import "./Coupons.css";
import {CouponsImageArr} from './CouponsImageArr'
import {useParams} from 'react-router'
import axios from "axios"

const Coupons = () => {
  const {id} = useParams()
    const [CouponsImageArr ,setCouponsImageArr] = useState([])
    useEffect(() => {
      axios.get(`api/customer/restaurant/${id}/coupon`).then((res) => {
        const data = res.data
        setCouponsImageArr(data)
      }).catch((err)=>{
        console.log(err.message)
      })
    },[])
    return  (
        <>
        {CouponsImageArr.map( (items ,i) => {
          if(i > 4){
            return ;
          }
        return (
    <div key = {i} className="Coupons">
    <Card href="#" raised>
      <Image className="CouponsImage"
        src= {items?.banner?.mainUrl}
        size="medium"
      ></Image>
      <Card.Description> <p>USE PROMOCODE : {items.name}</p></Card.Description>
    </Card>
  </div>)} ) }

  </>
    )
};

export default Coupons;
