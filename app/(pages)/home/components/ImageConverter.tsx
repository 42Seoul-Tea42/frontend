import Image from 'next/image';
import { useEffect, useState } from 'react';
import Draggable, { DraggableEventHandler } from 'react-draggable';
import { useDispatch } from 'react-redux';

const ImageConverter: React.FC = () => {
  const dispatch = useDispatch();
  const [isAction, setIsAction] = useState<boolean>(false);
  const [direction, setDirection] = useState<'left' | 'right' | 'none'>('none');
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [originalPosition, setOriginalPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0
  });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [images, setImages] = useState<string[]>([]);

  const handleDrag: DraggableEventHandler = (_e, data) => {
    setIsDragging(true);
    setIsAction(Math.abs(data.x) > 250);
    setDirection(data.x > 0 ? 'right' : 'left');
  };

  const handleDragStop: DraggableEventHandler = () => {
    setIsDragging(false);
    setOriginalPosition({ x: 0, y: 0 });
  };

  const handleNextImage = () => {
    if (isAction && !isDragging) {
      setCurrentImageIndex(prevIndex => prevIndex + 1);
      setIsAction(false);
    }
  };

  const handleFancy = () => {
    //
  };

  const renderImages = () => {
    setImages([...images, '/emoji/1.jpg', '/emoji/2.jpg', '/emoji/3.jpg']);
  };

  // 이미지 데이터 컨트롤
  useEffect(() => {
    if (isAction) {
      // 이미지 프리렌더링
      if (currentImageIndex === images.length - 1) {
        console.log('rendering');
        renderImages();
      }
      if (direction === 'left') {
        handleFancy();
        setIsAction(false);
      }
    }
  }, [isAction]);

  // 드래그 트리거
  useEffect(() => {
    handleNextImage();
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
        {direction === 'right' ? 'next →' : '★ fancy'}
      </p>
      <Draggable
        axis="x"
        onDrag={handleDrag}
        onStop={handleDragStop}
        position={{ x: originalPosition.x, y: originalPosition.y }}
      >
        <div className={isAction ? 'brightness-50' : ''}>
          <div className="mx-auto max-w-sm bg-white shadow-lg border border-gray-200 rounded-xl dark:bg-gray-800 dark:border-gray-700">
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
