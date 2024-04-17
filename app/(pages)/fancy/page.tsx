'use client';

import { Key, useEffect } from 'react';
import { usersInquirySetDummy } from '../../UserDummy';
import { useCloseOnOutsideClick } from '../hooks';
import { useDispatch } from 'react-redux';
import { UserPublicSet } from '../../redux/interface';
import ProfileDetailModal from '../components/ProfileDetailModal';
import {
  CardsSkeleton,
  ColorPickerUserCard,
  FancyButton,
  MainContentsArea,
  ProfileDetailModalControl,
  UserCardGrid
} from '../../UI';

function Fancy() {
  // const users = useSelector((state: RootState) => state.fancySlice.users);
  const users = usersInquirySetDummy;
  const [profileDetailModalRef, ProfileDetailModalVisible, setProfileDetailModalVisible] = useCloseOnOutsideClick();

  useEffect(() => {
    // dispatch(fetchFancyUsers(new Date()) as any);
  }, []);

  const dispatch = useDispatch();
  return (
    <MainContentsArea
      contents={
        <div>
          <div className="flex flex-col mb-10">
            <div className="flex justify-center items-center gap-4">
              <p className="font-semibold text-lg text-gray-600">test1</p>
              <span className="text-red-200 w-10 h-5 border-2 border-white dark:border-gray-800 rounded-full"></span>
            </div>
            <div className="flex justify-center items-center gap-4">
              <p className="font-semibold text-lg text-gray-600">test2</p>
              <span className="text-red-200 w-10 h-5 border-2 border-white dark:border-gray-800 rounded-full"></span>
            </div>
          </div>
          <UserCardGrid
            items={
              <>
                {users.length > 0 ? (
                  users.map((user: any, index: Key) => (
                    <div key={index}>
                      <ColorPickerUserCard
                        style={'p-2 border rounded-xl bg-blue-200'}
                        userCard={
                          <UserCard
                            onClick={() => {
                              setProfileDetailModalVisible(true);
                            }}
                            imgSrc={user.photo.mainPhoto}
                            alt={index.toString()}
                            name={user.identity.firstname}
                            age={user.ageGender.age}
                            distance={user.another.distance}
                            fancyButton={<FancyButton onClick={() => {}} />}
                          />
                        }
                      />
                    </div>
                  ))
                ) : (
                  <CardsSkeleton style="bg-yellow-300 opacity-50" />
                )}
                {/* profile inquiry service */}
                <ProfileDetailModalControl
                  modalRef={profileDetailModalRef}
                  modalVisible={ProfileDetailModalVisible}
                  props={<ProfileDetailModal />}
                />{' '}
              </>
            }
          />
        </div>
      }
    />
  );
}

export default Fancy;
