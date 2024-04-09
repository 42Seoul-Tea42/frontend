'use client';

import SignupForm from './components/SignupForm';
import { useSelector, useDispatch } from 'react-redux';
import { postSignupDataToServer, postVerifyEmailToServer } from '../../redux/services/accountService';
import { RootState } from '../../redux/store';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Signup: React.FC = () => {
  const password = useSelector((state: RootState) => state.accountService.user.password);
  const reEnterPassword = useSelector((state: RootState) => state.accountService.reEnterPassword);
  const email = useSelector((state: RootState) => state.accountService.user.email);
  const isEmailDuplicateChecked = useSelector((state: RootState) => state.accountService.isEmailDuplicateChecked);
  const isEmailVerifyChecked = useSelector((state: RootState) => state.accountService.isEmailVerifyChecked);
  const isSignup = useSelector((state: RootState) => state.accountService.isSignup);

  const dispatch = useDispatch();
  const router = useRouter();

  const validatePasswordMatch = () => password === reEnterPassword;

  const submitSignupForm = (event: React.FormEvent<HTMLFormElement>) => {
    /** form이 내부 상태를 가지고 있기 때문에 신뢰할 수 있는 단일 동작을 위해 폼 이벤트 방지 */
    event.preventDefault();

    /** 이메일 중복체크 검사 */
    // if (!isEmailDuplicateChecked) {
    //   alert('이메일 중복체크를 검사해주세요.');
    //   return;
    // }

    /** 비밀번호 일치하는지 검사 */
    // if (!validatePasswordMatch()) {
    //   alert('비밀번호가 일치하지 않습니다.');
    //   return;
    // }

    /** 입력값의 유효성 검사 */
    // 빈 값
    // 이상한 문자 & 길이

    // 회원가입 버튼을 누르면 자동으로 이메일 인증까지 보내버리기
    dispatch<any>(postSignupDataToServer());
    dispatch<any>(postVerifyEmailToServer());
  };

  useEffect(() => {
    if (isSignup) {
      alert(`회원가입이 완료되었습니다. 가입하신 이메일 ${email} 로 인증을 진행해주세요.`);
    }
  }, [isSignup]);

  useEffect(() => {
    if (isEmailVerifyChecked) {
      alert('이메일 인증이 완료되었습니다. 로그인해주세요.');
      router.push('/login');
    }
  }, [isEmailVerifyChecked]);

  return (
    <div className="w-full h-screen flex justify-center">
      <div className="flex flex-col items-center justify-center">
        <SignupForm handler={submitSignupForm} />
      </div>
    </div>
  );
};

export default Signup;
