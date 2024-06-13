'use client';
import Indicator from '@/(pages)/components/Indicator';
import { EmailInput, LoginIdInput, PasswordInput } from '@/(pages)/forms';
import CardForm from '@/(pages)/forms/CardForm';
import { SubmitButton } from '@/ui';
import { getResendEmail } from '@/redux/slices/loginSlice';
import { getCheckDuplicateEmail, setIsEmailDuplicateChecked } from '@/redux/slices/signupSlice';
import { RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';

export function SendEmail() {
  const dispatch = useDispatch();
  const validation = useSelector((state: RootState) => state.signupSlice.validation);

  return (
    <CardForm
      onSubmit={() => {}}
      subject={'이메일을 못받으셨나요?'}
      inputs={
        <div className="mb-10">
          {/* <LoginIdInput />
          <PasswordInput />
          <EmailInput
            extended={() => {
              // 이메일 중복체크 후 재입력시 중복체크 여부 초기화
              dispatch(setIsEmailDuplicateChecked(false));
            }}
            addJSX={
              <Indicator
                // 이메일 중복체크
                onClick={() => dispatch<any>(getResendEmail())}
                color={validation.isEmailDuplicateChecked ? 'bg-green-500' : 'hover:opacity-50 bg-red-500'}
              />
            }
          /> */}
        </div>
      }
      //test
      button={<SubmitButton text="이메일 다시보내기" onClick={() => dispatch<any>(getResendEmail())} />}
    />
  );
}
