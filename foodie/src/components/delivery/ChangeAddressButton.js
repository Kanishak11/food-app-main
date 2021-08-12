import React from "react";
import { Button } from "semantic-ui-react";
import "./ChangeAddressButton.css";
export default function ChangeAddressButton() {
  return (
    <div>
      <div className="ui animated button">
        <div className="visible content">Add Address</div>
        <div className="hidden content">
          <i className="right arrow icon"></i>
        </div>
      </div>
    </div>
  );
}
