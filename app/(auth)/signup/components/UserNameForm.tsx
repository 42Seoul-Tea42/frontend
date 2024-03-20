import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { setFirstname, setLastname } from '../../../store/slices/signupSlice';

const UserNameForm: React.FC = () => {
  const dispatch = useDispatch();
  const firstname = useSelector((state: RootState) => state.signup.firstname);
  const lastname = useSelector((state: RootState) => state.signup.lastname);

  const dispatchSignupFirstname = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFirstname(e.target.value));
  };

  const dispatchSignupLastname = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setLastname(e.target.value));
  };

  return (
    <div className="grid md:grid-cols-2 md:gap-6">
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          value={firstname}
          onChange={dispatchSignupFirstname}
          name="floating_first_name"
          id="floating_first_name"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="floating_first_name"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          First name
        </label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          value={lastname}
          onChange={dispatchSignupLastname}
          name="floating_last_name"
          id="floating_last_name"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="floating_last_name"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Last name
        </label>
      </div>
    </div>
  );
};

export default UserNameForm;
