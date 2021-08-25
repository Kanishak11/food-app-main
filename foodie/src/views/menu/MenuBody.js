import React, { createRef, useState, useEffect } from "react";
import { Grid, Sticky, Ref, Rail, Segment } from "semantic-ui-react";
import CartMain from "../../components/cart/CartMain";
import "./MenuBody.css";
import SideNav from "./SideNav";
import MenuItemList from "./MenuItemList";


export default function MenuBody() {

  const contextRef = createRef();

  return (
    <Grid>
      <Grid.Column className="sideContainer" floated="left" width={3}>
        <SideNav />
      </Grid.Column>
      <Grid.Column className="menu-container" width={8}>
        <MenuItemList/>
      </Grid.Column>
      <Grid.Column width={5}>
        <Ref innerRef={contextRef}>
          <Rail internal position="right">
            <Sticky context={contextRef}>
              <div className="CartInside">
                <CartMain />
              </div>
            </Sticky>
          </Rail>
        </Ref>
      </Grid.Column>
    </Grid>
  );
}
