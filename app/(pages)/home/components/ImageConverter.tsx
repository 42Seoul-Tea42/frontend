import Image from 'next/image';
import { useEffect, useState } from 'react';
import Draggable, { DraggableEventHandler } from 'react-draggable';
import { useDispatch } from 'react-redux';

const ImageConverter: React.FC = () => {
  const dispatch = useDispatch();
  const [isNext, setIsNext] = useState<boolean>(false);
  const [isFancy, setIsFancy] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [originalPosition, setOriginalPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0
  });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [images, setImages] = useState<string[]>([]);

  const handleDrag: DraggableEventHandler = (_e, data) => {
    setIsDragging(true);
    setIsNext(data.x > 250);
    setIsFancy(data.x < -250);
  };

  const handleDragStop: DraggableEventHandler = () => {
    setIsDragging(false);
    setOriginalPosition({ x: 0, y: 0 });
  };

  const handleNextImage = () => {
    setCurrentImageIndex(prevIndex => prevIndex + 1);
    setIsNext(false);
  };

  const handleFancy = () => {
    //
    setIsFancy(false);
  };

  const renderImages = () => {
    setImages([...images, '/emoji/1.jpg', '/emoji/2.jpg', '/emoji/3.jpg']);
  };

  // 이미지 데이터 컨트롤
  useEffect(() => {
    if (isNext) {
      // 이미지 프리렌더링
      if (currentImageIndex === images.length - 1) {
        console.log('rendering');
        renderImages();
      }
    }
  }, [isNext]);

  // 드래그 트리거
  useEffect(() => {
    if (isNext && !isDragging) handleNextImage();
    if (isFancy && !isDragging) handleFancy();
    console.log(images.length);
  }, [isDragging]);

  useEffect(() => {
    renderImages();
  }, []);

  return (
    <>
      <p
        className={`text-6xl text-gray-700 font-extrabold text-center absolute top-60 left-0 right-0 ${
          isDragging ? 'animate-pulse' : 'hidden'
        }`}
      >
        {isNext ? 'next →' : ''}
        {isFancy ? '★ fancy' : ''}
      </p>
      <Draggable
        axis="x"
        onDrag={handleDrag}
        onStop={handleDragStop}
        position={{ x: originalPosition.x, y: originalPosition.y }}
      >
        <div className={isNext ? 'brightness-50' : ''}>
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
        </div>
      </Draggable>
    </>
  );
};

export default ImageConverter;
