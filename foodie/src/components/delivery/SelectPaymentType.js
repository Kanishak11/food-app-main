import React from "react";
import ShowAddress from "./ShowAddress";

export default function SelectPaymentType() {
  return (
    <div>
      <div className="ui form">
        <div className="grouped fields">
          <label>Mode Of Payment</label>
          <div className="field">
            <div className="ui radio checkbox">
              <input type="radio" name="example2" checked="checked" />
              <label>Card</label>
            </div>
          </div>
          <div className="field">
            <div className="ui radio checkbox">
              <input type="radio" name="example2" />
              <label>UPI</label>
            </div>
          </div>
          <div className="field">
            <div className="ui radio checkbox">
              <input type="radio" name="example2" />
              <label>Cash On delivery</label>
            </div>
          </div>
          <div className="field">
            <div className="ui radio checkbox">
              <input type="radio" name="example2" />
              <label>Paytm</label>
            </div>
          </div>
        </div>
      </div>
      <button>Place Order</button>
    </div>
  );
}
