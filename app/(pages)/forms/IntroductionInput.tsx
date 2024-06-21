import { setAccountIntroduction } from '@/redux/slices/account/accountSlice';
import { RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';

const IntroductionInput: React.FC = () => {
  const dispatch = useDispatch();
  const introduction = useSelector((state: RootState) => state.accountSlice.user.introduction);

  return (
    <>
      <div className="mb-10">
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 ">
          한줄소개를 작성해주세요.
        </label>
        <textarea
          id="message"
          rows={4}
          value={introduction}
          onChange={e => dispatch(setAccountIntroduction(e.target.value))}
          className="block p-2.5 w-full min-h-36 max-h-96 text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-green-400 focus:border-green-400"
          placeholder="나랑 눈사람 만들래?"
        ></textarea>
      </div>
    </>
  );
};

export default IntroductionInput;
