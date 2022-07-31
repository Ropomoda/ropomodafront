import axios from 'axios';
import { makeRequest, BASE_URL, visitorConfig } from '../config';



//TODO Getting products from categories and collections
export const getAllProducts = () => {
    return makeRequest(() => axios.get(`${BASE_URL}store/product/?category=1`, visitorConfig()))
}
export const getSingleProduct = ({ code }) => {
    return makeRequest(() => axios.get(`${BASE_URL}store/product/${code}`, visitorConfig()))
}