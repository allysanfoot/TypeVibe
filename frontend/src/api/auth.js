import axios from 'axios';

const API_URL = 'http://localhost:8080'; // Replace with your backend URL if it's different

export const register = async (email, password) => {
    return axios.post(`${API_URL}/register`, { email, password });
};

export const login = async (email, password) => {
    return axios.post(`${API_URL}/login`, { email, password });
};

export const getProtectedData = async (token) => {
    return axios.get(`${API_URL}/protected`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};
