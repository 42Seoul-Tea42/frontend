'use client';

import SearchResultTable from './components/SearchResultTable';
import { usersInquirySetDummy } from '../../UserDummy';
import FilterControlDrawer from './components/FilterControlDrawer';
import { DirectionSVG } from '../../svg';
import { useSort } from '../hooks';
import { TableRow } from '../../UI';

const Search: React.FC = () => {
  const users = usersInquirySetDummy;
  const [sortedUsers, setSortBy, setSortOrder] = useSort(users);

  const submitFilterSearch = () => {};

  return (
    <div className="flex h-screen">
      <div className="w-full">
        <FilterControlDrawer shape={<DirectionSVG direction="down" size="6" />} onSubmit={submitFilterSearch} />
        <SearchResultTable
          setSortBy={setSortBy}
          setSortOrder={setSortOrder}
          schema={[
            { text: '이름' },
            { text: '나이', sortBy: 'ageGender.age' },
            { text: '거리', sortBy: 'another.distance' },
            { text: '평판', sortBy: 'profile.rating' },
            { text: '관심사', sortBy: 'profile.interests' }
          ]}
          body={
            <>
              {sortedUsers.map((user, index) => (
                <TableRow
                  key={index}
                  option={{ image: '/emoji/1.jpg' }}
                  columns={[
                    user.identity.firstname,
                    `${user.ageGender.age}세`,
                    `${user.another.distance} km`,
                    user.profile.rating
                  ]}
                />
              ))}
            </>
          }
        />
      </div>
    </div>
  );
};

export default Search;
