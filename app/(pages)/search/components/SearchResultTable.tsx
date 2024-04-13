import React, { useState } from 'react';
import SearchResultTableRow from './SearchResultTableRow';
import useSortedUsers from '../hooks/useSortedUsers';
import ThElement from './ThElement';
import { UserProfileInquirySet } from '../../../redux/interface';

type SearchResultTableProps = {
  users: UserProfileInquirySet[];
  schema: { text: string; sortBy: string }[];
};

const SearchResultTable: React.FC<SearchResultTableProps> = ({ users, schema }) => {
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
            {schema.map((item, index) => (
              <th scope="col" className="px-6 py-3">
                <ThElement
                  key={index}
                  text={item.text}
                  sortBy={() => setSortBy(item.sortBy)}
                  up={() => setSortOrder('descending')}
                  down={() => setSortOrder('ascending')}
                />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user, index) => (
            <SearchResultTableRow
              key={index}
              name={user.identity.name}
              age={user.ageGender.age}
              distance={user.another.distance}
              fame={user.profile.rating}
              interestsCount={user.profile.interests.length}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResultTable;
