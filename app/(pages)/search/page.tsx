'use client';

import SearchResultTable from './components/SearchResultTable';
import FilterControlDrawer from './components/FilterControlDrawer';
import { useSort } from '../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { DirectionSVG } from '@/svg';
import { postSearch } from '@/redux/slices/searchSlice';
import { TableRow } from '@/UI';

const Search: React.FC = () => {
  const users = useSelector((state: RootState) => state.searchSlice.users);
  const [sortedUsers, setSortBy, setSortOrder] = useSort(users);
  const dispatch = useDispatch();

  return (
    <div className="flex h-screen justify-center bg-green-50">
      <div className="w-full mr-10">
        <FilterControlDrawer
          shape={<DirectionSVG direction="down" size="6" />}
          onSubmit={() => dispatch<any>(postSearch())}
        />
        <div className="ml-10">
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
                    head={user.identity.firstname}
                    columns={[
                      `${user.ageGender.age}세`,
                      `${user.another.distance} km`,
                      user.profile.rating,
                      user.profile.interests.length
                    ]}
                  />
                ))}
              </>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
