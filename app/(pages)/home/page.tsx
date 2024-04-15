'use client';

import { useDispatch } from 'react-redux';
import { usersInquirySetDummy } from '../../UserDummy';
import { Key, useEffect, useState } from 'react';
import { UserProfileInquirySet } from '../../redux/interface';
import { getSuggestionUsersFromServer } from '../../redux/slices/suggestionSlice';
import FilterControlDrawer from '../search/components/FilterControlDrawer';
import ProfileDetailModal from '../components/ProfileDetailModal';
import { useCloseOnOutsideClick, useFilter, useSort } from '../hooks';
import { CardsSkeleton, FancyButton, MainContentsArea, UserCard, UserCardGrid } from '../../UI';
import ProfileDetailModalControl from '../../UI/ProfileDetailModalControl';
import SortControlBar from '../components/SortControlBar';

function Home() {
  const dispatch = useDispatch();
  // const users = useSelector((state: RootState) => state.suggestionSlice.users);
  const users = usersInquirySetDummy;
  const [filteredUsers, onFilter] = useFilter(users);
  const [sortedUsers, setSortBy, setSortOrder] = useSort(filteredUsers);
  const [renderUsers, setRenderUsers] = useState<UserProfileInquirySet[]>([]);
  const [profileDetailModalRef, ProfileDetailModalVisible, setProfileDetailModalVisible] = useCloseOnOutsideClick();

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
        <SortControlBar
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
      contents={
        <UserCardGrid
          items={
            <>
              {renderUsers.length > 0 ? (
                renderUsers.map((user: UserProfileInquirySet, index: Key) => (
                  <div key={index}>
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
                  </div>
                ))
              ) : (
                <CardsSkeleton style="bg-red-300 opacity-50" />
              )}
              {/* profile inquiry service */}
              <ProfileDetailModalControl
                modalRef={profileDetailModalRef}
                modalVisible={ProfileDetailModalVisible}
                props={<ProfileDetailModal />}
              />
            </>
          }
        />
      }
    />
  );
}

export default Home;
