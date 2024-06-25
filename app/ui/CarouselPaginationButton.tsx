type CarouselPaginationButtonProps = {
  index: number;
  activeIndex: number;
  onClick: () => void;
};

function CarouselPaginationButton({ index, activeIndex, onClick }: CarouselPaginationButtonProps) {
  return (
    <button
      key={index}
      type="button"
      className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-black' : 'bg-gray-300'}`}
      aria-current={index === activeIndex ? 'true' : 'false'}
      aria-label={`Slide ${index + 1}`}
      onClick={onClick}
    ></button>
  );
}

export default CarouselPaginationButton;
