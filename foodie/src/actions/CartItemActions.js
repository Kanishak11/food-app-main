import { ADD_TO_CART ,ADD_TO_SUBTOTAL,ADD_GST ,GET_TOTAL ,INC_QUANTITY ,DEC_QUANTITY } from "../constant/cartItems";


const addItem = (item) => {
 return {
    type : ADD_TO_CART,
    payload : item
 }
}
const decrementPaticularItem = () => {

}
const incrementPaticularItem = (data) => {
    return {
        type : ADD_TO_SUBTOTAL,
        payload : data
    }

}
const applyGST = () => {
    return {
    type : ADD_GST
    }

}


const totalAmount = () =>{
    return {
        type : GET_TOTAL
    }
}
const increaseQuantity = (data) => {
    return {
        type : INC_QUANTITY,
        payload : data
        }
}
const decreseQuantity = (data) => {
    return {
        type :  DEC_QUANTITY ,
        payload : data
    }
}
export const addToCart = (state,data) => (dispatch) => 
{
    !(state.items.some( (ele) => {
        return ele.itemName === data.itemName
    })) &&
        dispatch(addItem(data)) &&
        dispatch(incrementPaticularItem(data.price)) &&
        dispatch(applyGST()) &&
        dispatch(totalAmount())
       
}

export const incItemCount = (state,data) => (dispatch) =>{
    dispatch(increaseQuantity(data))
    dispatch(incrementPaticularItem(Number(data.priceOfThisItem)))
    dispatch(applyGST())
    dispatch(totalAmount())
  
}

export const decItemCount = (data) => (dispatch) => {
    dispatch(decreseQuantity(data))
    dispatch(applyGST())
    dispatch(totalAmount())
    return {
        type : DEC_QUANTITY ,
        payload :data
    }
}
