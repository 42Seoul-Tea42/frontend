import Image from 'next/image';
import { useEffect, useState } from 'react';

interface ImageConverterProps {
  isAction: boolean;
  isDragging: boolean;
  setIsAction: (isAction: boolean) => void;
}

const ImageConverter: React.FC<ImageConverterProps> = ({ isAction, setIsAction, isDragging }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ['/emoji/3.jpg', '/emoji/2.jpg', '/emoji/1.jpg']; // 하드코딩된 이미지 URL 배열

  useEffect(() => {
    if (isAction) {
      // 이미지 프리렌더링
    }
  }, [isAction]);

  const handleNextImage = () => {
    if (isAction && !isDragging) {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
      setIsAction(false);
    }
  };

  useEffect(() => {
    handleNextImage();
  }, [isDragging]);

  return (
    <div className="mx-auto mt-20 max-w-sm bg-white border border-gray-200 rounded-xl dark:bg-gray-800 dark:border-gray-700">
      <div>
        <Image
          src={images[currentImageIndex]}
          alt="face"
          width={500}
          height={500}
          priority={true}
          draggable={false}
        />
      </div>
    </div>
  );
};

export default ImageConverter;
