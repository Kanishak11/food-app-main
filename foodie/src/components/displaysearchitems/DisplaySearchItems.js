import React from 'react'
import { useDispatch , useSelector} from 'react-redux'
import  {addToCart} from '../../actions/CartItemAction'
import Cards from '../card/Card'
import './displaySearchItem.css'


function DisplaySearchItems() {
    const dispatch = useDispatch();
    const searchItems = useSelector( state => state.searchItem)
    const myItems = useSelector( state => state.cartReducer)
    console.log(searchItems.searchItemList)
    return (
        <div className="CardsContainer">
        {searchItems.searchItemList.map( (items ,i ) => 
            <div className="CardWrap"> <Cards key={i} name = {items} proceed = { () => {dispatch(addToCart(myItems,{itemName: items ,priceOfThisItem : 350 , price :350 , quantity : 1}))}} />  </div>   )
    }
    </div>
    )
}

export default DisplaySearchItems