'use client';

import { Key, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { UserProfileInquirySet } from '../../redux/interface';
import UserDetailsModal from '../components/UserDetailsModal';
import { getSuggestionUsersFromServer } from '../../redux/slices/suggestionSlice';
import useSortedUsers from '../search/hooks/useSortedUsers';
import { usersInquirySetDummy } from '../../UserDummy';
import CardsSkeleton from './Skeleton';
import SortControlBar from './SortControlBar';
import FilterDrawer from '../search/components/FilterDrawer';
import UserCard from './UserCard';
import { setProfileModalVisible } from '../../redux/slices/profileInquirySlice';

const Home = () => {
  // const users = useSelector((state: RootState) => state.suggestionSlice.users);
  const users = usersInquirySetDummy;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSuggestionUsersFromServer() as any);
  }, []);

  const [sortBy, setSortBy] = useState<any>('another.distance');
  const [sortOrder, setSortOrder] = useState<'descending' | 'ascending'>('ascending');
  const sortedUsers = useSortedUsers({
    users,
    sortBy,
    sortOrder
  });

  return (
    <div className="flex flex-wrap justify-center min-h-screen h-relative">
      <FilterDrawer onClick={() => {}} />
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
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
          {sortedUsers.length > 0 ? (
            sortedUsers.map((user: UserProfileInquirySet, index: Key) => (
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
        </div>
        <UserDetailsModal targetId={1} />
      </div>
    </div>
  );
};

export default Home;
