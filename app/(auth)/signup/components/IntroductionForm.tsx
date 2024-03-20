import { useDispatch } from 'react-redux';
import { setIntrodution } from '../../../store/slices/signupSlice';

const IntroductionForm: React.FC = () => {
  const dispatch = useDispatch();

  const dispatchSignupIntroduction = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setIntrodution(e.target.value));
  };

  return (
    <>
      <div className="mb-10">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          한줄소개를 작성해주세요.
        </label>
        <textarea
          id="message"
          rows={4}
          onChange={dispatchSignupIntroduction}
          className="block p-2.5 w-full min-h-36 max-h-96 text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="나랑 눈사람 만들래?"
        ></textarea>
      </div>
    </>
  );
};

export default IntroductionForm;
