import { GET_MENU_ITEMS ,SET_MENU_LOADING} from "../constant/MenuItemConstant";
import axios from "axios";

const getMenuItem = (data) => {
    return {
        type : GET_MENU_ITEMS,
        payload : data
    }
}

export const setLoading = () =>{
    return {
        type : SET_MENU_LOADING,
        payload : true
    }
}
export const offSetLoading =  () =>{
    return{
        type : SET_MENU_LOADING,
        payload :false
    }
}

export const getMenuById = (id) => (dispatch) =>  {
    dispatch(setLoading())
      const promise = axios.get(`https://food-app-timesinternet.herokuapp.com/api/customer/restaurant/category/${id}/item`)
    promise.then((res) => {
        const data =  res.data
        dispatch(offSetLoading())
        dispatch(getMenuItem(data))
    }).catch(err => console.log(err))
    
}

export const initialMenuItem = (id) => (dispatch) => {
    dispatch(setLoading())
    const promise =  axios.get(`https://food-app-timesinternet.herokuapp.com/api/customer/restaurant/${id}/item`)
    promise.then((res) => {
        const data = res.data
        console.log(data)
        dispatch(offSetLoading())
        dispatch(getMenuItem(data))
    }).catch(err => {
        console.log(err)
        dispatch(getMenuItem([{
            image : [],
            category :[],
        }]))
    })
}