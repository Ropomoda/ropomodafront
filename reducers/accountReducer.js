import { ACCOUNT_LOGIN, ACCOUNT_LOGOUT, ADD_ADDRESS, UPDATE_ADDRESSES, UPDATE_PROFILE, UPDATE_USER } from "../store/types";

const initialState = {
  token: null,
  user: {},
  profile: {},
  addresses: []
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACCOUNT_LOGIN:
      return {
        ...action.payload,
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: {
          ...state?.profile,
          ...action.payload,
        }
      };
    case UPDATE_USER:
      return {
        ...state,
        user: {
          ...state?.user,
          ...action.payload,
        }
      };
    case UPDATE_ADDRESSES:
      return {
        ...state,
        addresses: action.payload
      };
    case ADD_ADDRESS:
      return {
        ...state,
        addresses: [
          ...state?.addresses,
          action.payload,
        ]
      };
    case ACCOUNT_LOGOUT:
      return initialState;

    default:
      return state;
  }
};

export default accountReducer;
