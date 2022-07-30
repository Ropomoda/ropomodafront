export const BASE_URL = "https://api.ropomoda.com/v1/";
import { store } from '../store/store';
import { getTokenType } from '../helper/tokenCredentials';

export const customerConfig = () => {
    const tokenType = getTokenType();
    return {
        headers: {
            Authorization: `${tokenType} ${store.getState().account.token}`,
            // "x-client-version": `web/${version["x-client-version"]}`,
        },
    };
}
export const visitorConfig = () => {
    return {

    }
}
export const makeRequest = (
    reqFunc,
    sendIssue = true
) => {
    const response = reqFunc();
    return response;
}