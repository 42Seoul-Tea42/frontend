import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { setAccountEmojis } from '../../../../redux/slices/accountSlice';
import { RootState } from '../../../../redux/store';

const EmojiGridList: React.FC = () => {
  const dispatch = useDispatch();
  const emojis = useSelector((state: RootState) => state.accountSlice.emojis);

  const Emojis = Array.from({ length: 16 }, (_, index) => ({
    id: index,
    src: `/emoji/${index + 1}.jpg`, // 이미지 경로
    alt: `emoji${index + 1}`
  }));

  return (
    <div className="max-w-96 grid grid-cols-4 gap-4">
      {Emojis.map((Emoji, index) => (
        <button
          key={index}
          type="button"
          className={`cursor-pointer relative ${emojis.includes(Emoji.id) ? 'border-2 border-red-500 rounded-xl' : ''}`}
          onClick={() => dispatch(setAccountEmojis(Emoji.id))}
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
  );
};

export default EmojiGridList;
