import { SELECTED_ADDRESS } from "../constant/OrderAddressConstant";

export const selectedAddress = (data) => {
    return {
        type: SELECTED_ADDRESS,
        payload : data
    }
}