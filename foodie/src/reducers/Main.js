import {combineReducers } from "redux";
import { searchReducer } from "./SearchItem";
import { cartReducer } from "./CartState";

export default (combineReducers({
    cartReducer:cartReducer,
    searchItem : searchReducer
})
)
