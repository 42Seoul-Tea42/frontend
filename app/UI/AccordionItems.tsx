import { useState } from 'react';
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
                title={item.title}
                index={index}
                isOpen={isOpen}
                onClick={() => toggleAccordion(index)}
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