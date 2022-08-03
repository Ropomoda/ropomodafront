import { ACCOUNT_LOGIN, ACCOUNT_LOGOUT, ADD_ADDRESS, UPDATE_ADDRESSES, UPDATE_PROFILE, UPDATE_USER } from "../store/types";
import httpReq from '../http_requests';
import { message } from "antd";

export const loginWithOTPToken = (mobile, otpToken) => async (dispatch) => {
  try {
    const { data } = await httpReq.accountReq.loginWithOTPToken({
      mobile: mobile,
      token: otpToken
    });
    const { token } = data;
    localStorage.setItem("token", token);
    dispatch({
      type: ACCOUNT_LOGIN,
      payload: {
        token
      },
    });
    await dispatch(getUserInfo());
    await dispatch(getProfile());
    message.success("خوش آمدید")
    return Promise.resolve();
  } catch (error) {
    console.log(error);
    message.error("کد تایید وارد شده اشتباه است.")
    return Promise.reject(error);
  }
};
export const getProfile = () => async (dispatch) => {
  try {
    const { data } = await httpReq.accountReq.getProfile();
    dispatch({
      type: UPDATE_PROFILE,
      payload: {
        ...data
      },
    });
    return Promise.resolve();
  } catch (error) {
    console.log(error);
    message.error("مشکلی در گرفتن اطلاعات پروفایل به وجود آمد.")
    return Promise.reject(error);
  }
};
export const getَAddresses = () => async (dispatch) => {
  try {
    const { data } = await httpReq.accountReq.getَAddresses();
    dispatch({
      type: UPDATE_ADDRESSES,
      payload: [
        ...data
      ],
    });
    return Promise.resolve();
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};
export const addAddresses = (addressInfo) => async (dispatch) => {
  try {
    const { data } = await httpReq.accountReq.addAddresses({ json: addressInfo });
    dispatch({
      type: ADD_ADDRESS,
      payload: data,
    });
    return Promise.resolve();
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};
export const getUserInfo = () => async (dispatch) => {
  try {
    const { data } = await httpReq.accountReq.getUser();
    dispatch({
      type: UPDATE_USER,
      payload: {
        ...data
      },
    });
    return Promise.resolve();
  } catch (error) {
    console.log(error);
    message.error("مشکلی در گرفتن اطلاعات کاربر به وجود آمد.")
    return Promise.reject(error);
  }
};

export const initAccountInfo = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  if (token) {
    dispatch({
      type: ACCOUNT_LOGIN,
      payload: {
        token
      },
    });
    return Promise.resolve();
  } else {
    return Promise.reject();
  }
};

export const logout = () => async (dispatch) => {
  try {
    localStorage.removeItem("token");
    dispatch({
      type: ACCOUNT_LOGOUT,
    });
    return Promise.resolve();
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};
