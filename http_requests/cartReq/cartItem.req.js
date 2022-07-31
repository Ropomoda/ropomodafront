import axios from "axios"
import { BASE_URL, customerConfig, makeRequest, visitorConfig } from "../config"

export const getCartItems = () => {
    return makeRequest(() => axios.get(`${BASE_URL}cart/`,
        customerConfig())
    )
}
export const addItemToCart = ({ product, quantity }) => {
    return makeRequest(() => axios.post(`${BASE_URL}cart/`,
        {
            quantity: quantity,
            product: product,
        },
        customerConfig())
    )
}
export const deleteCartItem = ({ cartItemId }) => {
    return makeRequest(() => axios.delete(`${BASE_URL}cart/item/${cartItemId}`,
        customerConfig())
    )
}