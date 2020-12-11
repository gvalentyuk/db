import { cartActionTypes } from "./cart.types";
import { multipleItems, subItems, sumItems } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  items: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.SET_SHOW_CART:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        items: [...multipleItems(state.items, action.payload)],
      };
    case cartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    case cartActionTypes.SUB_ITEM:
      return {
        ...state,
        items: [...subItems(state.items, action.payload)],
      };
    case cartActionTypes.SUM_ITEM:
      return {
        ...state,
        items: [...sumItems(state.items, action.payload)],
      };
    case cartActionTypes.CLEAR_CART:
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
