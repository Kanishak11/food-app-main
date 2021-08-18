import React from "react";
import { Card, Image } from "semantic-ui-react";
import "./Coupons.css";
import {CouponsImageArr} from './CouponsImageArr'

console.log(CouponsImageArr)
const Coupons = () => {
    return  (
        <>
        {CouponsImageArr.map( (items ,i) => {return (
    <div key = {i} className="Coupons">
    <Card href="#card-example-link-card" raised>
      <Image
        src= {items}
        size="medium"
      ></Image>
    </Card>
  </div>)} ) }

  </>
    )
};

export default Coupons;
