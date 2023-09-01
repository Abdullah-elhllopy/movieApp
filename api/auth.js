import axios from "axios";
const apiBaseUrl = 'https://dummyjson.com/auth/login';
const apiCall = async (endpoint, params) => {
    const options = {
        method:'POST',
        url: endpoint,
        data :params
    };
    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.log('error: ', error);
        return {};
    }
}

export const LoginAction = (data) => {
    return apiCall(apiBaseUrl, data);
}