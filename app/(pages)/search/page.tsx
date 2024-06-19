'use client';

import SearchResultTable from './components/SearchResultTable';
import FilterControlDrawer from './components/FilterControlDrawer';
import { useSort } from '../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { SearchSVG } from '@/svg';
import { FancyButton, MainContentsArea, ProfileDetailModalContents, TableRow } from '@/ui';
import { getProfileDetail, setProfileInquiryUser, setProfileModalVisible } from '@/redux/slices/profileInquirySlice';
import _ from 'lodash';
import ProfileDetailModalControl from '../components/ProfileDetailModalControl';
import { Fancy } from '@/redux/enum';
import { patchFancy, patchUnFancy, postSearch } from '@/redux/slices/suggestionSlice';
import SortBarVisibleControl from '../components/SortBarVisibleControl';
import SortBar from '../components/SortBar';
import UserCards from '../home/UserCards';

const Search: React.FC = () => {
  const users = useSelector((state: RootState) => state.suggestionSlice.users);
  const [sortedUsers, setSortBy, setSortOrder] = useSort(users);
  const dispatch = useDispatch();

  // 유저 상세 조회 클릭시 동작
  const clickUserDetail = (userId: string) => {
    // 유저 상세 정보 - serverState
    dispatch(setProfileModalVisible(true));
    dispatch<any>(getProfileDetail(userId));
    // 유저 기본 정보 - localState
    const selectUser = _.find(users, { id: userId });
    dispatch(setProfileInquiryUser(selectUser));
  };

  const toggleFancy = (user: any) => {
    if (user.fancy === Fancy.NONE || user.fancy === Fancy.RECV) {
      dispatch<any>(patchFancy(user.id));
    } else {
      dispatch<any>(patchUnFancy(user.id));
    }
  };

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
