'use client';
import { useDispatch, useSelector } from 'react-redux';
import { useFilter, useSort } from '../hooks';
import { useEffect, useState } from 'react';
import FilterControlDrawer from '../search/components/FilterControlDrawer';
import SortBarVisibleControl from '../components/SortBarVisibleControl';
import SortBar from '../components/SortBar';
import UserCards from './UserCards';
import ProfileDetailModalControl from '../components/ProfileDetailModalControl';
import { RootState } from '@/redux/store';
import { getSuggestionUsers } from '@/redux/slices/suggestionSlice';
import { MainContentsArea, ProfileDetailModalContents } from '@/ui';

function Home() {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.suggestionSlice.users);
  // 필터먼저 씌우고 그다음 정렬해야함 만약 정렬을 먼저 시키면 정렬이 바뀔때 필터가 해제됨
  const [filteredUsers, onFilter] = useFilter(users);
  const [sortedUsers, setSortBy, setSortOrder] = useSort(users);
  const [renderUsers, setRenderUsers] = useState<any[]>([]);

  useEffect(() => {
    // test
    dispatch<any>(getSuggestionUsers());
    setRenderUsers(users);
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
          shape={<p className="text-lg text-gray-500 font-thin">필터</p>}
          onSubmit={() => onFilter()}
        />
      }
      sort={
        <SortBarVisibleControl
          props={
            <SortBar
              items={[
                { text: '나이', sortBy: 'age' },
                { text: '거리', sortBy: 'distance' },
                { text: '등급', sortBy: 'rating' },
                { text: '관심사', sortBy: 'interests' }
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
          <UserCards users={renderUsers} />
        </>
      }
    />
  );
}

export default Home;
