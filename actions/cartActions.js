import httpReq from "../http_requests";
import { store } from "../store/store";
import { ADD_ITEM_TO_CART, UPDATE_CART_ITEMS } from "../store/types";
import * as R from 'ramda';

export const addItemToCart = (productId, quantity) => async (dispatch) => {
    try {
        const { data = {} } = await httpReq.cartReq.addItemToCart({
            product: productId,
            quantity: quantity
        });
        dispatch({
            type: ADD_ITEM_TO_CART,
            payload: data
        });
        return Promise.resolve();
    } catch (error) {
        console.log(error);
        return Promise.reject(error);
    }
};
export const getCartItems = () => async (dispatch) => {
    try {
        const { data = [] } = await httpReq.cartReq.getCartItems();
        dispatch({
            type: UPDATE_CART_ITEMS,
            payload: data
        });
        return Promise.resolve();
    } catch (error) {
        console.log(error);
        return Promise.reject(error);
    }
};
export const deleteCartItem = (cartItemId) => async (dispatch) => {
    try {
        await httpReq.cartReq.deleteCartItem({
            cartItemId: cartItemId,
        });
        const cartItems = store.getState()?.cart?.items;
        const itemIndex = R.findIndex(R.propEq('uuid', cartItemId))(cartItems);
        const finalCartItems = R.remove(itemIndex, 1, cartItems);
        dispatch({
            type: UPDATE_CART_ITEMS,
            payload: finalCartItems
        });
        return Promise.resolve();
    } catch (error) {
        console.log(error);
        return Promise.reject(error);
    }
};
