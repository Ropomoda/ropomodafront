import { SET_LOADING } from "../store/types";

export const setContentLoading = (status) => async (dispatch) => {
    dispatch({
        type: SET_LOADING,
        payload: status,
    });
    return Promise.resolve();
};
