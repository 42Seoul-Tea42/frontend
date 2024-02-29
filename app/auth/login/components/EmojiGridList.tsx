import Image from 'next/image';
import { useState } from 'react';

const EmojiGridList: React.FC = () => {
  // 이미지 정보를 담은 배열
  const images = Array.from({ length: 16 }, (_, index) => ({
    id: index,
    src: `/emoji/${index + 1}.jpg`, // 이미지 경로
    alt: 'emoji'
  }));

  enum Reaction {
    Like = 'like',
    Dislike = 'dislike',
    None = 'none'
  }

  const [selectedReaction, setSelectedReaction] = useState<Reaction[]>(
    Array.from({ length: 16 }, () => Reaction.None)
  );

  const handleClick = (id: number) => {
    const currentReaction = selectedReaction[id];
    switch (currentReaction) {
      case Reaction.Like:
        setSelectedReaction(prevState => {
          const newState = [...prevState];
          newState[id] = Reaction.Dislike;
          return newState;
        });
        break;
      case Reaction.Dislike:
        setSelectedReaction(prevState => {
          const newState = [...prevState];
          newState[id] = Reaction.None;
          return newState;
        });
        break;
      case Reaction.None:
        setSelectedReaction(prevState => {
          const newState = [...prevState];
          newState[id] = Reaction.Like;
          return newState;
        });
        break;
    }
  };

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
      {images.map(image => (
        <div className="shadow" key={image.id}>
          <div
            className={`cursor-pointer relative ${selectedStyle(selectedReaction[image.id])}`}
            onClick={() => handleClick(image.id)}
          >
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg"
              src={image.src}
              alt={image.alt}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmojiGridList;
