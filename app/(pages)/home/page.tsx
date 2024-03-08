'use client';

import { useState } from 'react';
import Draggable, { DraggableEventHandler } from 'react-draggable';
import ImageConverter from './components/ImageConverter';

const Home: React.FC = () => {
  const [isAction, setIsAction] = useState<boolean>(false);
  const [direction, setDirection] = useState<'left' | 'right' | 'none'>('none');
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [originalPosition, setOriginalPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0
  });

  const handleDrag: DraggableEventHandler = (_e, data) => {
    setIsDragging(true);
    setIsAction(Math.abs(data.x) > 250);
    setDirection(data.x > 0 ? 'right' : 'left');
  };

  const handleDragStop: DraggableEventHandler = () => {
    setIsDragging(false);
    setOriginalPosition({ x: 0, y: 0 });
  };

  return (
    <div className="w-full h-screen">
      <div className="m-40">
        <p
          className={`text-6xl text-gray-700 font-extrabold text-center fixed top-60 left-0 right-0 ${
            isDragging ? '' : 'hidden'
          }`}
        >
          {direction === 'left' ? 'next →' : '★ fancy'}
        </p>
        <Draggable
          axis="x"
          onDrag={handleDrag}
          onStop={handleDragStop}
          position={{ x: originalPosition.x, y: originalPosition.y }}
        >
          <div className={isAction ? 'brightness-50' : ''}>
            <ImageConverter isAction={isAction} setIsAction={setIsAction} isDragging={isDragging} />
          </div>
        </Draggable>
      </div>
    </div>
  );
};

export default Home;
