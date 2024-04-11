import { useDispatch, useSelector } from 'react-redux';
import { setSexualPreference } from '../../../redux/oldslices/signupSlice';

const SexualPreferenceRadioList = () => {
  const dispatch = useDispatch();

  const dispatchSignupSexualPreference = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSexualPreference(e.target.value));
  };

  return (
    <div className="mb-5">
      <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="hetero"
              type="radio"
              value="hetero"
              name="sexual-preference"
              onChange={dispatchSignupSexualPreference}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              required
            />
            <label htmlFor="hetero" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              이성애
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="homo"
              type="radio"
              value="homo"
              name="sexual-preference"
              onChange={dispatchSignupSexualPreference}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              required
            />
            <label htmlFor="homo" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              동성애
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="bisexual"
              type="radio"
              value="bisexual"
              name="sexual-preference"
              onChange={dispatchSignupSexualPreference}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              required
            />
            <label htmlFor="bisexual" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              양성애
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SexualPreferenceRadioList;
