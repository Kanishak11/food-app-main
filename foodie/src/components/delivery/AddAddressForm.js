import React from "react";

export default function AddAddressForm() {
  return (
    <div>
      <form class="ui form">
        <h4 class="ui dividing header">Shipping Information</h4>
        <div class="field">
          <label>Name</label>
          <div class="two fields">
            <div class="field">
              <input
                type="text"
                name="shipping[first-name]"
                placeholder="First Name"
              />
            </div>
            <div class="field">
              <input
                type="text"
                name="shipping[last-name]"
                placeholder="Last Name"
              />
            </div>
          </div>
        </div>
        <div class="field">
          <label>Delivery Address</label>
          <div class="fields">
            <div class="twelve wide field">
              <input
                type="text"
                name="shipping[address]"
                placeholder="Street Address"
              />
            </div>
            <div class="four wide field">
              <input
                type="text"
                name="shipping[address-2]"
                placeholder="Pin Code"
              />
            </div>
          </div>
        </div>
        <div class="field">
        <div class="field">
          <label>Contact Detail</label>
        <div class="six wide field">
              <input
                type="Number"
                name="Contact Detail"
                placeholder="Contact Detail"
              />
        </div>
        <label>Alternate Contact Detail</label>
        <div class="six wide field">
              <input
                type="Number"
                name="Alternate Contact Detail"
                placeholder="Alternate Contact Detail"
              />
        </div>
        </div>
        </div>
      </form>
    </div>
  );
}
