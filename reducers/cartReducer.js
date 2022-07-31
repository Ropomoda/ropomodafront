
import { ADD_ITEM_TO_CART, DELETE_CART_ITEM, UPDATE_CART_ITEMS } from "../store/types";

const initialState = {
    items: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM_TO_CART:
            return {
                ...state,
                items: [
                    ...state.items,
                    action.payload
                ]
            };
        case UPDATE_CART_ITEMS:
            return {
                ...state,
                items: action.payload
            };
        default:
            return state;
    }
};

export default cartReducer;
