'use client';

import { useDispatch } from 'react-redux';
import { EmailInput, LoginIdInput, PasswordInput, UserNameInput } from '../../../(pages)/forms';
import DuplicateCheckForm from '../../../UI/DuplicateCheckForm';
import { getCheckDuplicateEmail, getCheckDuplicateId } from '../../../redux/slices/signupSlice';
import { SubmitButton } from '../../../UI';

interface SignupFormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ onSubmit }) => {
  const dispatch = useDispatch();

  return (
    <form
      onSubmit={onSubmit}
      className="max-w-md min-w-96 min-h-96 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <h5 className="text-lg font-semibold mb-5 underline decoration-wavy decoration-pink-500/50">
        회원가입을 위한 계정정보를 입력해주세요.
      </h5>
      <DuplicateCheckForm form={<EmailInput />} text="check" onClick={() => dispatch<any>(getCheckDuplicateEmail())} />
      <UserNameInput />
      <DuplicateCheckForm form={<LoginIdInput />} text="check" onClick={() => dispatch<any>(getCheckDuplicateId())} />
      <PasswordInput />

      <SubmitButton text="회원가입" />
    </form>
  );
};

export default SignupForm;
