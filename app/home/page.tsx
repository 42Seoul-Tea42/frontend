'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Draggable, { DraggableEventHandler } from 'react-draggable';

const Home: React.FC = () => {
  const [springEffect, setspringEffect] = useState<boolean>(false);
  const [isAction, setIsAction] = useState<boolean>(false);
  const [originalPosition, setOriginalPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0
  });

  const handleDragStart: DraggableEventHandler = (_e, data) => {
    setspringEffect(true);
  };

  const handleDrag: DraggableEventHandler = (_e, data) => {
    if (Math.abs(data.x) > 250) {
      setIsAction(true);
    } else {
      setIsAction(false);
    }
  };

  const handleDragStop: DraggableEventHandler = (_e, data) => {
    setspringEffect(false);
  };

  useEffect(() => {
    setOriginalPosition({ x: 0, y: 0 });
  }, [springEffect]);

  useEffect(() => {
    if (isAction) {
      //data patch
    }
  }, [isAction]);

  return (
    <div className="w-full h-screen">
      <Draggable
        axis="x"
        onStart={handleDragStart}
        onDrag={handleDrag}
        onStop={handleDragStop}
        position={{ x: originalPosition.x, y: originalPosition.y }}
      >
        <div className="mx-auto mt-20 max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
          <div
            className={`relative overflow-hidden rounded-lg h-96 ${
              isAction ? 'brightness-50 shadow-2xl' : ''
            }`}
          >
            <Image
              src="/조유리.webp"
              alt="face"
              width={500}
              height={500}
              priority={true}
              draggable={false}
            />
          </div>
        </div>
      </Draggable>
    </div>
  );
};

export default Home;
