'use client';
import Indicator from '@/(pages)/components/Indicator';
import { EmailInput, LoginIdInput, PasswordInput } from '@/(pages)/forms';
import CardForm from '@/(pages)/forms/CardForm';
import { SubmitButton } from '@/ui';
import { RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { getResendEmail } from '@/redux/slices/login/loginExtraReducers';

export function SendEmail() {
  const dispatch = useDispatch();
  const validation = useSelector((state: RootState) => state.signupSlice.validation);

  return (
    <CardForm
      onSubmit={() => {}}
      subject={'이메일을 못받으셨나요?'}
      inputs={<div className="mb-10"></div>}
      button={<SubmitButton text="이메일 다시보내기" onClick={() => dispatch<any>(getResendEmail())} />}
    />
  );
}
