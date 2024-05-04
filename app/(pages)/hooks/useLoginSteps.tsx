import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useRouter } from 'next/navigation';
import { getLogin } from '../../redux/slices/loginSlice';

type LoginStepsProps = {
  trigger: any;
};

function useLoginSteps({ trigger }: LoginStepsProps) {
  const steps = useSelector((state: RootState) => state.loginSlice.steps);
  const router = useRouter();
  useEffect(() => {
    // 로그인 단계에 따라 리다이렉트
    const redirectToNextStep = () => {
      if (!steps.isLogin) {
        return '/auth/login';
      }
      if (!steps.emailVerification) {
        alert('이메일 인증을 진행해주세요.');
        return '/auth/login';
      }
      if (!steps.profileCreation) {
        return '/auth/upload/profile';
      }
      if (!steps.emojiSelection) {
        return '/auth/upload/emoji';
      }
      return '/home';
    };

    const nextStep = redirectToNextStep();
    router.push(nextStep);
  }, [trigger]);
}

export default useLoginSteps;
