
import { SET_LOADING, SET_UNLOADING, } from "../store/types";

const initialState = {
    loading: false,
};

const contentReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                loading: action.payload
            };
        default:
            return state;
    }
};

export default contentReducer;
