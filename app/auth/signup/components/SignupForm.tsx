'use client';

import IdInput from './IdInput';
import PasswordInput from './PasswordInput';
import UserNameInput from './UserNameInput';
import EmailInput from './emailInput';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import {
  setAccountEmail,
  setAccountFirstname,
  setAccountId,
  setAccountLastname,
  setAccountPassword,
  setReEnterPassword
} from '../../../redux/slices/accountSlice';
import { postCheckDuplicateEmailToServer, postCheckDuplicateIdToServer } from '../../../redux/slices/signupSlice';

interface SignupFormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

// ui 부분만 분리시켜서 form이 컨트롤하는 데이터만 주입
const SignupForm: React.FC<SignupFormProps> = ({ onSubmit }) => {
  const user = useSelector((state: RootState) => state.accountSlice.user);
  const reEnterPassword = useSelector((state: RootState) => state.accountSlice.reEnterPassword);

  const dispatch = useDispatch();
  return (
    <form
      onSubmit={onSubmit}
      className="max-w-md min-w-96 min-h-96 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <h5 className="text-lg font-semibold mb-5 underline decoration-wavy decoration-pink-500/50">
        회원가입을 위한 계정정보를 입력해주세요.
      </h5>

      <div className="flex">
        <EmailInput value={user.account.email} onChange={e => dispatch(setAccountEmail(e.target.value))} />
        <button type="button" onClick={() => dispatch<any>(postCheckDuplicateEmailToServer())}>
          emailcheck
        </button>
      </div>
      <UserNameInput
        firstname={user.identity.firstname}
        lastname={user.identity.lastname}
        setFirstname={e => dispatch(setAccountFirstname(e.target.value))}
        setLastname={e => dispatch(setAccountLastname(e.target.value))}
      />
      <div className="flex">
        <IdInput value={user.identity.id} onChange={e => dispatch(setAccountId(e.target.value))} />
        <button type="button" onClick={() => dispatch<any>(postCheckDuplicateIdToServer())}>
          ID Check
        </button>
      </div>

      <PasswordInput
        password={user.account.password}
        reEnterPassword={reEnterPassword}
        setPassword={e => dispatch(setAccountPassword(e.target.value))}
        setReEnterPassword={e => dispatch(setReEnterPassword(e.target.value))}
      />

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
