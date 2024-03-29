'use client';

import { useSelector } from 'react-redux';
import GeoLocationButton from '../../../utils/location';
import DateOfBirthForm from './DateOfBirthForm';
import EmailInputForm from './EmailInputForm';
import PasswordForm from './PasswordForm';
import UserNameForm from './UserNameForm';
import { RootState } from '../../../redux/store';
import axiosInstance from '../../../utils/axios';

interface AccountInfoFormProps {
  onNextStep: () => void;
}

const AccountInfoForm: React.FC<AccountInfoFormProps> = ({ onNextStep }) => {
  const email = useSelector((state: RootState) => state.signup.email);
  const loginId = useSelector((state: RootState) => state.signup.id);
  const password = useSelector((state: RootState) => state.signup.password);
  const dateOfBirth = useSelector((state: RootState) => state.signup.dateOfBirth);
  const firstname = useSelector((state: RootState) => state.signup.firstname);
  const lastname = useSelector((state: RootState) => state.signup.lastname);

  const handleSubmit = async () => {
    // const result = await axiosInstance.post('/user/register', {
    //   email: email,
    //   login_id: loginId,
    //   pw: password,
    //   last_name: lastname,
    //   name: firstname,
    //   birthday: dateOfBirth,
    // });

    // if (result && result.status === 200)
    onNextStep();
  };

  return (
    <div
      onSubmit={handleSubmit}
      className="max-w-md min-w-96 min-h-96 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <h5 className="text-lg font-semibold mb-5 underline decoration-wavy decoration-pink-500/50">
        회원가입을 위한 계정정보를 입력해주세요.
      </h5>

      <UserNameForm />
      <EmailInputForm />
      <PasswordForm />
      <DateOfBirthForm />

      <div className="flex justify-end mt-10">
        <button
          type="button"
          onClick={handleSubmit}
          className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default AccountInfoForm;
