import axios from 'axios';
import { makeRequest, BASE_URL, visitorConfig, customerConfig } from '../config';



//TODO Getting products from categories and collections
export const getAllProducts = () => {
    return makeRequest(() => axios.get(`${BASE_URL}store/product/?category=1`, visitorConfig()))
}
export const getSingleProduct = ({ code }) => {
    return makeRequest(() => axios.get(`${BASE_URL}store/product/${code}`, visitorConfig()))
}
export const createOrder = ({ address, payment_method }) => {
    return makeRequest(() => axios.post(`${BASE_URL}order/`, {
        address,
        payment_method
    }, customerConfig()))
}
export const createOrderRow = ({ orderId, product, quantity }) => {
    return makeRequest(() => axios.post(`${BASE_URL}order/${orderId}/item/`, {
        product,
        quantity
    }, customerConfig()))
}
export const createOrderPayment = ({ orderId }) => {
    return makeRequest(() => axios.post(`${BASE_URL}billing/purchase/order/${orderId}`, {}, customerConfig()))
}