'use client';

import { useDispatch, useSelector } from 'react-redux';
import { usersInquirySetDummy } from '../../UserDummy';
import { useFilter, useSort } from '../hooks';
import { useEffect, useState } from 'react';
import { UserProfileInquirySet } from '../../redux/interface';
import { MainContentsArea } from '../../UI';
import FilterControlDrawer from '../search/components/FilterControlDrawer';
import SortBarVisibleControl from '../components/SortBarVisibleControl';
import SortBar from '../components/SortBar';
import ProfileDetailModal from '../components/ProfileDetailModal';
import UserCards from './UserCards';
import { getSuggestionUsers } from '../../redux/slices/suggestionSlice';
import { getLogin } from '../../redux/slices/loginSlice';
import { RootState } from '../../redux/store';
import ProfileDetailModalControl from '../components/ProfileDetailModalControl';

function Home() {
  const dispatch = useDispatch();
  // const users = useSelector((state: RootState) => state.suggestionSlice.users);
  const users = usersInquirySetDummy;
  // 필터먼저 씌우고 그다음 정렬해야함 만약 정렬을 먼저 시키면 정렬이 바뀔때 필터가 해제됨
  const [filteredUsers, onFilter] = useFilter(users);
  const [sortedUsers, setSortBy, setSortOrder] = useSort(filteredUsers);
  const [renderUsers, setRenderUsers] = useState<UserProfileInquirySet[]>([]);

  useEffect(() => {
    // test
    // dispatch<any>(getSuggestionUsers());
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
          <UserCards users={renderUsers} />
        </>
      }
    />
  );
}

export default Home;
