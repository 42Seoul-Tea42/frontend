'use client';

import { useSelector, useDispatch } from 'react-redux';
import { useValidationCheck } from './hooks/useValidationCheck';
import { useEffect, useLayoutEffect } from 'react';
import {
  clearSignupFlag,
  closeSignupError,
  setIsEmailDuplicateChecked,
  setIsLoginIdDuplicateChecked
} from '@/redux/slices/signup/signupSlice';
import CardForm from '@/(pages)/forms/CardForm';
import ReEnterPassword from '@/(pages)/forms/ReEnterPassword';
import Indicator from '@/(pages)/components/Indicator';
import { RootState } from '@/redux/store';
import { EmailInput, LoginIdInput, PasswordInput, UserNameInput } from '@/(pages)/forms';
import { SubmitButton } from '@/ui';
import { getCheckDuplicateEmail, getCheckDuplicateId, postSignup } from '@/redux/slices/signup/signupExtraReducers';
import usePasswordValidMessage from '@/(pages)/setting/hooks/useValidMessage';
import { postLogin } from '@/redux/slices/login/loginExtraReducers';

const Signup: React.FC = () => {
  const validation = useSelector((state: RootState) => state.signupSlice.validation);
  const [validate] = useValidationCheck();

  const dispatch = useDispatch();

  const signup = () => {
    if (!validate) {
      return;
    }
    dispatch<any>(postSignup());
  };

  const isSignup = useSelector((state: RootState) => state.signupSlice.validation.isSignup);
  useEffect(() => {
    if (isSignup) {
      dispatch<any>(postLogin());
      clearSignupFlag();
    }
  }, [isSignup]);

  useLayoutEffect(() => {
    dispatch(closeSignupError());
  }, []);

  const loading = useSelector((state: RootState) => state.signupSlice.loading);
  const error = useSelector((state: RootState) => state.signupSlice.error);

  const passwordErrorMessage = usePasswordValidMessage();
  return (
    <CardForm
      loading={loading} // 카드폼 재활용을 위해 props로 분리
      onSubmit={signup}
      subject="회원가입을 위한 계정정보를 입력해주세요."
      inputs={
        <>
          <p className="text-md font-md p-1 pt-2 pb-2 text-red-500">{error}</p>
          <div className="border p-2 mb-4 rounded-xl">
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
                  text={validation.isEmailDuplicateChecked ? '' : '👇'}
                  pulse={validation.isEmailDuplicateChecked ? false : true}
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
                  text={validation.isIdDuplicateChecked ? '' : '👇'}
                  pulse={validation.isIdDuplicateChecked ? false : true}
                />
              }
            />
            <PasswordInput />
            <ReEnterPassword stateColor={passwordErrorMessage ? 'bg-red-500' : 'bg-green-500'} />
          </div>
        </>
      }
      button={<SubmitButton text="회원가입" />}
    />
  );
};

export default Signup;
