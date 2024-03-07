'use client';

import { useEffect, useState } from 'react';
import Draggable, { DraggableEventHandler } from 'react-draggable';
import ImageConverter from './components/ImageConverter';

const Home: React.FC = () => {
  const [isAction, setIsAction] = useState<boolean>(false);
  const [originalPosition, setOriginalPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0
  });

  const handleDrag: DraggableEventHandler = (_e, data) => {
    setIsAction(Math.abs(data.x) > 250);
  };

  const handleDragStop: DraggableEventHandler = (_e, data) => {
    setOriginalPosition({ x: 0, y: 0 });
  };

  useEffect(() => {
    if (isAction) {
      //data patch
    }
  }, [isAction]);

  return (
    <div className="w-full h-screen">
      <Draggable
        axis="x"
        onDrag={handleDrag}
        onStop={handleDragStop}
        position={{ x: originalPosition.x, y: originalPosition.y }}
      >
        <div>
          <ImageConverter isAction={isAction} />
        </div>
      </Draggable>
    </div>
  );
};

export default Home;
