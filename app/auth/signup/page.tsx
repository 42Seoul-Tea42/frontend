'use client';

import SignupForm from './components/SignupForm';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { useRouter } from 'next/navigation';
import { useValidationCheck } from './hooks/useValidationCheck';
import { postSignupToServer } from '../../redux/slices/signupSlice';
import { useEffect } from 'react';

const Signup: React.FC = () => {
  const error = useSelector((state: RootState) => state.signupSlice.error);
  const showAlertsForValidation = useValidationCheck();

  const dispatch = useDispatch();
  const router = useRouter();

  const submitSignupForm = (event: React.FormEvent<HTMLFormElement>) => {
    /** form이 내부 상태를 가지고 있기 때문에 신뢰할 수 있는 단일 동작을 위해 폼 이벤트 방지 */
    event.preventDefault();

    // 예외처리 유효성 검사
    // if (!showAlertsForValidation()) return;

    // 서버로 회원가입 데이터를 전송
    // dispatch<any>(postSignupToServer());

    alert('회원가입이 완료되었습니다. 로그인 해주세요~');
    router.push('/auth/login');
  };

  useEffect(() => {
    if (error) {
      alert(error + ': 다시 시도해주세요.');
    }
  }, [error]);

  return (
    <div className="w-full h-screen flex justify-center">
      <div className="flex flex-col items-center justify-center">
        <SignupForm onSubmit={submitSignupForm} />
      </div>
    </div>
  );
};

export default Signup;
