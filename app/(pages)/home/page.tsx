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

const Home = () => {
  const dispatch = useDispatch();
  // const users = useSelector((state: RootState) => state.suggestionSlice.users);
  const users = usersInquirySetDummy;
  const [sortedUsers, setSortBy, setSortOrder] = useSort(users);
  const [filteredUsers, onFilter] = useFilter(sortedUsers);
  const [renderingControl, setRenderingControl] = useState<'filter' | 'sort'>('sort');
  const [renderUsers, setRenderUsers] = useState<UserProfileInquirySet[]>([]);

  useEffect(() => {
    dispatch(getSuggestionUsersFromServer() as any);
  }, []);

  useEffect(() => {
    if (renderingControl === 'filter') {
      onFilter(true);
      setRenderUsers(filteredUsers);
    }
    if (renderingControl === 'sort') {
      setSortBy('identity.firstname');
      setSortOrder('ascending');
      setRenderUsers(sortedUsers);
    }
  }, [renderingControl]);

  return (
    <div className="flex flex-wrap justify-center min-h-screen h-relative">
      <FilterControlDrawer onSubmit={() => onFilter(true)} />
      <div className="mx-auto m-20">
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
