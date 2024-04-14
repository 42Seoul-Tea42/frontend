'use client';

import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useRouter } from 'next/navigation';
import EmojiGridList from '../login/components/EmojiGridList';
import SubmitButton from '../login/components/SubmitButton';

const Emoji = () => {
  const emojis = useSelector((state: RootState) => state.accountSlice.emojis);
  // const hate_tags = useSelector((state: RootState) => state.signup.hate_tags);

  const router = useRouter();

  const SubmitEmojiPreference = async () => {
    // 서버로 제출 하는 로직 필요
    // 성공했을시 useEffect 내에서 라우터로 푸시
    router.push('/home');
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
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
        <SubmitButton text="submit" onClick={SubmitEmojiPreference} />
      </form>
    </div>
  );
};

export default Emoji;
