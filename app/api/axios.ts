import axios from 'axios';

// Axios 인스턴스 생성
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  withCredentials: true, // 자격증명을 포함한 쿠키를 서버로 전달
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 10000
});

// Axios 요청 전에 위치 정보를 추가하기 위한 인터셉터 추가
axiosInstance.interceptors.request.use(
  config => {
    // 유저 위치정보 추가
    const userLocation = localStorage.getItem('user-location');
    if (userLocation) {
      const { latitude, longitude } = JSON.parse(userLocation);
      config.headers['x-user-longitude'] = `${longitude}`;
      config.headers['x-user-latitude'] = `${latitude}`;
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
    return response;
  },

  error => {
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 오류가 있는 작업 수행
    switch (error.response.status) {
      case 401:
        alert('인증 오류입니다. 재 로그인 해주세요.');
        // window.location.href = '/auth/login';
        break;
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
