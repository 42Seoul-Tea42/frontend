import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { setEmail } from '../../../store/slices/signupSlice';
import axiosInstance from '../../../utils/axios';

const EmailInputForm: React.FC = () => {
  const dispatch = useDispatch();
  const email = useSelector((state: RootState) => state.signup.email);

  const dispatchSignupEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmail(e.target.value));
  };

  const checkDuplicateEmail = async () => {
    await axiosInstance.post('/user/checkEmail', { email: email });
  };

  return (
    <div className="relative flex z-0 w-full group mb-5 mt-5 gap-4">
      <input
        type="email"
        value={email}
        onChange={dispatchSignupEmail}
        name="floating_email"
        id="floating_email"
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        required
        placeholder=" "
      />
      <label
        htmlFor="floating_email"
        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        name@company.com
      </label>
      <button
        type="button"
        className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={checkDuplicateEmail}
      >
        check
      </button>
    </div>
  );
};

export default EmailInputForm;
