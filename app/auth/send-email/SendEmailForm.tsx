'use client';

import { useDispatch, useSelector } from 'react-redux';
import { EmailInput, LoginIdInput, PasswordInput } from '../../(pages)/forms';
import { CardForm, DuplicateCheckForm, SubmitButton } from '../../UI';
import { RootState } from '../../redux/store';
import { getCheckDuplicateEmail } from '../../redux/slices/signupSlice';
import { useEffect } from 'react';

function SendEmailForm() {
  const dispatch = useDispatch();
  const password = useSelector((state: RootState) => state.accountSlice.user.account.password);
  const isLogin = useSelector((state: RootState) => state.loginSlice.steps.isLogin);
  const isSignup = useSelector((state: RootState) => state.signupSlice.validation.isSignup);

  useEffect(() => {
    if (isSignup || isLogin) alert('이메일을 인증을 진행해주세요.');
  }, [isLogin, isSignup]);

  return (
    <CardForm
      onSubmit={() => {}}
      subject={'이메일 인증을 진행해주세요.'}
      inputs={
        <div>
          <div className="mb-10">
            <SubmitButton text="이메일 다시보내기" />
          </div>
          <hr className="mb-10"></hr>
          <h5 className="text-lg font-semibold mb-5 underline decoration-wavy decoration-blue-500/50 ">
            이메일을 잘못입력했다면 변경해주세요.
          </h5>
          <LoginIdInput />
          <PasswordInput />
          <DuplicateCheckForm
            form={<EmailInput />}
            text="check"
            onClick={() => dispatch<any>(getCheckDuplicateEmail())}
          />
        </div>
      }
      button={<SubmitButton text="이메일 변경하기" onClick={() => {}} />}
    />
  );
}

export default SendEmailForm;
