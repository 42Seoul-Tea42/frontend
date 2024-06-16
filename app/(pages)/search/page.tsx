'use client';

import SearchResultTable from './components/SearchResultTable';
import FilterControlDrawer from './components/FilterControlDrawer';
import { useSort } from '../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { SearchSVG } from '@/svg';
import { ProfileDetailModalContents, TableRow } from '@/ui';
import { postSearch } from '@/redux/slices/searchSlice';
import { getProfileDetail, setProfileInquiryUser, setProfileModalVisible } from '@/redux/slices/profileInquirySlice';
import _ from 'lodash';
import ProfileDetailModalControl from '../components/ProfileDetailModalControl';

const Search: React.FC = () => {
  const users = useSelector((state: RootState) => state.searchSlice.users);
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

  return (
    <div className="flex relative h-screen justify-center bg-green-50">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className={sortedUsers.length ? 'hidden' : ''}>
          <p>검색 결과가 없습니다.</p>
        </div>
      </div>
      <div className="w-full mr-10">
        <FilterControlDrawer shape={<SearchSVG />} onSubmit={() => dispatch<any>(postSearch())} />
        <div className="ml-10">
          <SearchResultTable
            setSortBy={setSortBy}
            setSortOrder={setSortOrder}
            schema={[
              { text: '이름' },
              { text: '나이', sortBy: 'age' },
              { text: '거리', sortBy: 'distance' },
              { text: '평판', sortBy: 'rating' },
              { text: '관심사', sortBy: 'interests' }
            ]}
            body={
              <>
                {sortedUsers.map((user, index) => (
                  <TableRow
                    key={index}
                    option={{ image: '/emoji/1.jpg' }}
                    head={user.firstname}
                    columns={[`${user.age}세`, `${user.distance} km`, user.rating, user.interests.length]}
                    onClick={() => clickUserDetail(user.id)}
                  />
                ))}
              </>
            }
          />
        </div>
      </div>
      {/* profile inquiry service */}
      <ProfileDetailModalControl profileDetail={<ProfileDetailModalContents />} />
    </div>
  );
};

export default Search;
