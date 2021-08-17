import React , {createRef} from "react";
import { Grid ,Sticky ,Ref ,Rail,Segment } from "semantic-ui-react";
import CartMain from "../../components/cart/CartMain";
import SearchCards from "../../components/search/SearchCards";
import "./MenuBody.css";
import { useDispatch , useSelector} from 'react-redux'
import  {addToCart} from '../../actions/CartItemAction'

import SideNav from "./SideNav";
const food_items = [
 "Masala Chai" ,
 "Chhole Bhature",
 "rolls" ,
 "Samosa",
 "Kulche",
 "panner Tikka",
 "Panjiri" ,
 "Pan" ,
 "Pathrode" ,
 "Jalebi"
];

export default function MenuBody() {
  const contextRef = createRef()
  const dispatch = useDispatch();
  const searchItems = useSelector( state => state.searchItem)
  const myItems = useSelector( state => state.cartReducer)  
  return (
    <Grid>
      <Grid.Column floated= "left" width={3}>
        <SideNav />
      </Grid.Column>
      <Grid.Column width={8}>
        <br />
        <div className="bodyFlex">
          {food_items.map((items,i) => {return <div key={i}> <SearchCards  name ={items} image={items.image_src} proceed = { () => {dispatch(addToCart(myItems,{itemName: items ,priceOfThisItem : 350 , price :350 , quantity : 1}))}}   /> </div>})}
        </div>
      </Grid.Column>
      <Grid.Column width={5}>
       <Ref innerRef={contextRef}>
       <Rail internal position='right'>
        
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
