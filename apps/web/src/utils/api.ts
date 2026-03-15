import axios, {type AxiosInstance } from 'axios';
import type { AuthResponse, AuthRequest } from '../../../../packages/types';


const api: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 1000, 
    headers: {'Accept': 'application/json'}
});


export const authApi = {
    signup: (data: AuthRequest) => api.post<AuthResponse>('/auth/signup', data),
    
    login: (data: AuthRequest) => api.post<AuthResponse>('auth/login', data)

}