import React from 'react';
import SearchResultTableRow from './SearchResultTableRow';
const SearchResultTable = () => {
  const users = [
    {
      id: 1,
      name: 'Jane Cooper',
      age: 24,
      distance: 3,
      fame: 5,
      interests: ['Music', 'Travel', 'Food']
    }
  ];

  return (
    <div className="relative mt-40 shadow overflow-x-scroll sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              이름
            </th>
            <th scope="col" className="px-6 py-3">
              나이
            </th>
            <th scope="col" className="px-6 py-3">
              거리
            </th>
            <th scope="col" className="px-6 py-3">
              등급
            </th>
            <th scope="col" className="px-6 py-3">
              태그 겹치는 개수
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <SearchResultTableRow
              name={user.name}
              age={user.age}
              distance={user.distance}
              fame={user.fame}
              interestsCount={user.interests.length}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResultTable;
