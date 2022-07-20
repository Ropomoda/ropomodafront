export const baseUrl = process.env["ROPOMODA_API_BASE_URL"] || '';


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