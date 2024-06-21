import { Route } from '@/redux/enum';
import axiosInstance from './axios';

const handleForbiddenError = async (error: any) => {
  const response = await axiosInstance.get('/user/login');
  if (response.status === 200) {
    if (response.data.email_check === false) {
      window.location.href = Route.VERIFY_EMAIL;
    } else if (response.data.profile_check === false) {
      window.location.href = Route.PROFILE;
    } else if (response.data.emoji_check === false) {
      window.location.href = Route.EMOJI;
    }
  }
};

export default handleForbiddenError;
