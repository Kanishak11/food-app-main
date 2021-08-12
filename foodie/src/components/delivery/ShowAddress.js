import React from "react";
import {Button} from 'semantic-ui-react'
import './ShowAddress.css'
export default function ShowAddress() {
  return (
      <div className="showadd">
    <div className="ui link card">
      <div className="content">
        <div className="header">Address 1</div>
        <div className="meta">
          <span className="category">Address 2</span>
        </div>
        <div className="description">
          <p></p>
        </div>
      </div>
      <div className="extra content">
        <div className="right floated author">
          <Button primary>
            Select
          </Button>
        </div>
      </div>
    </div>
    </div>
  );
}
