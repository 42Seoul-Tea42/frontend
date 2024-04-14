'use client';

import SearchResultTable from './components/SearchResultTable';
import FilterDrawer from './components/FilterControlDrawer';
import { usersInquirySetDummy } from '../../UserDummy';

const Search: React.FC = () => {
  const users = usersInquirySetDummy;
  return (
    <div className="flex h-screen">
      <div className="w-full">
        <FilterDrawer onSubmit={() => {}} />
        <SearchResultTable
          users={users}
          schema={[
            { text: '나이', sortBy: 'ageGender.age' },
            { text: '거리', sortBy: 'another.distance' },
            { text: '평판', sortBy: 'profile.rating' },
            { text: '관심사', sortBy: 'profile.interests' }
          ]}
        />
      </div>
    </div>
  );
};

export default Search;
