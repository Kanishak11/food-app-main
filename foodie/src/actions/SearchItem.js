import {GET_SEARCH_ITEM} from '../constant/SearchItemsConstant'

const food_items = ['Palak Paneer', 'pizza' ,'Masala Chai' , 'Chhole Bhature' , 'rolls' , 'Samosa'  ,'Kulche' , 'panner Tikka' ,'Panjiri' ,'Pan' ,'Pathrode' ,'Jalebi']

function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

export const getItem = (word) => {
    const escapeWord=escapeRegexCharacters(word.trim());
    let matches = food_items.filter(itm => {
        const regex = new RegExp(`^${escapeWord}`,'gi');
        return itm.match(regex)
    })
    if(escapeWord === ""){
        matches= []
    }
    return {
        type :GET_SEARCH_ITEM,
        payload: matches
    }
}