import React from "react";
import "./OrderBody.css";
import AccordionOrder from "../../components/delivery/Accordation";
export default function OrderBody() {
  return (
    <>
      <br />
      <div className="order-container">
      <div className="ui internally celled grid">
        <div className="row">
          <div className="sixteen wide column">
              <br/>
            <div className="ui one column centered grid">
              <AccordionOrder/>      
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
