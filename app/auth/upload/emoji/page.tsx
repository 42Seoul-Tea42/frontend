'use client';

import EmojiGridList from './EmojiGridList';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { AccordionItems, SubmitButton } from '@/ui';
import { setAccountEmoji, setAccountHateEmoji } from '@/redux/slices/account/accountSlice';
import useLoginRedirect from '@/(pages)/hooks/useLoginRedirect';
import { patchUserProfile } from '@/redux/slices/login/loginExtraReducers';

const Emoji = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.accountSlice.user);

  useLoginRedirect();

  const submitEmojiPreference = (event: React.FormEvent<HTMLFormElement>) => {
    /** form이 내부 상태를 가지고 있기 때문에 신뢰할 수 있는 단일 동작을 위해 폼 이벤트 방지 */
    event.preventDefault();

    // 서버로 제출 하는 로직 필요
    dispatch<any>(patchUserProfile(null));
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form
        onSubmit={submitEmojiPreference}
        className="min-w-96 min-h-96 p-6 bg-white border border-gray-200 rounded-lg shadow"
      >
        <p className="text-xl font-medium"> 이모티콘 취향을 선택해주세요.</p>
        <AccordionItems
          items={[
            {
              title: '좋아하는 이모티콘 선택',
              content: <EmojiGridList who={'me'} emoji={user.emoji} onClick={e => dispatch(setAccountEmoji(e))} />
            },
            {
              title: '싫어하는 이모티콘 선택',
              content: (
                <EmojiGridList who={'me'} emoji={user.hateEmoji} onClick={e => dispatch(setAccountHateEmoji(e))} />
              )
            }
          ]}
        />
        <SubmitButton text={'Submit'} />
      </form>
    </div>
  );
};

export default Emoji;
