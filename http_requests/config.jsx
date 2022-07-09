export const baseUrl = 'http://127.0.0.1:8000/api/v1/';


export const customerConfig = () => {
    return {
        
    }
}
export const visitorConfig = () => {
    return {
        
    }
}
export const makeRequest = async (
    reqFunc,
    sendIssue = true
) => {
    try {
        const response = await reqFunc();
        return Promise.resolve(response);
    } catch (err) {
        console.log(err);
        return Promise.reject(err);
    }
}