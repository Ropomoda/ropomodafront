export const BASE_URL =
    process.env.NODE_ENV === "production"
        ? process.env.NEXT_PUBLIC_API_BASE_URL
        : "http://localhost:8525";

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