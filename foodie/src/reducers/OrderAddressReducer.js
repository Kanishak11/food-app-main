import { SELECTED_ADDRESS } from "../constant/OrderAddressConstant";

const DEFAULT_STATE = {
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
    }
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
        default : 
            return state
    }
}