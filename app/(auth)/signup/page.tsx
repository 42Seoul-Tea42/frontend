'use client';

import SignupForm from './components/SignupForm';
import { useSelector, useDispatch } from 'react-redux';
import { postSignupDataToServer, postVerifyEmailToServer } from '../../redux/oldslices/accountSlice';
import { RootState } from '../../redux/store';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useValidationCheck } from './hooks/useValidationCheck';

const Signup: React.FC = () => {
  const email = useSelector((state: RootState) => state.accountSlice.user.account.email);
  const isSignup = useSelector((state: RootState) => state.accountSlice.isSignup);
  const showAlertsForValidation = useValidationCheck();

  const dispatch = useDispatch();
  const router = useRouter();

  const submitSignupForm = (event: React.FormEvent<HTMLFormElement>) => {
    /** form이 내부 상태를 가지고 있기 때문에 신뢰할 수 있는 단일 동작을 위해 폼 이벤트 방지 */
    event.preventDefault();

    // 예외처리
    if (!showAlertsForValidation()) return;

    // 서버로 회원가입 데이터를 전송
    dispatch<any>(postSignupDataToServer());
  };

  useEffect(() => {
    if (isSignup) {
      alert(`회원가입이 완료되었습니다. 가입하신 이메일 ${email} 로 인증을 진행해주세요.`);
    }
  }, [isSignup]);

  return (
    <div className="w-full h-screen flex justify-center">
      <div className="flex flex-col items-center justify-center">
        <SignupForm onSubmit={submitSignupForm} />
      </div>
    </div>
  );
};

export default Signup;
