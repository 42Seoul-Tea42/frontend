import { DirectionSVG } from '../svg';

type AccordionOpenButtonProps = {
  title: string;
  index: number;
  isOpen: boolean[];
  onClick: (index: number) => void;
};

function AccordionOpenButton({ title, index, isOpen, onClick }: AccordionOpenButtonProps) {
  return (
    <button
      type="button"
      className={`${
        isOpen[index] && 'border-2 border-gray-300'
      } flex max-h-12 items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl  hover:bg-gray-100  gap-3`}
      data-accordion-target={`#accordion-collapse-body-${index}`}
      aria-expanded={isOpen[index] ? 'true' : 'false'}
      aria-controls={`accordion-collapse-body-${index}`}
      onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => onClick(index)}
    >
      {title}
      <DirectionSVG direction={isOpen[index] ? 'top' : 'down'} size="4" />
    </button>
  );
}

export default AccordionOpenButton;
