'use client';

import IdInput from './IdInput';
import PasswordInput from './PasswordInput';
import UserNameInput from './UserNameInput';
import { useDispatch } from 'react-redux';
import { postCheckDuplicateEmailToServer, postCheckDuplicateIdToServer } from '../../../redux/slices/signupSlice';
import DuplicateCheckForm from './DuplicateCheckForm';
import EmailInput from './EmailInput';
import SubmitButton from '../../login/components/SubmitButton';

interface SignupFormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

// ui 부분만 분리시켜서 form이 컨트롤하는 데이터만 주입
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

      <SubmitButton text="회원가입" />
    </form>
  );
};

export default SignupForm;
