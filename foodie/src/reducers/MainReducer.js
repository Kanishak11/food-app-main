import {combineReducers } from "redux";
import { searchReducer } from "./SearchItemReducer";
import { cartReducer } from "./CartStateReducer";
import { UserDetail } from "./UserDetailsReducer";
import { MenuItem } from "./MenuItemReducer";
import {orderAddressDetails} from "./OrderAddressReducer";
export default (combineReducers({
    cartReducer:cartReducer,
    searchItem : searchReducer,
    userDetail: UserDetail,
    menuItem : MenuItem,
    orderAddressDetails :orderAddressDetails
})
)
