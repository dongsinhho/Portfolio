import axios from 'axios'
import { useContext } from 'react'
import Cookies from 'js-cookie'
import { DataContext } from '../context/DataProvider'

const useAxios = () => {
    const data = useContext(DataContext)
    const [accessToken, setAccessToken] = data.token

    const config = {
        baseURL: "http://127.0.0.1:4000", //process.env.API_URL ?? process.env.REACT_APP_API_URL,
        withCredentials: true,
        headers: {
            "Content-Type": "application/json"
        },
    }
    const axiosInstance = axios.create(config)
    axiosInstance.isRefreshing = false;
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
            if (request.url !== "/login" && accessToken) {
                request.headers.Authorization = `Bearer ${accessToken}`
            }
            return request
        }
    )
    
    axiosInstance.interceptors.response.use(
        response => response,
        async (errorResponse) => {
            const config = errorResponse.config;
            if (errorResponse.config.url === "/login") {
                return Promise.reject(errorResponse);
            }
            if (errorResponse.response.status === 401 && !config._retry) {
                config._retry = true;
                const newAccessToken = await axiosInstance.refreshAccessToken();
                if (newAccessToken) {
                    setAccessToken(newAccessToken)
                    return axios(config);
                }
            }
            return errorResponse.response;
        }
    );

    let refreshingPromise = null;
    
    axiosInstance.refreshAccessToken = async () => {
        let returnData = null;
        const refreshLogic = async () => {
            const refreshToken = axiosInstance.getRefreshTokenFromCookie(); 
            const response = await axiosInstance.post('/refresh', JSON.stringify({
                refreshToken: refreshToken,
            }));
            returnData = response.data.accessToken;
        }
        try {
            if (refreshingPromise) {
                await refreshingPromise;
            }
            if (!refreshingPromise) {
                refreshingPromise = refreshLogic();
                await refreshingPromise;

                refreshingPromise = null;
            }
            return returnData;
        } 
        catch (error) {
            console.error('Failed to refresh token:', error);
            return returnData;
        }
    };
    
    return axiosInstance
}

export default useAxios