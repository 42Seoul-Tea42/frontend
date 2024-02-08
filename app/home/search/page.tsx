'use client';

import InputRangeStarBar from './components/InputRangeStarBar';

const Search = () => {
  const handleSearchButton = () => {};
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
