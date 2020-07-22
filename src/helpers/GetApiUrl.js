const API_URL = process.env.REACT_APP_API_URL;

export const getApiUrl = url => {
    return `${API_URL}/${url}`;
};
