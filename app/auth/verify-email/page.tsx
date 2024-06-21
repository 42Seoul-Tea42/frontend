'use client';
import { EmailInput } from '@/(pages)/forms';
import CardForm from '@/(pages)/forms/CardForm';
import { SubmitButton } from '@/ui';
import { RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Indicator from '@/(pages)/components/Indicator';
import { RefreshSVG } from '@/svg/RefreshSVG';
import { changeMyEmail, getResendEmail } from '@/redux/slices/login/loginExtraReducers';
import { getMyEmail } from '@/redux/slices/account/accountExtraReducers';
import { getCheckDuplicateEmail } from '@/redux/slices/signup/signupExtraReducers';

function emailVerify() {
  const dispatch = useDispatch();
  const validation = useSelector((state: RootState) => state.signupSlice.validation);
  const viewMail = useSelector((state: RootState) => state.accountSlice.viewMail);
  const changeEmail = () => {
    dispatch<any>(changeMyEmail(null));
  };

  useEffect(() => {
    dispatch<any>(getMyEmail());
  }, []);

  return (
    <CardForm
      subject={'이메일 인증이 필요합니다.'}
      inputs={
        <div className="mb-10 space-y-5">
          <div className="flex space-x-2">
            <p className="text-lg font-md">현재이메일 : {viewMail}</p>
            <button className="" onClick={() => dispatch<any>(getMyEmail())}>
              <RefreshSVG />
            </button>
          </div>
          <details>
            <summary className="text-blue-600 mb-4">이메일을 잘못입력하셨나요?</summary>
            <h3 className="text-md font-md">이메일 바꾸기</h3>
            <div className="border p-4 rounded-xl">
              <EmailInput
                addJSX={
                  <Indicator
                    // 이메일 중복체크
                    onClick={() => dispatch<any>(getCheckDuplicateEmail())}
                    color={validation.isEmailDuplicateChecked ? 'bg-green-500' : 'hover:opacity-50 bg-red-500'}
                    text={validation.isEmailDuplicateChecked ? '' : 'click'}
                  />
                }
              />
              <SubmitButton text="이메일 변경" onClick={changeEmail} />
            </div>
          </details>
          <details>
            <summary className="text-blue-600 mb-4">이메일을 못받으셨나요?</summary>
            <div className="border p-4 rounded-xl">
              <SubmitButton text="이메일 다시보내기" onClick={() => dispatch<any>(getResendEmail())} />
            </div>
          </details>
        </div>
      }
    />
  );
}

export default emailVerify;
