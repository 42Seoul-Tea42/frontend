'use client';

import DirectionSVG from '../../svg/DirectionSVG';

interface CarouselButtonProps {
  direction: 'left' | 'right';
  position: 'start-0' | 'end-0';
}

const CarouselButton: React.FC<CarouselButtonProps> = ({ direction, position }) => {
  return (
    <button
      type="button"
      className={`absolute top-0 ${position} z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none`}
      data-carousel-dir={direction}
    >
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <DirectionSVG direction={direction} />
        <span className="sr-only">{direction === 'left' ? 'Previous' : 'next'}</span>
      </span>
    </button>
  );
};

export default CarouselButton;
