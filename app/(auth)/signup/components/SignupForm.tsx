'use client';

import { useRouter } from 'next/navigation';
import IdInput from './IdInput';
import PasswordInput from './PasswordInput';
import UserNameInput from './UserNameInput';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

const SignupForm: React.FC = () => {
  const router = useRouter();
  const password = useSelector((state: RootState) => state.accountService.user.password);
  const reEnterPassword = useSelector((state: RootState) => state.accountService.reEnterPassword);

  /** 비밀번호와 재입력이 같지 않은경우 예외처리 */
  const validatePasswordMatch = (): boolean => password === reEnterPassword;

  const submitSignupForm = (event: React.FormEvent<HTMLFormElement>) => {
    if (!validatePasswordMatch()) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    /** form이 내부 상태를 가지고 있기 때문에 신뢰할 수 있는 단일 동작을 위해 폼 이벤트 방지 */
    event.preventDefault();
    //회원가입 api 호출

    router.push('/login');
  };

  return (
    <form
      onSubmit={submitSignupForm}
      className="max-w-md min-w-96 min-h-96 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <h5 className="text-lg font-semibold mb-5 underline decoration-wavy decoration-pink-500/50">
        회원가입을 위한 계정정보를 입력해주세요.
      </h5>

      <UserNameInput />
      <IdInput />
      <PasswordInput />

      <div className="flex justify-end mt-10">
        <button
          type="submit"
          className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
};
export default SignupForm;
