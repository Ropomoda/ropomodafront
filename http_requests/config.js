export const BASE_URL = process.env["NEXT_PUBLIC_API_URL"];

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