import { combineReducers } from "redux";
import accountReducer from "./accountReducer";
import contentReducer from "./contentReducer";
import cartReducer from "./cartReducer";

export default combineReducers({
    account: accountReducer,
    content: contentReducer,
    cart: cartReducer,
});
