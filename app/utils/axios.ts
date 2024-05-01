import axios from 'axios';
import { SERVER_URL } from '../../global';

// Axios 인스턴스 생성
const axiosInstance = axios.create({
  // baseURL: SERVER_URL,
  // testtest
  baseURL: 'http://localhost:80',
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 10000
});

// Axios 요청 전에 위치 정보를 추가하기 위한 인터셉터 추가
axiosInstance.interceptors.request.use(
  config => {
    // 유저 위치정보 추가
    const userLocation = localStorage.getItem('userLocation');
    if (userLocation) {
      const { latitude, longitude } = JSON.parse(userLocation);
      config.headers['x-user-location'] = `${latitude},${longitude}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  response => {
    // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 데이터가 있는 작업 수행
    console.log(response.data);
    return response;
  },

  error => {
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 오류가 있는 작업 수행
    console.log(error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
