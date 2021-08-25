import { SELECTED_ADDRESS ,ADD_COUPON ,ITEM_PLACED,ITEM_FAILED} from "../constant/OrderAddressConstant";

export const selectedAddress = (data) => {
    return {
        type: SELECTED_ADDRESS,
        payload : data
    }
}
export const addCoupon = (data) => {
    return {
        type: ADD_COUPON,
        payload : data
    }
}
export const orderPlaced = () => {
    return {
        type : ITEM_PLACED,
        payload : {}
    }
}

export const orderFailed = () =>{
    return {
        type : ITEM_FAILED,
        payload : {}
    }
}