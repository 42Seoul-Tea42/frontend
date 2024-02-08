'use client';

import { useSelector } from 'react-redux';
import InputRangeStarBar from './components/InputRangeStarBar';
import { RootState } from '../../store';
import fetchApi from '../../utils/api';

const Search = () => {
  const ageRange = useSelector((state: RootState) => state.searchValue.age);
  const distance = useSelector((state: RootState) => state.searchValue.distance);
  const fameRate = useSelector((state: RootState) => state.searchValue.fame);
  const tags = useSelector((state: RootState) => state.searchValue.tags);

  const handleSearchButton = () => {
    const sendData = {
      min_age: ageRange.min,
      max_age: ageRange.max,
      distance: distance,
      fame: fameRate,
      tags: tags
    };

    fetchApi('/user/search', 'POST', JSON.stringify(sendData));
  };

  return (
    <>
      <h1 className="w-full bg-red-100 h-screen">
        거리
        <input type="range" min="0" max="20" step="5"></input>
        나이
        <input type="range" min="0" max="20" step="5"></input>
        <InputRangeStarBar />
        <button
          type="button"
          className="text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          onClick={handleSearchButton}
        >
          검색
        </button>
      </h1>
    </>
  );
};

export default Search;
