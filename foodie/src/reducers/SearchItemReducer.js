import {GET_SEARCH_ITEM} from '../constant/SearchItemsConstant'

const DEFAULT_STATE = {
    searchItemList : []
}

export const searchReducer = (state = DEFAULT_STATE ,action) => {
    switch(action.type) {
        case GET_SEARCH_ITEM: 
            return {...state, searchItemList : action.payload}
        default :
            return state
    }
}