import React, { useState } from 'react';
import SearchResultTableRow from './SearchResultTableRow';
import useSortedUsers from '../hooks/useSortedUsers';
import ThElement from './ThElement';
const SearchResultTable = () => {
  const users = [
    {
      id: 1,
      name: '아이디 1 유저',
      age: 24,
      distance: 2,
      fame: 5,
      interests: 2
    },
    {
      id: 2,
      name: '아이디 2 유저',
      age: 18,
      distance: 1,
      fame: 4,
      interests: 3
    },
    {
      id: 3,
      name: '아이디 3 유저',
      age: 100,
      distance: 100,
      fame: 1,
      interests: 20
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
        <thead className="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="">
            <th scope="col" className="px-6 py-3">
              <p className="mr-2">이름</p>
            </th>
            <th scope="col" className="px-6 py-3">
              <ThElement
                text={'나이'}
                sortBy={() => setSortBy('age')}
                up={() => setSortOrder('descending')}
                down={() => setSortOrder('ascending')}
              />
            </th>
            <th scope="col" className="px-6 py-3">
              <ThElement
                text={'거리'}
                sortBy={() => setSortBy('distance')}
                up={() => setSortOrder('descending')}
                down={() => setSortOrder('ascending')}
              />
            </th>
            <th scope="col" className="px-6 py-3">
              <ThElement
                text={'등급'}
                sortBy={() => setSortBy('fame')}
                up={() => setSortOrder('descending')}
                down={() => setSortOrder('ascending')}
              />
            </th>
            <th scope="col" className="px-6 py-3">
              <ThElement
                text={'관심사'}
                sortBy={() => setSortBy('interests')}
                up={() => setSortOrder('descending')}
                down={() => setSortOrder('ascending')}
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
              interestsCount={user.interests}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResultTable;
