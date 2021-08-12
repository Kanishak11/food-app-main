import React from "react";
import CartMain from "../../components/cart/CartMain";
import Map from "../../components/map/Map";

import "./OrderBody.css";
import AccordionOrder from "../../components/delivery/Accordation";
import ChangeAddressButton from "../../components/delivery/ChangeAddressButton";
import AddAdress from "../../components/delivery/AddAdress";
export default function OrderBody() {
  return (
    <>
      <br />
      <div className="ui internally celled grid">
        <div className="row">
          <div className="ten wide column">
              <br/>
            <div className="ui one column centered grid">
              <AccordionOrder/>
            </div>
          </div>
          <div className="six wide column">
            <CartMain />
          </div>
        </div>
      </div>
      <div className="ui one column centered grid">

      </div>
    </>
  );
}
