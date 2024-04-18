'use client';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { useRouter } from 'next/navigation';
import { useValidationCheck } from './hooks/useValidationCheck';
import { useEffect } from 'react';
import { CardForm, DuplicateCheckForm, ReEnterPassword, SubmitButton } from '../../UI';
import { EmailInput, LoginIdInput, PasswordInput, UserNameInput } from '../../(pages)/forms';
import {
  closeSignupError,
  getCheckDuplicateEmail,
  getCheckDuplicateId,
  postSignup
} from '../../redux/slices/signupSlice';

const Signup: React.FC = () => {
  const isSignup = useSelector((state: RootState) => state.signupSlice.validation.isSignup);
  const error = useSelector((state: RootState) => state.signupSlice.error);
  const showAlertsForValidation = useValidationCheck();

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (error) {
      alert(error + ': 다시 시도해주세요.');
      dispatch(closeSignupError());
    }
  }, [error]);

  useEffect(() => {
    if (isSignup) {
      alert('회원가입이 완료되었습니다.');
      router.push('/auth/send-email');
    }
  }, [isSignup]);

  const signup = () => {
    // if (!showAlertsForValidation()) return;
    dispatch<any>(postSignup());
  };

  return (
    <CardForm
      onSubmit={signup}
      subject="회원가입을 위한 계정정보를 입력해주세요."
      inputs={
        <>
          <DuplicateCheckForm
            form={<EmailInput />}
            text="check"
            onClick={() => dispatch<any>(getCheckDuplicateEmail())}
          />
          <UserNameInput />
          <DuplicateCheckForm
            form={<LoginIdInput />}
            text="check"
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
