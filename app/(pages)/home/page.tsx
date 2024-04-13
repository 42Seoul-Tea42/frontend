'use client';

import Image from 'next/image';
import { Key, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserProfileInquirySet, UserPublicSet } from '../../redux/interface';
import FancyButton from '../fancy/components';
import UserDetailsModal from '../components/UserDetailsModal';
import { RootState } from '../../redux/store';
import { getSuggestionUsersFromServer } from '../../redux/slices/suggestionSlice';
import SuggestionCard from './SuggestionCard';
import useSortedUsers from '../search/hooks/useSortedUsers';
import { usersInquirySetDummy } from '../../UserDummy';
import SortButton from '../search/components/SortButton';
import CardsSkeleton from './Skeleton';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
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
      <div className="mx-auto m-20">
        <div className="flex flex-col m-10">
          <div className="flex justify-center items-center gap-4">
            <p className="font-semibold text-lg text-gray-600">test1</p>
            <SortButton upClick={() => setSortOrder('descending')} downClick={() => setSortOrder('ascending')} />
            <span className="text-red-200 w-10 h-5 border-2 border-white dark:border-gray-800 rounded-full"></span>
          </div>
          <div className="flex justify-center items-center gap-4">
            <p className="font-semibold text-lg text-gray-600">test2</p>
            <span className="text-red-200 w-10 h-5 border-2 border-white dark:border-gray-800 rounded-full"></span>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
          {sortedUsers.length > 0 ? (
            sortedUsers.map((user: UserProfileInquirySet, index: Key) => (
              <div key={index}>
                <SuggestionCard
                  imgSrc={user.photo.mainPhoto}
                  alt={index.toString()}
                  name={user.identity.firstname}
                  distance={user.another.distance}
                  fancyTargetId={user.identity.id}
                />
              </div>
            ))
          ) : (
            <CardsSkeleton style="bg-red-300 opacity-50" />
          )}
        </div>
        <UserDetailsModal targetId={1} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </div>
    </div>
  );
};

export default Home;
