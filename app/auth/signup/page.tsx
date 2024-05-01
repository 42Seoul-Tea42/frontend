'use client';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { useRouter } from 'next/navigation';
import { useValidationCheck } from './hooks/useValidationCheck';
import { useEffect } from 'react';
import { CardForm, DuplicateCheckForm, ReEnterPassword, SubmitButton } from '../../UI';
import { EmailInput, LoginIdInput, PasswordInput, UserNameInput } from '../../(pages)/forms';
import { setAccountEmail, setAccountLoginId } from '../../redux/slices/accountSlice';
import {
  closeSignupError,
  getCheckDuplicateEmail,
  getCheckDuplicateId,
  postSignup,
  setIsEmailDuplicateChecked,
  setIsLoginIdDuplicateChecked
} from '../../redux/slices/signupSlice';

const Signup: React.FC = () => {
  const isSignup = useSelector((state: RootState) => state.signupSlice.validation.isSignup);
  const error = useSelector((state: RootState) => state.signupSlice.error);
  const user = useSelector((state: RootState) => state.accountSlice.user);
  const validation = useSelector((state: RootState) => state.signupSlice.validation);
  const showAlertsForValidation = useValidationCheck();

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (error) {
      alert(error + '다시 시도해주세요.');
      dispatch(closeSignupError());
    }
  }, [error]);

  useEffect(() => {
    if (isSignup) {
      router.push('/auth/login');
    }
  }, [isSignup]);

  const signup = () => {
    if (!showAlertsForValidation()) return;
    dispatch<any>(postSignup());
  };

  return (
    <CardForm
      onSubmit={signup}
      subject="회원가입을 위한 계정정보를 입력해주세요."
      inputs={
        <>
          <DuplicateCheckForm
            form={
              <EmailInput
                value={user.account.email}
                onChange={e => {
                  dispatch(setAccountEmail(e.target.value));
                  // 이메일 중복체크 후 재입력시 중복체크 여부 초기화
                  dispatch(setIsEmailDuplicateChecked(false));
                }}
              />
            }
            text={validation.isEmailDuplicateChecked ? 'V' : 'check'}
            onClick={() => {
              dispatch<any>(getCheckDuplicateEmail());
            }}
          />
          <UserNameInput />
          <DuplicateCheckForm
            form={
              <LoginIdInput
                value={user.identity.loginId}
                onChange={e => {
                  dispatch(setAccountLoginId(e.target.value));
                  // 아이디 중복체크 후 재입력시 중복체크 여부 초기화
                  dispatch(setIsLoginIdDuplicateChecked(false));
                }}
              />
            }
            text={validation.isIdDuplicateChecked ? 'V' : 'check'}
            onClick={() => dispatch<any>(getCheckDuplicateId())}
          />
          <PasswordInput />
          <ReEnterPassword />
        </>
      }
      button={<SubmitButton text="회원가입" />}
    />
  );
};

export default Signup;
