import { ACCOUNT_LOGIN, ACCOUNT_LOGOUT, UPDATE_PROFILE, UPDATE_USER } from "../store/types";

const initialState = {
  token: null,
  user: {},
  profile: {},
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
    case ACCOUNT_LOGOUT:
      return initialState;

    default:
      return state;
  }
};

export default accountReducer;
