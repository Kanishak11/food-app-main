import React from 'react'
import { useDispatch , useSelector} from 'react-redux'
import  {addToCart} from '../../actions/cartItemActions'
import Cards from '../card/Card'
import './displaySearchItem.css'


function DisplaySearchItems() {
    const dispatch = useDispatch();
    const searchItems = useSelector( state => state.searchItem)
    const myItems = useSelector( state => state.cartReducer)
    console.log(searchItems.searchItemList)
    return (
        <div className="Card">
        {searchItems.searchItemList.map( (items ,i ) => {
            return <Cards name = {items} key={i}  proceed = { () => {dispatch(addToCart(myItems,{itemName: items ,priceOfThisItem : 350 , price :350 , quantity : 1}))}} > {items} </Cards>
        })
    }
        </div>
    )
}

export default DisplaySearchItems