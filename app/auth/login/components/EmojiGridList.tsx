import Image from 'next/image';
import { useState } from 'react';

const EmojiGridList: React.FC = () => {
  // 이미지 정보를 담은 배열
  const images = Array.from({ length: 16 }, (_, index) => ({
    id: index,
    src: `/emoji/${index + 1}.jpg`, // 이미지 경로
    alt: 'emoji'
  }));

  // 현재 선택된 이미지의 ID를 추적하는 state
  const [selectedImageId, setSelectedImageId] = useState<number | null>(null);

  // 이미지를 클릭할 때 호출되는 함수
  const handleClick = (id: number) => {
    setSelectedImageId(id === selectedImageId ? null : id); // 이미지를 다시 클릭하면 선택 해제
  };

  return (
    <div className="max-w-96 grid grid-cols-4 gap-4">
      {images.map(image => (
        <div className="shadow" key={image.id}>
          <div
            className={`cursor-pointer relative ${
              selectedImageId === image.id ? 'border-8 border-solid border-red-600 rounded-lg' : ''
            }`}
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
