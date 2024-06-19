import { Auth } from '@/redux/enum';
import axiosInstance from './axios';

const handleAuthError = async (error: any) => {
  const flag = checkInvalidStatus(error.response.data.msg);

  if (flag === Auth.accessToken) {
    return await reRequest(error.config);
  } else if (flag === Auth.refreshToken) {
    redirectLogin();
  }

  return Promise.reject(error);
};

// 토큰 에러 종류 분류 로직
const checkInvalidStatus = (message: any) => {
  // 리프레시 플래그를 제외한 나머지 플래그는 전부 재요청 필요
  if (message && message.includes('refresh')) {
    return Auth.refreshToken;
  } else {
    return Auth.accessToken;
  }
};

// 토큰 재발급 요청
const reGenerateToken = async () => {
  try {
    await axiosInstance.patch('/user/reset-token');
  } catch (error) {
    throw error;
  }
};

// 토큰 재발급 후 재요청
const reRequest = async (originalRequestConfig: any) => {
  try {
    await reGenerateToken();
    await axiosInstance.patch('/user/reset-token');
    return axiosInstance(originalRequestConfig);
  } catch (error) {
    redirectLogin();
  }
};

// 재 로그인 유저 리다이렉트
export const redirectLogin = () => {
  alert('토큰이 만료되었습니다. 재 로그인 해주세요.');
  window.location.href = '/auth/login';
};

export default handleAuthError;
