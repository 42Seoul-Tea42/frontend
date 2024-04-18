import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

type useLoginRoutingProps = {
  isLogin: boolean;
};

function useLoginRouting({ isLogin }: useLoginRoutingProps) {
  const loginSteps = useSelector((state: RootState) => state.loginSlice.steps);
  const router = useRouter();

  // 로그인 단계에 따른 유저 이동 흐름
  useEffect(() => {
    // 로그인 상태 아닐경우 라우팅 방지
    if (!isLogin) return;

    switch (true) {
      case !loginSteps.emailVerification:
        router.push('/auth/send-email');
        break;
      case !loginSteps.profileCreation:
        router.push('/auth/profile');
        break;
      case !loginSteps.emojiSelection:
        router.push('/auth/emoji');
        break;
      default:
        router.push('/home');
        break;
    }
  }, [loginSteps]);
}

export default useLoginRouting;
