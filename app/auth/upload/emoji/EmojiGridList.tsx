import { setAccountEmojis, setAccountHateEmojis } from '@/redux/slices/accountSlice';
import { RootState } from '@/redux/store';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';

interface EmojiGridListProps {
  who: 'me' | 'other';
}
const EmojiGridList = ({ who }: EmojiGridListProps) => {
  const dispatch = useDispatch();
  const emojis = useSelector((state: RootState) =>
    who === 'me' ? state.accountSlice.user.emoji : state.profileInquirySlice.user.emoji
  );
  const hateEmojis = useSelector((state: RootState) =>
    who === 'me' ? state.accountSlice.user.hateEmoji : state.profileInquirySlice.user.hateEmoji
  );

  enum Count {
    // 파일이름 1부터시작, 백에서 배열요소의 값을 1부터 받음
    START_INDEX = 1
  }

  const Emojis = Array.from({ length: 16 }, (_, index) => ({
    id: index,
    src: `/emoji/${index + Count.START_INDEX}.jpg`, // 이미지 경로
    alt: `emoji${index + Count.START_INDEX}`
  }));

  const colorPicker = (id: number) => {
    if (emojis?.includes(id)) {
      return 'border-2 border-red-500 rounded-xl';
    } else if (hateEmojis?.includes(id) && who === 'me') {
      return 'border-2 border-blue-500 rounded-xl';
    } else if (who === 'other') {
      return 'hidden';
    }
  };

  return (
    <div className="max-w-96 relative">
      {who === 'me' && (
        <div className="flex mb-5 justify-center">
          <span className="bg-red-100 text-red-800 ml-3 text-xs font-medium me-2 px-2.5 py-0.5 rounded">좋아요</span>
          <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">싫어요</span>
        </div>
      )}
      <div className="grid grid-cols-4 gap-4">
        {Emojis.map((Emoji, index) => (
          <button
            key={index}
            type="button"
            className={`cursor-pointer relative ${colorPicker(Emoji.id + Count.START_INDEX)}`}
            onClick={() => {
              if (who === 'me') {
                dispatch(setAccountEmojis(Emoji.id + Count.START_INDEX));
              }
            }}
            // 마우스 오른쪽 클릭 이벤트
            onContextMenu={e => {
              if (who === 'me') {
                e.preventDefault();
                dispatch(setAccountHateEmojis(Emoji.id + Count.START_INDEX));
              }
            }}
          >
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full hover:brightness-75 rounded-lg transition-opacity duration-300"
              src={Emoji.src}
              alt={Emoji.alt}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default EmojiGridList;
