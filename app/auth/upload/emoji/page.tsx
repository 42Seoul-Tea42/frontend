'use client';

import { useRouter } from 'next/navigation';
import EmojiGridList from './EmojiGridList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { RootState } from '@/redux/store';
import { patchUserProfile } from '@/redux/slices/loginSlice';
import { SubmitButton } from '@/ui';

const Emoji = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const emojiCheck = useSelector((state: RootState) => state.loginSlice.steps.emojiCheck);
  const emojis = useSelector((state: RootState) => state.accountSlice.emojis);

  const submitEmojiPreference = (event: React.FormEvent<HTMLFormElement>) => {
    /** form이 내부 상태를 가지고 있기 때문에 신뢰할 수 있는 단일 동작을 위해 폼 이벤트 방지 */
    event.preventDefault();

    // 서버로 제출 하는 로직 필요
    dispatch<any>(patchUserProfile());
  };

  useEffect(() => {
    if (emojiCheck) {
      router.push('/home');
    }
  }, [emojiCheck]);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form
        onSubmit={submitEmojiPreference}
        className="min-w-96 min-h-96 p-6 bg-white border border-gray-200 rounded-lg shadow"
      >
        <h5 className="text-lg font-semibold mb-10">
          선호하는 이모티콘을 골라주세요.
          <span className="bg-red-100 text-red-800 ml-3 text-xs font-medium me-2 px-2.5 py-0.5 rounded">좋아요</span>
          <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">싫어요</span>
        </h5>
        <EmojiGridList />
        <div className="mt-10"></div>
        <SubmitButton text="submit" />
      </form>
    </div>
  );
};

export default Emoji;
