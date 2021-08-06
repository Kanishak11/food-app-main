import {GET_SEARCH_ITEM} from '../constant/searchItems'

const food_items = ['Palak Paneer', 'pizza' ,'Masala Chai' , 'Chhole Bhature' , 'rolls' , 'Samosa'  ,'Kulche' , 'panner Tikka' ,'Panjiri' ,'Pan' ,'Pathrode' ,'Jalebi']


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