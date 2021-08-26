import { PROCEED_TO_CHECKOUT } from "../constant/CartItemsConstant";
import {
  FETCH_CART,
  SET_LOADING,
  OFFSET_LOADING,
  SHOWERR,
  ADDED
} from "../constant/CartItemsConstant";


  let DEFAULT_STATE = {
    addedToCart : false, 
    removedFromCart :{type:false ,message :""},
    loading : false,
    items: [],
    subtotal: 0,
    charges: 0,
    GST: 0,
    total: 0,
    discount : 0
  };

export const cartReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case FETCH_CART:
      return {
      ...state , items : action.payload.cartItemList ,total : action.payload.total ,discount : action.payload.discount ,coupon : action.payload.coupon
      };
      case ADDED:
        return{
          ...state , addedToCart : action.payload 
        }
      case  SHOWERR :
        return {
          ...state , removedFromCart : {type:action.payload.type ,message:action.payload.message}
        }
    case PROCEED_TO_CHECKOUT:
      return {
        ...state,
      };
      case SET_LOADING:
        return {...state , loading :true}
      case OFFSET_LOADING: 
      return {...state ,loading :false}
    default:
      return { ...state };
  }
};
