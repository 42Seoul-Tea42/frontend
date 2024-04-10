import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { setAccountPassword, setAccountReEnterPassword } from '../../../redux/services/accountService';

const PasswordInput: React.FC = () => {
  const dispatch = useDispatch();
  const password = useSelector((state: RootState) => state.accountService.user.account.password);
  const reEnterPassword = useSelector((state: RootState) => state.accountService.reEnterPassword);

  return (
    <div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          value={password}
          type="password"
          name="floating_password"
          onChange={e => dispatch(setAccountPassword(e.target.value))}
          id="floating_password"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="floating_password"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          New Password
        </label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          value={reEnterPassword}
          type="password"
          name="floating_confirm_password"
          onChange={e => dispatch(setAccountReEnterPassword(e.target.value))}
          id="re_enter_floating_password"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="re_enter_floating_password"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Re-Enter Password
        </label>
      </div>
    </div>
  );
};

export default PasswordInput;
