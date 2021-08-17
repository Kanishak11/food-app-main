import {combineReducers } from "redux";
import { searchReducer } from "./SearchItemReducer";
import { cartReducer } from "./CartStateReducer";
import { UserDetail } from "./UserDetailsReducer";
export default (combineReducers({
    cartReducer:cartReducer,
    searchItem : searchReducer,
    userDetail: UserDetail
})
)
