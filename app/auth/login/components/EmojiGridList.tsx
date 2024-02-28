import Image from 'next/image';

const EmojiGridList: React.FC = () => {
  // 이미지 정보를 담은 배열
  const images = Array.from({ length: 16 }, (_, index) => ({
    id: index,
    src: '/조유리.webp', // 이미지 경로
    alt: '' // 이미지 alt
  }));

  // 이미지 요소를 생성하는 함수
  const renderImages = () => {
    return images.map(image => (
      <div className="" key={image.id}>
        <Image
          width={500}
          height={500}
          className="h-auto max-w-full rounded-lg"
          src={image.src}
          alt={image.alt}
          sizes="(max-width: 100px) 100vw"
        />
      </div>
    ));
  };

  return <div className="grid grid-cols-4 gap-4">{renderImages()}</div>;
};

export default EmojiGridList;
