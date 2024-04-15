'use client';

import { useDispatch } from 'react-redux';
import DuplicateCheckForm from './DuplicateCheckForm';
import EmailInput from '../../../(pages)/forms/EmailInput';
import UserNameInput from '../../../(pages)/forms/UserNameInput';
import IdInput from '../../../(pages)/forms/IdInput';
import PasswordInput from '../../../(pages)/forms/PasswordInput';
import SubmitButton from '../../../UI/SubmitButton';
import { postCheckDuplicateEmailToServer, postCheckDuplicateIdToServer } from '../../../redux/slices/signupSlice';

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
      <DuplicateCheckForm form={<EmailInput />} onClick={() => dispatch<any>(postCheckDuplicateEmailToServer())} />
      <UserNameInput />
      <DuplicateCheckForm form={<IdInput />} onClick={() => dispatch<any>(postCheckDuplicateIdToServer())} />
      <PasswordInput />

      <SubmitButton text="Sign up" />
    </form>
  );
};

export default SignupForm;
