import axiosInstance from './axios';

const handleForbiddenError = async (error: any) => {
  const response = await axiosInstance.get('/user/login');
  if (response.status === 200) {
    if (response.data.email_check === false) {
      window.location.href = '/auth/verify-email';
    } else if (response.data.profile_check === false) {
      window.location.href = '/auth/upload/profile';
    } else if (response.data.emoji_check === false) {
      window.location.href = '/auth/upload/emoji';
    }
  }
};

export default handleForbiddenError;
