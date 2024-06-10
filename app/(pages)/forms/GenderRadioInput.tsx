import { Gender } from '@/redux/enum';
import { setAccountGender } from '@/redux/slices/accountSlice';
import { RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';

const GenderRadioInput: React.FC = () => {
  const dispatch = useDispatch();
  const gender = useSelector((state: RootState) => state.accountSlice.user.gender);

  return (
    <div className="mb-5">
      <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex ">
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
          <div className="flex items-center ps-3">
            <input
              id="male"
              type="radio"
              value={Gender.MALE}
              checked={gender === Gender.MALE}
              name="gender"
              onChange={e => dispatch(setAccountGender(e.target.value))}
              className="w-4 h-4 text-green-400 bg-gray-100 border-gray-300 focus:ring-green-400 "
              required
            />
            <label htmlFor="male" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">
              남성
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
          <div className="flex items-center ps-3">
            <input
              id="female"
              type="radio"
              value={Gender.FEMALE}
              checked={gender === Gender.FEMALE}
              name="gender"
              onChange={e => dispatch(setAccountGender(e.target.value))}
              className="w-4 h-4 text-green-400 bg-gray-100 border-gray-300 focus:ring-green-400 "
              required
            />
            <label htmlFor="female" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">
              여성
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
          <div className="flex items-center ps-3">
            <input
              id="other"
              type="radio"
              value={Gender.OTHER}
              checked={gender === Gender.OTHER}
              name="gender"
              onChange={e => dispatch(setAccountGender(e.target.value))}
              className="w-4 h-4 text-green-400 bg-gray-100 border-gray-300 focus:ring-green-400 "
              required
            />
            <label htmlFor="other" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 ">
              그외
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default GenderRadioInput;
