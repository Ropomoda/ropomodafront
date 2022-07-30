import axios from 'axios';
import { makeRequest, BASE_URL, visitorConfig, customerConfig } from '../config';



export const sendOTPToken = ({ mobile }) => {
    return makeRequest(() => axios.post(`${BASE_URL}account/mobile/`
        , {
            mobile: mobile
        }
        , visitorConfig())
    )
}
export const loginWithOTPToken = ({ mobile, token }) => {
    return makeRequest(() => axios.post(`${BASE_URL}account/token/`,
        {
            mobile: mobile,
            token: token,
        },
        visitorConfig())
    )
}
export const getProfile = () => {
    return makeRequest(() => axios.get(`${BASE_URL}account/profile/`,
        customerConfig())
    )
}
export const getUser = () => {
    return makeRequest(() => axios.get(`${BASE_URL}account/`,
        customerConfig())
    )
}