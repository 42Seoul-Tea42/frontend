'use client';

import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import EmojiGridList from './EmojiGridList';
import { useRouter } from 'next/navigation';

interface EmojiInfoFormProps {
  onNextStep: () => void;
}

const EmojiInfoForm: React.FC<EmojiInfoFormProps> = ({ onNextStep }) => {
  const emojis = useSelector((state: RootState) => state.signup.selectedReactions);
  // const hate_tags = useSelector((state: RootState) => state.signup.hate_tags);

  const router = useRouter();

  const handleSubmitEmojiPreference = async () => {
    // const result = await axiosInstance.post('/user/emoji', {
    // emoji: [int]
    // hate_emoji: [int]
    // similar: bool
    // });
    // if (result && result.status === 200) {
    //   // router.push('/home');
    // }
    router.push('/');
    alert('회원가입이 완료되었습니다. 로그인 해주세요.');
  };

  return (
    <form className="min-w-96 min-h-96 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h5 className="text-lg font-semibold mb-10">
        선호하는 이모티콘을 골라주세요.
        <span className="bg-red-100 text-red-800 ml-3 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-500">
          좋아요
        </span>
        <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-500">
          싫어요
        </span>
      </h5>
      <EmojiGridList />
      <div className="flex justify-end mt-10">
        <button
          type="button"
          className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={handleSubmitEmojiPreference}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default EmojiInfoForm;
