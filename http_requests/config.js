export const BASE_URL = "https://api.ropomoda.com/api/v1/";

export const customerConfig = () => {
    return {

    }
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