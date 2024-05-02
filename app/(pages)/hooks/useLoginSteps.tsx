import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useRouter } from 'next/navigation';

type LoginStepsProps = {
  trigger: any;
};

function useLoginSteps({ trigger }: LoginStepsProps) {
  const steps = useSelector((state: RootState) => state.loginSlice.steps);
  const router = useRouter();
  useEffect(() => {
    const redirectToNextStep = () => {
      if (!steps.isLogin) {
        alert('로그인이 필요합니다.');
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

  useEffect(() => {}, []);
}

export default useLoginSteps;
