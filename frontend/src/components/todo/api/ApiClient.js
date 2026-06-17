import axios from 'axios'

export const apiClient = axios.create(
    {
        baseURL: 'https://todo-backend-final-1on9.onrender.com'
    }
);
