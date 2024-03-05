'use client';

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import fetchApi from '../../../utils/api';
import TagSelector from '../../../auth/signup/components/TagSelector';
import InputRangeStarBar from './components/InputRangeStarBar';
import DirectionSVG from '../../../svg/DirectionSVG';
import InputMinMaxAge from './components/InputMinMaxAge';
import InputRangeDistance from './components/InputRangeDistance';
import { SearchSVG } from '../../../svg/HomeNavBarSVG';

const Search: React.FC = () => {
  const minAge = useSelector((state: RootState) => state.searchParam.minAge);
  const maxAge = useSelector((state: RootState) => state.searchParam.maxAge);
  const distance = useSelector((state: RootState) => state.searchParam.distance);
  const fameRate = useSelector((state: RootState) => state.searchParam.fame);
  const tags = useSelector((state: RootState) => state.searchParam.tags);

  const [isOpen, setIsOpen] = useState<boolean[]>([false, false, false, false]);

  const toggleAccordion = (index: number) => {
    setIsOpen((prevState: boolean[]) =>
      prevState.map((state, idx) => (idx === index ? !state : false))
    );
  };

  const handleSearchButton = () => {
    const sendData = {
      min_age: minAge,
      max_age: maxAge,
      distance: distance,
      fame: fameRate,
      tags: tags
    };

    fetchApi('/user/search', 'POST', JSON.stringify(sendData));
  };

  const accordionItems = [
    { title: '검색할 나이 범위를 선택해주세요.', content: <InputMinMaxAge /> },
    { title: '검색할 태그를 선택해주세요.', content: <TagSelector /> },
    { title: '검색할 최대 거리를 선택해주세요.', content: <InputRangeDistance /> },
    { title: '검색할 등급을 선택해주세요.', content: <InputRangeStarBar /> }
  ];

  return (
    <div className="flex h-screen">
      <div className="mx-auto mt-20 w-1/3 md:w-1/2 min-w-96">
        <div className="md:min-w-72 md:grid md:grid-cols-2">
          {accordionItems.map((item, index) => (
            <div key={index} id={`accordion-collapse-${index}`} data-accordion="collapse">
              <h2 id={`accordion-collapse-heading-${index}`} className="max-h-12">
                <button
                  type="button"
                  className="flex w-full max-h-12 items-center justify-between p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 rounded-t-xl dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
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
                <div className="p-5 border rounded-b-lg border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end mt-10">
          <button
            type="button"
            className="flex items-center text-white bg-gray-700 hover:bg-gray-800 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 gap-2"
            onClick={() => {}}
          >
            <SearchSVG />
            검색하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
