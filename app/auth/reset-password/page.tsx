'use client';

import { useDispatch, useSelector } from 'react-redux';
import { SubmitButton } from '../../UI';
import { getResetPasswordEmail } from '../../redux/slices/loginSlice';
import { RootState } from '../../redux/store';
import { LoginIdInput, PasswordInput } from '../../(pages)/forms';
import { postResetPassword, setAccountLoginId } from '../../redux/slices/accountSlice';
import CardForm from '../../(pages)/forms/CardForm';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ReEnterPassword from '../../(pages)/forms/ReEnterPassword';

function ResetPasswordDetail() {
  const dispatch = useDispatch();
  const params = useSearchParams();
  const key = params.get('key');
  const loginId = useSelector((state: RootState) => state.accountSlice.user.identity.loginId);

  return (
    <>
      {key ? (
        <CardForm
          onSubmit={() => dispatch<any>(postResetPassword(key))}
          subject="재설정할 비밀번호를 입력해주세요."
          inputs={
            <>
              <PasswordInput />
              <ReEnterPassword />
              <div className="mb-10"></div>
            </>
          }
          button={<SubmitButton type="submit" text="비밀번호 재설정 요청" />}
        />
      ) : (
        <CardForm
          onSubmit={() => dispatch<any>(getResetPasswordEmail(loginId))}
          subject="아이디를 입력해주세요."
          inputs={
            <div className="mb-10 mt-10">
              <LoginIdInput />
            </div>
          }
          button={<SubmitButton type="submit" text="비밀번호 재설정 이메일 요청" />}
        />
      )}
    </>
  );
}

function ResetPassword() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetPasswordDetail />
    </Suspense>
  );
}

export default ResetPassword;
