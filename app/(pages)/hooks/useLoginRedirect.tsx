import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { RootState } from '@/redux/store';
import { Oauth } from '@/redux/enum';

function useLoginRedirect() {
  const steps = useSelector((state: RootState) => state.loginSlice.steps);
  const isLogin = useSelector((state: RootState) => state.loginSlice.steps.isLogin);
  const router = useRouter();

  useEffect(() => {
    if (!isLogin) {
      return;
    }
    // 로그인 단계에 따라 리다이렉트
    const redirectToNextStep = () => {
      if (!steps.emailCheck && steps.oauth === Oauth.NONE) {
        alert('이메일 인증을 진행해주세요.');
        return '/auth/login';
      } else if (!steps.profileCheck) {
        return '/auth/upload/profile';
      } else if (!steps.emojiCheck) {
        return '/auth/upload/emoji';
      } else return '/home';
    };

    router.push(redirectToNextStep());
  }, [isLogin]);
}

export default useLoginRedirect;
