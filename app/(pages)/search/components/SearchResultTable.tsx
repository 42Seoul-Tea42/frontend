import React, { useState } from 'react';
import SearchResultTableRow from './SearchResultTableRow';
import useSortedUsers from '../hooks/useSortedUsers';
import SortButton from './SortButton';
const SearchResultTable = () => {
  const users = [
    {
      id: 1,
      name: '아이디 1 유저',
      age: 24,
      distance: 2,
      fame: 5,
      interests: ['Music', 'Travel', 'Food']
    },
    {
      id: 2,
      name: '아이디 2 유저',
      age: 24,
      distance: 1,
      fame: 5,
      interests: ['Music', 'Travel', 'Food']
    }
  ];

  const [sortBy, setSortBy] = useState<string>('name');
  const [sortOrder, setSortOrder] = useState<'descending' | 'ascending'>('ascending');

  const sortedUsers = useSortedUsers({
    users,
    sortBy,
    sortOrder
  });

  return (
    <div className="relative mt-40 shadow overflow-x-scroll sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="flex justify-between">
            <th scope="col" className="flex items-center px-6 py-3">
              <p className="text-lg mr-2">이름</p>
            </th>
            <th scope="col" className="flex items-center px-6 py-3">
              <p className="text-lg mr-2">나이</p>
              <SortButton
                upClick={() => {
                  setSortBy('age');
                  setSortOrder('ascending');
                }}
                downClick={() => {
                  setSortBy('age');
                  setSortOrder('descending');
                }}
              />
            </th>
            <th scope="col" className="flex items-center px-6 py-3">
              <p className="text-lg mr-2">거리</p>
              <SortButton
                upClick={() => {
                  setSortBy('distance');
                  setSortOrder('ascending');
                }}
                downClick={() => {
                  setSortBy('distance');
                  setSortOrder('descending');
                }}
              />
            </th>
            <th scope="col" className="flex items-center px-6 py-3">
              <p className="text-lg mr-2">등급</p>
              <SortButton
                upClick={() => {
                  setSortBy('fame');
                  setSortOrder('ascending');
                }}
                downClick={() => {
                  setSortBy('fame');
                  setSortOrder('descending');
                }}
              />
            </th>
            <th scope="col" className="flex items-center px-6 py-3">
              <p className="text-lg mr-2">태그</p>
              <SortButton
                upClick={() => {
                  setSortBy('interests');
                  setSortOrder('ascending');
                }}
                downClick={() => {
                  setSortBy('interests');
                  setSortOrder('descending');
                }}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user, index) => (
            <SearchResultTableRow
              key={index}
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
