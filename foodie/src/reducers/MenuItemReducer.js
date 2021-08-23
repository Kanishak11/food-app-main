import { GET_MENU_ITEMS, SET_MENU_LOADING } from "../constant/MenuItemConstant";

const DEFAULT_STATE = {
  setLoading: false,
  items: [],
};
export const MenuItem = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_MENU_LOADING:
      return { ...state, setLoading: action.payload };
    case GET_MENU_ITEMS:
      return { ...state, items: action.payload };
    default:
      return { ...state };
  }
};
