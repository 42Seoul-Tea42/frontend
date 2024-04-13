'use client';

import { UserPublicSet } from '../../redux/interface';
import UserDetailsModal from '../components/UserDetailsModal';
import { Key, useEffect, useState } from 'react';
import Skeleton from '../home/Skeleton';
import UserCard from '../home/UserCard';
import { usersInquirySetDummy } from '../../UserDummy';
import ColorPickerUserCard from './components/ColorPickerUserCard';

const Fancy = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  // const users = useSelector((state: RootState) => state.fancySlice.users);
  const users = usersInquirySetDummy;

  // const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchFancyUsers(new Date()) as any);
  }, []);

  return (
    <div className="flex flex-wrap justify-center min-h-screen h-relative">
      <div className="mx-auto m-20">
        <div className="flex flex-col m-10">
          <div className="flex justify-center items-center gap-4">
            <p className="font-semibold text-lg text-gray-600">test1</p>
            <span className="text-red-200 w-10 h-5 border-2 border-white dark:border-gray-800 rounded-full"></span>
          </div>
          <div className="flex justify-center items-center gap-4">
            <p className="font-semibold text-lg text-gray-600">test2</p>
            <span className="text-red-200 w-10 h-5 border-2 border-white dark:border-gray-800 rounded-full"></span>
          </div>{' '}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
          {users.length > 0 ? (
            users.map((user: UserPublicSet, index: Key) => (
              <div key={index}>
                <ColorPickerUserCard
                  style={'p-2 border rounded-xl bg-blue-200'}
                  userCard={
                    <UserCard
                      imgSrc={user.photo.mainPhoto}
                      alt={index.toString()}
                      name={user.identity.firstname}
                      age={user.ageGender.age}
                      distance={user.another.distance}
                      fancyTargetId={user.identity.id}
                    />
                  }
                />
              </div>
            ))
          ) : (
            <Skeleton style="bg-yellow-300 opacity-50" />
          )}
        </div>
        <UserDetailsModal targetId={1} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </div>
    </div>
  );
};

export default Fancy;
