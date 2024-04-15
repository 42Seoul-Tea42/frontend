import { DirectionSVG } from '../svg';

type CarouselControlButtonProps = {
  onClick: () => void;
  direction: 'left' | 'right';
  position: string;
};

function CarouselControlButton({ onClick, direction, position }: CarouselControlButtonProps) {
  return (
    <button
      type="button"
      className={`absolute top-0 ${position} z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none`}
      data-carousel-prev
      onClick={onClick}
    >
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <DirectionSVG direction={direction} size="8" /> <span className="sr-only">Previous</span>
      </span>
    </button>
  );
}

export default CarouselControlButton;
