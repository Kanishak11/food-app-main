import {combineReducers } from "redux";
import { searchReducer } from "./SearchItemReducer";
import { cartReducer } from "./CartStateReducer";

export default (combineReducers({
    cartReducer:cartReducer,
    searchItem : searchReducer
})
)
