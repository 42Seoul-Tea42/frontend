'use client';

import { useDispatch, useSelector } from 'react-redux';
import { EmailInput, LoginIdInput, PasswordInput } from '../../(pages)/forms';
import { CardForm, DuplicateCheckForm, SubmitButton } from '../../UI';
import { RootState } from '../../redux/store';
import { getCheckDuplicateEmail, setIsEmailDuplicateChecked } from '../../redux/slices/signupSlice';
import { useEffect } from 'react';
import { setAccountEmail, setAccountLoginId } from '../../redux/slices/accountSlice';

function page() {
  const dispatch = useDispatch();
  const password = useSelector((state: RootState) => state.accountSlice.user.account.password);
  const isLogin = useSelector((state: RootState) => state.loginSlice.steps.isLogin);
  const isSignup = useSelector((state: RootState) => state.signupSlice.validation.isSignup);
  const user = useSelector((state: RootState) => state.accountSlice.user);

  return (
    <CardForm
      onSubmit={() => {}}
      subject={'이메일 인증을 진행해주세요.'}
      inputs={
        <div className="mb-10">
          <LoginIdInput value={user.identity.loginId} onChange={e => dispatch(setAccountLoginId(e.target.value))} />
          <PasswordInput />
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
            text="check"
            onClick={() => dispatch<any>(getCheckDuplicateEmail())}
          />
        </div>
      }
      button={<SubmitButton text="이메일 변경하기" onClick={() => {}} />}
    />
  );
}

export default page;
