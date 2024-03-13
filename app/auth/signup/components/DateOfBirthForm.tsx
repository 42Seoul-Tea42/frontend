import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { setBirthDate } from '../../../store/slices/signupSlice';

const DateOfBirthForm: React.FC = () => {
  const dispatch = useDispatch();
  const dateOfBirth = useSelector((state: RootState) => state.signup.dateOfBirth);

  const handleDateOfBirth = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setBirthDate(e.target.value));
  };

  return (
    <div className="relative z-0 w-full group mb-5 mt-5">
      <input
        type="date"
        value={dateOfBirth}
        onChange={handleDateOfBirth}
        name="floating_company"
        id="floating_company"
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=""
        required
      />
      <label
        htmlFor="floating_company"
        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        생년월일
      </label>
    </div>
  );
};

export default DateOfBirthForm;
