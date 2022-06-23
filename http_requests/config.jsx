


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