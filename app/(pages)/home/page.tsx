'use client';

import { Key, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { UserProfileInquirySet } from '../../redux/interface';
import UserDetailsModal from '../components/UserDetailsModal';
import { getSuggestionUsersFromServer } from '../../redux/slices/suggestionSlice';
import { usersInquirySetDummy } from '../../UserDummy';
import CardsSkeleton from './Skeleton';
import SortControlBar from './SortControlBar';
import FilterControlDrawer from '../search/components/FilterControlDrawer';
import UserCard from './UserCard';
import { setProfileModalVisible } from '../../redux/slices/profileInquirySlice';
import useFilter from '../hooks/useFilter';
import useSort from '../hooks/useSort';
import UserCardGrid from './UserCardGrid';
import { DirectionSVG } from '../../svg';

const Home = () => {
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
    <div className="flex flex-wrap justify-center min-h-screen h-relative">
      <FilterControlDrawer
        shape={<p className="text-lg text-gray-500 font-thin">필터링</p>}
        onSubmit={() => onFilter()}
      />
      <div className="mx-auto m-36">
        <div className="flex flex-col m-10">
          <SortControlBar
            items={[
              { text: '나이', setSortBy: 'ageGender.age' },
              { text: '거리', setSortBy: 'another.distance' },
              { text: '등급', setSortBy: 'profile.rating' },
              { text: '관심사', setSortBy: 'profile.interests' }
            ]}
            setSortBy={setSortBy}
            setSortOrder={setSortOrder}
          />
        </div>
        <UserCardGrid
          items={
            <>
              {renderUsers.length > 0 ? (
                renderUsers.map((user: UserProfileInquirySet, index: Key) => (
                  <div key={index}>
                    <UserCard
                      onClick={() => dispatch(setProfileModalVisible(true))}
                      imgSrc={user.photo.mainPhoto}
                      alt={index.toString()}
                      name={user.identity.firstname}
                      age={user.ageGender.age}
                      distance={user.another.distance}
                      fancyTargetId={user.identity.id}
                    />
                  </div>
                ))
              ) : (
                <CardsSkeleton style="bg-red-300 opacity-50" />
              )}
            </>
          }
        />
        <UserDetailsModal targetId={1} />
      </div>
    </div>
  );
};

export default Home;
