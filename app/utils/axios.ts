import axios from 'axios';
import { SERVER_URL } from '../../global';
import { getCookie } from './cookie';

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

    const token = getCookie('token')
    if (token) config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(

  response => {
  // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
  // 응답 데이터가 있는 작업 수행
  return response;
  }, 

  error => {
  // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
  // 응답 오류가 있는 작업 수행
  return Promise.reject(error);
  }
);


export default axiosInstance;