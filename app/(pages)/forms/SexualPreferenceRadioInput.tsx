import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { setAccountSexualPreference } from '../../redux/slices/accountSlice';
import { Gender } from '../../redux/interface/enum';

const SexualPreferenceRadioInput: React.FC = () => {
  const sexualPreference = useSelector((state: RootState) => state.accountSlice.user.profile.sexualPreference);
  const dispatch = useDispatch();

  return (
    <div className="mb-5">
      <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex ">
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
          <div className="flex items-center ps-3">
            <input
              id="hetero"
              type="radio"
              value={Gender.MALE}
              name="sexual-preference"
              onChange={e => dispatch(setAccountSexualPreference(e.target.value))}
              className="w-4 h-4 text-green-400 bg-gray-100 border-gray-300 focus:ring-green-400 focus:ring-2"
              required
            />
            <label htmlFor="hetero" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">
              남성
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
          <div className="flex items-center ps-3">
            <input
              id="homo"
              type="radio"
              value={Gender.FEMALE}
              name="sexual-preference"
              onChange={e => dispatch(setAccountSexualPreference(e.target.value))}
              className="w-4 h-4 text-green-400 bg-gray-100 border-gray-300 focus:ring-green-400 focus:ring-2"
              required
            />
            <label htmlFor="homo" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">
              여성
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
          <div className="flex items-center ps-3">
            <input
              id="bisexual"
              type="radio"
              value={Gender.ALL}
              name="sexual-preference"
              onChange={e => dispatch(setAccountSexualPreference(e.target.value))}
              className="w-4 h-4 text-green-400 bg-gray-100 border-gray-300 focus:ring-green-400 focus:ring-2"
              required
            />
            <label htmlFor="bisexual" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">
              상관없음
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SexualPreferenceRadioInput;
