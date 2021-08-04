import {GET_SEARCH_ITEM} from '../constant/searchItems'
const food_items = ['panner' , 'aalu' , 'rolls' , 'samosha'  ,'chicken' , 'panner Tikka']



export const getItem = (word) => {
    let matches = food_items.filter(itm => {
        const regex = new RegExp(`^${word}`,'gi');
        return itm.match(regex)
    })
    if(word === ""){
        matches= []
    }
    return {
        type :GET_SEARCH_ITEM,
        payload: matches
    }
}