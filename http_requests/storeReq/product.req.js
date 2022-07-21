import axios from 'axios';
import { makeRequest, BASE_URL, visitorConfig } from '../config';



export const getAllProducts = () => {
    return makeRequest(() => axios.get(`${BASE_URL}store/products/?format=json`, visitorConfig())
    )
}