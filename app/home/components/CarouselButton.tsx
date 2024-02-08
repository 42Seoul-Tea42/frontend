'use client';

interface CarouselButtonProps {
  direction: 'prev' | 'next';
  position: 'start' | 'end';
}

const CarouselButton: React.FC<CarouselButtonProps> = ({ direction, position }) => {
  return (
    <button
      type="button"
      className={`absolute top-0 ${position}-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none`}
      data-carousel-dir={direction}
    >
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <svg
          className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={direction === 'prev' ? 'M5 1 1 5l4 4' : 'm1 9 4-4-4-4'} />
        </svg>
        <span className="sr-only">{direction === 'prev' ? 'Previous' : 'next'}</span>
      </span>
    </button>
  );
};

export default CarouselButton;
