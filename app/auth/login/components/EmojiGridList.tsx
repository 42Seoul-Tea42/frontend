import Image from 'next/image';
import { Reaction, setReaction } from '../../../store/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';

const EmojiGridList: React.FC = () => {
  const selectedReaction = useSelector((state: RootState) => state.user.selectedReactions);
  const dispatch = useDispatch();

  const handleReaction = (id: number) => {
    dispatch(setReaction({ id }));
  };

  const Emojis = Array.from({ length: 16 }, (_, index) => ({
    id: index,
    src: `/emoji/${index + 1}.jpg`, // 이미지 경로
    alt: 'emoji'
  }));

  const selectedStyle = (reaction: Reaction): string => {
    switch (reaction) {
      case Reaction.Like:
        return 'border-8 border-solid border-red-400 rounded-lg';
      case Reaction.Dislike:
        return 'border-8 border-solid border-blue-400 rounded-lg';
      case Reaction.None:
        return '';
    }
  };

  return (
    <div className="max-w-96 grid grid-cols-4 gap-4">
      {Emojis.map(Emoji => (
        <div className="shadow" key={Emoji.id}>
          <button
            type="button"
            className={`cursor-pointer relative ${selectedStyle(selectedReaction[Emoji.id])}`}
            onClick={() => handleReaction(Emoji.id)}
          >
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg hover:opacity-60 transition-opacity duration-300"
              src={Emoji.src}
              alt={Emoji.alt}
            />
          </button>
        </div>
      ))}
    </div>
  );
};

export default EmojiGridList;
