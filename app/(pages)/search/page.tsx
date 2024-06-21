'use client';

import FilterControlDrawer from './components/FilterControlDrawer';
import { useSort } from '../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { SearchSVG } from '@/svg';
import { MainContentsArea, ProfileDetailModalContents, TableRow } from '@/ui';
import _ from 'lodash';
import ProfileDetailModalControl from '../components/ProfileDetailModalControl';
import { postSearch } from '@/redux/slices/suggestionSlice';
import SortBarVisibleControl from '../components/SortBarVisibleControl';
import SortBar from '../components/SortBar';
import UserCards from '../home/UserCards';

const Search: React.FC = () => {
  const users = useSelector((state: RootState) => state.suggestionSlice.users);
  const [sortedUsers, setSortBy, setSortOrder] = useSort(users);
  const dispatch = useDispatch();

  return (
    <MainContentsArea
      filter={<FilterControlDrawer shape={<SearchSVG />} onSubmit={() => dispatch<any>(postSearch())} />}
      sort={
        <SortBarVisibleControl
          props={
            <SortBar
              items={[
                { text: '나이', sortBy: 'age' },
                { text: '거리', sortBy: 'distance' },
                { text: '등급', sortBy: 'rating' },
                { text: '관심사', sortBy: 'interests.length' }
              ]}
              setSortBy={setSortBy}
              setSortOrder={setSortOrder}
            />
          }
        />
      }
      contents={
        <>
          {/* profile inquiry service */}
          <ProfileDetailModalControl profileDetail={<ProfileDetailModalContents />} />
          {/* suggestion user service */}
          <UserCards users={sortedUsers} />
        </>
      }
    />
  );
};

export default Search;
