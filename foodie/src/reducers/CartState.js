import { PROCEED_TO_CHECKOUT } from "../constant/cartItems"
import { ADD_TO_CART ,ADD_TO_SUBTOTAL ,ADD_GST, GET_TOTAL,INC_QUANTITY,DEC_QUANTITY} from "../constant/cartItems"

const DEFAULT_STATE = {
    items : [],
    subtotal : 0,
    charges : 0,
    GST : 0,
    total : 0,
}

export const cartReducer  = (state=DEFAULT_STATE,action) => {
    switch(action.type){
        case DEC_QUANTITY :
            return {...state , items : state.items.map( (val) => {
                if(val.itemName === action.payload.itemName){
                    val.quantity = val.quantity - 1 
                    val.price = Number(val.price) - Number(action.payload.priceOfThisItem)
                }
                return val
            }),
            subtotal : Number(state.subtotal)  - Number(action.payload.priceOfThisItem) 
            }
        case INC_QUANTITY :
            return {
                ...state , items : state.items.map( (val) => {
                    console.log(val , action.payload)
                    if(val.itemName === action.payload.itemName){
                        val.quantity = val.quantity +1
                        val.price = Number(val.price) + Number(action.payload.priceOfThisItem)
                    }
                    return val
                })
            }
        case  GET_TOTAL:
            return {
                ...state , total :state.subtotal +state.GST
            }
        case ADD_GST : 
        return  {
            ...state , GST :  Number(state.subtotal) * 0.05
        }
        case ADD_TO_SUBTOTAL :
            return {
                ...state ,    subtotal : Number(state.subtotal) + Number(action.payload),
            }
        case PROCEED_TO_CHECKOUT:
            return {
                ...state
            }
        case  ADD_TO_CART:
            console.log(action)
                return {
                    ...state,
                    items: state.items.some( (ele) => {
                        return ele.itemName === action.payload.itemName
                    }) ?  state.items : [...state.items, action.payload]
            }
        default :
            return { ...state};
    }

}