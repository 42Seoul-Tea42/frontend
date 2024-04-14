import { useState } from 'react';
import { DirectionSVG } from '../../../svg';
import AccordionOpenButton from './AccordionOpenButton';

type AccordionItem = {
  title: string;
  content: JSX.Element;
};

type AccordionItemsProps = {
  items: AccordionItem[];
};

const AccordionItems: React.FC<AccordionItemsProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState<boolean[]>(Array(items.length).fill(false));

  const toggleAccordion = (index: number) => {
    setIsOpen(prevState => prevState.map((state, idx) => (idx === index ? !state : false)));
  };

  return (
    <>
      {items.map((item, index) => (
        <div key={index}>
          <div
            id={`accordion-collapse-${index}`}
            data-accordion="collapse"
            className="border-b border-gray-200 dark:border-gray-700"
          >
            <h2 id={`accordion-collapse-heading-${index}`} className="max-h-12">
              <AccordionOpenButton
                button={
                  <button
                    type="button"
                    className={`${
                      isOpen[index] && 'border-2 border-gray-500'
                    } flex max-h-12 items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3`}
                    data-accordion-target={`#accordion-collapse-body-${index}`}
                    aria-expanded={isOpen[index] ? 'true' : 'false'}
                    aria-controls={`accordion-collapse-body-${index}`}
                    onClick={() => toggleAccordion(index)}
                  >
                    {item.title}
                    <DirectionSVG direction={isOpen[index] ? 'top' : 'down'} size="4" />
                  </button>
                }
              />
            </h2>
            <div
              id={`accordion-collapse-body-${index}`}
              className={`${isOpen[index] ? 'border-2 border-gray-500' : 'hidden'}`}
              aria-labelledby={`accordion-collapse-heading-${index}`}
            >
              <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                {item.content}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AccordionItems;
