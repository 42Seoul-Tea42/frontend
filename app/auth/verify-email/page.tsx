'use client';
import Indicator from '@/(pages)/components/Indicator';
import { EmailInput, LoginIdInput, PasswordInput } from '@/(pages)/forms';
import CardForm from '@/(pages)/forms/CardForm';
import { SubmitButton } from '@/ui';
import { getResendEmail } from '@/redux/slices/loginSlice';
import { getCheckDuplicateEmail, setIsEmailDuplicateChecked } from '@/redux/slices/signupSlice';
import { RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMyEmail } from '@/redux/slices/accountSlice';

function emailVerify() {
  const dispatch = useDispatch();

  const email = useSelector((state: RootState) => state.accountSlice.user.email);
  const changeEmail = () => {};

  useEffect(() => {
    dispatch<any>(getMyEmail());
  }, []);
  return (
    <CardForm
      onSubmit={() => {}}
      subject={'이메일 인증이 필요합니다.'}
      inputs={
        <div className="mb-10 space-y-5">
          <p className="text-lg font-bold">현재이메일 : {email}</p>
          <h3 className="text-lg font-bold">이메일 바꾸기</h3>
          <div className="border">
            <LoginIdInput />
            <PasswordInput />
            <EmailInput />
            <SubmitButton text="이메일 변경" onClick={changeEmail} />
          </div>

          <h3 className="text-bold text-lg">혹시 이메일을 못받으셨나요? </h3>
        </div>
      }
      //test
      button={<SubmitButton text="이메일 다시보내기" onClick={() => dispatch<any>(getResendEmail())} />}
    />
  );
}

export default emailVerify;
