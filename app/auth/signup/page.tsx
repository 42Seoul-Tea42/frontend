'use client';

import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useValidationCheck } from './hooks/useValidationCheck';
import { useEffect } from 'react';
import {
  closeSignupError,
  getCheckDuplicateEmail,
  getCheckDuplicateId,
  postSignup,
  setIsEmailDuplicateChecked,
  setIsLoginIdDuplicateChecked
} from '@/redux/slices/signupSlice';
import CardForm from '@/(pages)/forms/CardForm';
import ReEnterPassword from '@/(pages)/forms/ReEnterPassword';
import Indicator from '@/(pages)/components/Indicator';
import { RootState } from '@/redux/store';
import { EmailInput, LoginIdInput, PasswordInput, UserNameInput } from '@/(pages)/forms';
import { SubmitButton } from '@/UI';

const Signup: React.FC = () => {
  const isSignup = useSelector((state: RootState) => state.signupSlice.validation.isSignup);
  const error = useSelector((state: RootState) => state.signupSlice.error);
  const user = useSelector((state: RootState) => state.accountSlice.user);
  const validation = useSelector((state: RootState) => state.signupSlice.validation);
  const showAlertsForValidation = useValidationCheck();

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (isSignup) {
      router.push('/auth/login');
    }
  }, [isSignup]);

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(closeSignupError());
    }
  }, [error]);

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
          <EmailInput
            extended={() => {
              // 이메일 중복체크 후 재입력시 중복체크 여부 초기화
              dispatch(setIsEmailDuplicateChecked(false));
            }}
            addJSX={
              <Indicator
                // 이메일 중복체크
                onClick={() => dispatch<any>(getCheckDuplicateEmail())}
                color={validation.isEmailDuplicateChecked ? 'bg-green-500' : 'hover:opacity-50 bg-red-500'}
                text={validation.isEmailDuplicateChecked ? '' : 'click'}
              />
            }
          />
          <UserNameInput />
          <LoginIdInput
            extended={() => {
              // 아이디 중복체크 후 재입력시 중복체크 여부 초기화
              dispatch(setIsLoginIdDuplicateChecked(false));
            }}
            addJSX={
              <Indicator
                // 아이디 중복체크
                onClick={() => dispatch<any>(getCheckDuplicateId())}
                color={validation.isIdDuplicateChecked ? 'bg-green-500' : 'hover:opacity-50 bg-red-500'}
                text={validation.isIdDuplicateChecked ? '' : 'click'}
              />
            }
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
