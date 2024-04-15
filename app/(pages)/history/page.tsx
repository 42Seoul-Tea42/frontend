'use client';

import { useDispatch } from 'react-redux';
import { usersInquirySetDummy } from '../../UserDummy';
import { useCloseOnOutsideClick } from '../hooks';
import { Key, useEffect } from 'react';
import { UserPublicSet } from '../../redux/interface';
import ColorPickerUserCard from '../fancy/components/ColorPickerUserCard';
import { CardsSkeleton, UserCard } from '../../UI';
import { setSelectedUser } from '../../redux/slices/profileInquirySlice';
import ProfileDetailModal from '../components/ProfileDetailModal';

const History = () => {
  const dispatch = useDispatch();
  // const users = useSelector((state: RootState) => state.historySlice.users);
  const users = usersInquirySetDummy;
  const [profileDetailModalRef, ProfileDetailModalVisible, setProfileDetailModalVisible] = useCloseOnOutsideClick();
  // const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchHistoryUsers(new Date()) as any);
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
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
          {users.length > 0 ? (
            users.map((user: UserPublicSet, index: Key) => (
              <div key={index}>
                <ColorPickerUserCard
                  style={'p-2 border rounded-xl bg-blue-200'}
                  userCard={
                    <UserCard
                      onClick={() => {
                        dispatch(setSelectedUser(parseInt(user.identity.id)));
                        setProfileDetailModalVisible(true);
                      }}
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
            <CardsSkeleton style="bg-blue-300 opacity-50" />
          )}
        </div>
        <ProfileDetailModal modalRef={profileDetailModalRef} modalVisible={ProfileDetailModalVisible} />
      </div>
    </div>
  );
};

export default History;
