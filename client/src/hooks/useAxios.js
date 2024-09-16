import axios from 'axios'
import { useContext } from 'react'
import Cookies from 'js-cookie'
import { DataContext } from '../context/DataProvider'

const useAxios = () => {
    const data = useContext(DataContext)
    const [accessToken, setAccessToken] = data.token

    const config = {
        baseURL: 'http://localhost:8080/',
        withCredentials: true,
        headers: {
            "Content-Type": "application/json"
        },
    }
    const axiosInstance = axios.create(config)
    axiosInstance.saveRefreshTokenToCookie = (refreshToken) => {
        Cookies.set('refreshToken', refreshToken, { 
            expires: 7,  // Thời gian sống của cookie, ví dụ: 7 ngày
            secure: true,  // Cookie chỉ được truyền qua HTTPS
            sameSite: 'Strict'  // Cookie chỉ được gửi cùng với các yêu cầu đến cùng một trang
        });
    };
    
    axiosInstance.getRefreshTokenFromCookie = () => {
        return Cookies.get('refreshToken');
    };

    axiosInstance.deleteRefreshTokenFromCookie = () => {
        return Cookies.remove('refreshToken');
    }

    axiosInstance.interceptors.request.use(
        async request => {
            if (accessToken) {
                request.headers.Authorization = `Bearer ${accessToken}`
            }
            return request
        }
    )
    
    axiosInstance.interceptors.response.use(
        response => response,
        async (errorResponse) => {
            const config = errorResponse.config;
            if (errorResponse.response.status === 401 && !config._retry) {
                config._retry = true;
                const newAccessToken = await refreshAccessToken();
                if (newAccessToken) {
                    localStorage.setItem('accessToken', newAccessToken);
                    setAccessToken(newAccessToken)
                    return axios(config);
                }
            }
            return Promise.reject(errorResponse);
        }
    );
    
    const refreshAccessToken = async () => {
        try {
            const response = await axios.post('/api/refresh-token', {
                refreshToken: axiosInstance.getRefreshTokenFromCookie(),
            });
            return response.data.accessToken;
        } catch (error) {
            console.error('Failed to refresh token:', error);
            return null;
        }
    };

    return axiosInstance
}

export default useAxios