import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { RootState } from '@/redux/store';

// legacy test
// type LoginStepsProps = {
// trigger: any;
// };

function useLoginRedirect() {
  const steps = useSelector((state: RootState) => state.loginSlice.steps);
  const isLogin = useSelector((state: RootState) => state.loginSlice.steps.isLogin);
  const router = useRouter();
  useEffect(() => {
    // 로그인 단계에 따라 리다이렉트
    const redirectToNextStep = () => {
      // if (!localStorage.getItem('login')) {
      //   if (!steps.isLogin) {
      //     return '/auth/login';
      //   }
      //   if (!steps.emailCheck) {
      //     alert('이메일 인증을 진행해주세요.');
      //     return '/auth/login';
      //   }
      //   if (!steps.profileCheck) {
      //     return '/auth/upload/profile';
      //   }
      //   if (!steps.emojiCheck) {
      //     return '/auth/upload/emoji';
      //   }
      // }
      return '';
    };

    router.push(redirectToNextStep());
  }, [isLogin]);
}

export default useLoginRedirect;
