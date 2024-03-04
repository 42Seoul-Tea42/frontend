'use client';

import { useState } from 'react';
import TagSelector from '../../../auth/signup/components/TagSelector';
import DirectionSVG from '../../../components/DirectionSVG';
import GenderRadioList from '../../../auth/signup/components/GenderRadioList';
import EmojiGridList from '../../../auth/login/components/EmojiGridList';
import SexualPreferenceRadioList from '../../../auth/signup/components/SexualPreferenceRadioList';
import EmailVerificationForm from '../../../auth/signup/components/EmailVerificationForm';

const Setting: React.FC = () => {
  const accordionItems = [
    { title: '개인정보', content: <>a</> },
    { title: '이메일 재설정', content: <EmailVerificationForm /> },
    { title: '나의 성별 선택', content: <GenderRadioList /> },
    { title: '성적 취향 선택', content: <SexualPreferenceRadioList /> },
    { title: '나의 관심사 태그를 선택해주세요.', content: <TagSelector /> },
    { title: '관심있는 이모티콘을 설정해주세요.', content: <EmojiGridList /> }
  ];

  const initialState = Array.from(
    { length: accordionItems.length },
    () => false
  );

  const [isOpen, setIsOpen] = useState<boolean[]>(initialState);

  const toggleAccordion = (index: number) => {
    setIsOpen((prevState: boolean[]) =>
      prevState.map((state, idx) => (idx === index ? !state : false))
    );
  };

  return (
    <div className="flex h-screen">
      <div className="mx-auto w-1/3 min-w-96">
        {accordionItems.map((item, index) => (
          <div
            key={index}
            id={`accordion-collapse-${index}`}
            data-accordion="collapse"
          >
            <h2 id={`accordion-collapse-heading-${index}`} className="max-h-12">
              <button
                type="button"
                className="flex max-h-12 items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                data-accordion-target={`#accordion-collapse-body-${index}`}
                aria-expanded={isOpen[index] ? 'true' : 'false'}
                aria-controls={`accordion-collapse-body-${index}`}
                onClick={() => toggleAccordion(index)}
              >
                {item.title}
                <DirectionSVG direction={isOpen[index] ? 'top' : 'down'} />
              </button>
            </h2>
            <div
              id={`accordion-collapse-body-${index}`}
              className={`${isOpen[index] ? '' : 'hidden'}`}
              aria-labelledby={`accordion-collapse-heading-${index}`}
            >
              <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                {item.content}
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-end mt-10">
          <button
            type="button"
            className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => {}}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Setting;
