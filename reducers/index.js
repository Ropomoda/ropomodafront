import { combineReducers } from "redux";
import accountReducer from "./accountReducer";
import contentReducer from "./contentReducer";

export default combineReducers({
    account: accountReducer,
    content: contentReducer
});
