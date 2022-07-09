import axios from 'axios';
import { makeRequest, baseUrl, visitorConfig } from '../config';



export const  getAllProducts = ()=>{
    return makeRequest(axios.get(`${baseUrl}store/products/` , visitorConfig()))
}