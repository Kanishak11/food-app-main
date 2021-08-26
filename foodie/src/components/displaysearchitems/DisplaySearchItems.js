import React ,{useState,useEffect} from 'react'
import  {addToCart} from '../../actions/CartItemAction'
import Cards from '../card/Card'
import './displaySearchItem.css'
import {useDispatch} from 'react-redux'


function DisplaySearchItems({FoodItem,word}) {
  const dispatch = useDispatch()
  const [matches,setMatches] = useState([])
  useEffect( ()=> {
  function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  const escapeWord=escapeRegexCharacters(word.trim());
  setMatches(FoodItem.filter(itm => {
      const regex = new RegExp(`^${escapeWord}`,'gi');
      return itm.name.match(regex)
  }))
  if(escapeWord === ""){
     setMatches([])
  }
}, [word])
    return (
        <div style={{minHeight:"50vh"}} className="CardsContainer">
        {matches.map((items, i) => {
        return (
          <React.Fragment key={i}>
              <Cards
                name={items.name}
                image={items?.image?.mainUrl}
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