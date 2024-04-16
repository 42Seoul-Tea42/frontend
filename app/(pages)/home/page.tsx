'use client';

import { useDispatch } from 'react-redux';
import { usersInquirySetDummy } from '../../UserDummy';
import { Key, useEffect, useState } from 'react';
import { UserProfileInquirySet } from '../../redux/interface';
import { getSuggestionUsersFromServer } from '../../redux/slices/suggestionSlice';
import FilterControlDrawer from '../search/components/FilterControlDrawer';
import ProfileDetailModal from '../components/ProfileDetailModal';
import { useFilter, useSort } from '../hooks';
import { MainContentsArea } from '../../UI';
import ProfileDetailModalControl from '../../UI/ProfileDetailModalControl';
import SortBar from '../components/SortBar';
import SortBarVisibleControl from '../components/SortBarVisibleControl';
import UserCards from './UserCards';

function Home() {
  const dispatch = useDispatch();
  // const users = useSelector((state: RootState) => state.suggestionSlice.users);
  const users = usersInquirySetDummy;
  const [filteredUsers, onFilter] = useFilter(users);
  const [sortedUsers, setSortBy, setSortOrder] = useSort(filteredUsers);
  const [renderUsers, setRenderUsers] = useState<UserProfileInquirySet[]>([]);

  useEffect(() => {
    dispatch(getSuggestionUsersFromServer() as any);
    // 서버에서 요청하는것 성공하면 fullfiled 에서 onFilter() 호출하는것으로 수정
    onFilter();
  }, []);

  useEffect(() => {
    setRenderUsers(sortedUsers);
  }, [sortedUsers]);

  useEffect(() => {
    setRenderUsers(filteredUsers);
  }, [filteredUsers]);

  return (
    <MainContentsArea
      filter={
        <FilterControlDrawer
          shape={<p className="text-lg text-gray-500 font-thin">필터링</p>}
          onSubmit={() => onFilter()}
        />
      }
      sort={
        <SortBarVisibleControl
          props={
            <SortBar
              items={[
                { text: '나이', sortBy: 'ageGender.age' },
                { text: '거리', sortBy: 'another.distance' },
                { text: '등급', sortBy: 'profile.rating' },
                { text: '관심사', sortBy: 'profile.interests' }
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
          <ProfileDetailModalControl profileDetail={<ProfileDetailModal />} />
          {/* suggestion user service */}
          <UserCards users={users} />
        </>
      }
    />
  );
}

export default Home;
