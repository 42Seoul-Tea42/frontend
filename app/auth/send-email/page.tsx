'use client';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import CardForm from '../../(pages)/forms/CardForm';
import { EmailInput, LoginIdInput, PasswordInput } from '../../(pages)/forms';
import { SubmitButton } from '../../UI';
import { getCheckDuplicateEmail, setIsEmailDuplicateChecked } from '../../redux/slices/signupSlice';
import Indicator from '../../(pages)/components/Indicator';

function SendEmail() {
  const dispatch = useDispatch();
  const validation = useSelector((state: RootState) => state.signupSlice.validation);

  return (
    <CardForm
      onSubmit={() => {}}
      subject={'이메일 인증을 진행해주세요.'}
      inputs={
        <div className="mb-10">
          <LoginIdInput />
          <PasswordInput />
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
              />
            }
          />
        </div>
      }
      //test
      button={<SubmitButton text="이메일 변경하기" onClick={() => {}} />}
    />
  );
}

export default SendEmail;
