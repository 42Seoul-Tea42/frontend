import axios from 'axios';
import { SERVER_URL } from '../../global';

// Axios 인스턴스 생성
const axiosInstance = axios.create({
  baseURL: SERVER_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 10000
});

// Axios 요청 전에 실행되는 인터셉터 추가
axiosInstance.interceptors.request.use(
  config => {
    // 쿠키에서 토큰 가져오기
    // const token = document.cookie
    //   .split('; ')
    //   .find(row => row.startsWith('token='))
    //   ?.split('=')[1];

    // 토큰이 존재하는 경우 헤더에 추가
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);


export default axiosInstance;