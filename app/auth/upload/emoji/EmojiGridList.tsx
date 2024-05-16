import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { setAccountEmojis, setAccountHateEmojis } from '../../../redux/slices/accountSlice';
import { RootState } from '../../../redux/store';

const EmojiGridList: React.FC = () => {
  const dispatch = useDispatch();
  const emojis = useSelector((state: RootState) => state.accountSlice.emojis);
  const hateEmojis = useSelector((state: RootState) => state.accountSlice.hateEmojis);

  enum DTO {
    // 파일이름 1부터시작, 백에서 배열요소의 값을 1부터 받음
    START_INDEX = 1
  }

  const Emojis = Array.from({ length: 16 }, (_, index) => ({
    id: index,
    src: `/emoji/${index + DTO.START_INDEX}.jpg`, // 이미지 경로
    alt: `emoji${index + DTO.START_INDEX}`
  }));

  const colorPicker = (id: number) => {
    if (emojis?.includes(id)) return 'border-2 border-red-500 rounded-xl';
    if (hateEmojis?.includes(id)) return 'border-2 border-blue-500 rounded-xl';
  };

  return (
    <div className="max-w-96 relative">
      <div className="flex mb-5 justify-center">
        <span className="bg-red-100 text-red-800 ml-3 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-500">
          좋아요 마우스 왼쪽 클릭
        </span>
        <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-500">
          싫어요 마우스 오른쪽 클릭
        </span>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {Emojis.map((Emoji, index) => (
          <button
            key={index}
            type="button"
            className={`cursor-pointer relative ${colorPicker(Emoji.id + DTO.START_INDEX)}`}
            onClick={() => dispatch(setAccountEmojis(Emoji.id + DTO.START_INDEX))}
            onContextMenu={e => {
              e.preventDefault();
              dispatch(setAccountHateEmojis(Emoji.id + DTO.START_INDEX));
            }}
          >
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg hover:brightness-50 transition-opacity duration-300"
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
