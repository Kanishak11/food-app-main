import {
  DEC_QUANTITY,
  FETCH_CART,
  SET_LOADING,
  OFFSET_LOADING,
  SHOWERR,
  ADDED
} from "../constant/CartItemsConstant";
import axios from "axios";

let token;
if (typeof window !== "undefined") {
  token = localStorage.getItem("token");
}
const showErrorMessage = (message) => {
  return {
    type:SHOWERR,
    payload:message
  }
}
const successOrder = (message) => {
  return{
    type:ADDED,
    payload: message
  }
}
export const fetchData = () => async (dispatch) => {
  console.log('hiii')
  const promise = await axios
    .get("https://food-app-timesinternet.herokuapp.com/api/customer/cart", {
      headers:{
        "Authorization":`Bearer ${token}`
      }
    })
    .then((res) => {
      const data = res.data
      dispatch(cartData(data))
     
    })
    .catch((err) => dispatch(showErrorMessage(err?.response?.data?.message)))
};

const cartData = (data) => {
  return {
    type: FETCH_CART,
    payload: data
  }
}
export const setLoadingTrue = () => {
  return {
    type : SET_LOADING,
    payload : true
  }
}

export const setLoadingFalse = () => {
  return {
    type : OFFSET_LOADING,
    payload : false
  }
}
export const addToCart = (data) => async (dispatch) => {
  dispatch(setLoadingTrue())
  await axios.put(`https://food-app-timesinternet.herokuapp.com/api/customer/cart/cart_item/${data}`,{},{
    headers:{
      "Authorization":`Bearer ${token}`
    }
  })
    .then(() => {
      dispatch(setLoadingFalse())
      dispatch(fetchData())
      dispatch(successOrder(true))
      dispatch(successOrder(false))
    })
    .catch((err) => {
    dispatch(setLoadingFalse())
    dispatch(showErrorMessage({type :true ,message:err?.response?.data?.message}))
    dispatch(showErrorMessage({type :false ,message:""}))

    });
};

export const incItemCount = (data) => async (dispatch) => {
  dispatch(setLoadingTrue())
  console.log("increment", data.id)
  await axios.put('https://food-app-timesinternet.herokuapp.com/api/customer/cart/cart_item', {
    "quantity": Number(data.quantity) + 1,
    "cartItemId": data.id
  },{
    headers:{
      "Authorization":`Bearer ${token}`
    }
  }).then( () => {
    dispatch(setLoadingFalse())
    return dispatch(fetchData())
  }).catch(err => {
    console.error(err?.response?.data?.message)
  });
 
};

export const decItemCount = (data) => async (dispatch) => {
  dispatch(setLoadingTrue())
  console.log("decrement", data.id)
  await axios.put('https://food-app-timesinternet.herokuapp.com/api/customer/cart/cart_item', {
    "quantity": data?.quantity - 1,
    "cartItemId": data?.id
  },{
    headers:{
      "Authorization":`Bearer ${token}`
    }
  }).then( () => {
    dispatch(setLoadingFalse())
    return dispatch(fetchData())
  }).catch(err => {
    console.error(err)
  });

};