import Image from 'next/image';
import { useEffect, useState } from 'react';

interface ImageConverterProps {
  isAction: boolean;
  isDragging: boolean;
  setIsAction: (isAction: boolean) => void;
}

const ImageConverter: React.FC<ImageConverterProps> = ({ isAction, setIsAction, isDragging }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [images, setImages] = useState<string[]>([]);

  const renderImages = () => {
    setImages([...images, '/emoji/1.jpg']);
  };

  useEffect(() => {
    if (isAction) {
      // 이미지 프리렌더링
      if (currentImageIndex <= images.length - 1) {
        console.log('rendering');
        renderImages();
      }
    }
  }, [isAction]);

  const handleNextImage = () => {
    if (isAction && !isDragging) {
      setCurrentImageIndex(prevIndex => prevIndex + 1);
      setIsAction(false);
    }
  };

  useEffect(() => {
    handleNextImage();
    console.log(images.length);
  }, [isDragging]);

  useEffect(() => {
    renderImages();
  }, []);

  return (
    <div className="mx-auto max-w-sm bg-white border border-gray-200 rounded-xl dark:bg-gray-800 dark:border-gray-700">
      <Image
        src={images[currentImageIndex]}
        alt="face"
        width={500}
        height={500}
        priority={true}
        draggable={false}
        className="rounded-xl"
      />
    </div>
  );
};

export default ImageConverter;
