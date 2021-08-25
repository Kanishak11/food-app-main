import React from 'react'
import { useDispatch , useSelector} from 'react-redux'
import  {addToCart} from '../../actions/CartItemAction'
import Cards from '../card/Card'
import './displaySearchItem.css'


function DisplaySearchItems() {
    const dispatch = useDispatch();
    const searchItems = useSelector( state => state.searchItem)
    const myItems = useSelector( state => state.cartReducer)
    console.log("search item list  " , searchItems.searchItemList)
    return (
        <div className="CardsContainer">
        {searchItems.searchItemList.map((items, i) => {
        return (
          <React.Fragment key={i}>
              <Cards
                name={items.name}
                image={items.image.mainUrl}
                price = {items.sellingPrice}
                proceed={() => {
                  dispatch(
                    addToCart(items.id))
                }}
              />

          </React.Fragment>
        );
      })}
    </div>
    )
}

export default DisplaySearchItems