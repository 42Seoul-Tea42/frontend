import Image from 'next/image';

interface EmojiGridListProps {
  readOnly: boolean;
  onClick?: (e: number) => void;
  emoji: number[];
  selectColor: string;
}

const EmojiGridList = ({ readOnly, onClick, emoji, selectColor }: EmojiGridListProps) => {
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
    if (emoji?.includes(id)) {
      return selectColor + ' ' + 'border-4 rounded-xl';
    } else if (readOnly === true) {
      return 'hidden';
    }
  };

  return (
    <div className="max-w-96 relative">
      <div className="grid grid-cols-4 gap-4">
        {Emojis.map((Emoji, index) => (
          <button
            key={index}
            type="button"
            className={`cursor-pointer relative ${colorPicker(Emoji.id + Count.START_INDEX)}`}
            onClick={() => onClick && onClick(Emoji.id + Count.START_INDEX)}
          >
            <Image
              width={500}
              height={500}
              className={`${
                readOnly ? '' : 'hover:brightness-75'
              }h-auto max-w-full rounded-lg transition-opacity duration-300`}
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
