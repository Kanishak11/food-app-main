import { SELECTED_ADDRESS ,ADD_COUPON ,ITEM_PLACED ,ITEM_FAILED } from "../constant/OrderAddressConstant";

const DEFAULT_STATE = {
    failed :false,
    placed  : false, 
    address : {
        line1 : "" ,
        line2 : "",
        pincode : "",
        state : "",
    } ,
    contact : {
        contactEmail : "",
        contactNumber : "",
        contactFirstName : "",
        contactLastName : ""
    },
    couponName : "" 
}
export const orderAddressDetails = (state = DEFAULT_STATE ,action) => {
    switch (action.type) {
        case SELECTED_ADDRESS :
            state.address = {line1: action.payload.line1,
                line2 : action.payload.line2,
                pincode :action.payload.pincode,
                state  : action.payload.state
            }
            state.contact = {
                contactEmail : action.payload.contactEmail,
                contactNumber : action.payload.contactNumber,
                contactFirstName: action.payload.contactNumber,
                contactLastName: action.payload.contactLastName
            }
            return state
        case ADD_COUPON :
            return {...state , couponName : action.payload}
        case ITEM_PLACED:
            return {...state ,placed:true}
        case ITEM_FAILED:
            return {...state ,failed:true}

        default : 
            return state
    }
}