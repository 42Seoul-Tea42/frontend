import { Key, useEffect, useState } from 'react';
import UserCardPhoto from './UserCardPhoto';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileDetail, setProfileInquiryUser, setProfileModalVisible } from '@/redux/slices/profileInquirySlice';
import { CardsSkeleton, FancyButton, UserCardGrid } from '@/ui';
import { patchFancy, patchUnFancy } from '@/redux/slices/suggestionSlice';
import { Fancy } from '@/redux/enum';
import _ from 'lodash';
import UserCardBorder from './UserCardBorder';

type UserCardsProps = {
  // Add your prop types here
  users: any[];
};

function UserCards({ users }: UserCardsProps) {
  const dispatch = useDispatch();

  // 유저 상세 조회 클릭시 동작
  const clickUserDetail = (userId: string) => {
    // 유저 상세 정보 - serverState
    dispatch(setProfileModalVisible(true));
    dispatch<any>(getProfileDetail(userId));
    // 유저 기본 정보 - localState
    const selectUser = _.find(users, { id: userId });
    dispatch(setProfileInquiryUser(selectUser));
  };

  const formatName = (name: string) => {
    return name.substring(0, 4);
  };

  const toggleFancy = (user: any) => {
    if (user.fancy === Fancy.NONE || user.fancy === Fancy.RECV) {
      dispatch<any>(patchFancy(user.id));
    } else {
      dispatch<any>(patchUnFancy(user.id));
    }
  };

  return (
    <UserCardGrid
      items={
        <>
          {users.length > 0 ? (
            users.map((user: any, index: Key) => (
              <div key={index}>
                <UserCardBorder
                  user={user}
                  props={
                    <div className="max-w-[200px]">
                      {user.fancy}
                      <div className="relative rounded-t-xl">
                        {/* 넘길 유저의 아이디가 필요해서 해당 컴포넌트에서 구현해야함 */}
                        <div onClick={() => clickUserDetail(user.id)}>
                          <UserCardPhoto src={user.picture} alt={user.firstname} />
                        </div>
                      </div>
                      <div className="flex items-center w-full h-12 bg-white rounded-b-lg border-t-1 pl-2 gap-1">
                        <p className="w-12 mr-3 font-semibold text-xl text-gray-700">{formatName(user.firstname)}</p>
                        <p className="mr-1 pl-1 pr-1 border rounded-full text-xl text-gray-500">{user.age}</p>
                        <p className="font-thin text-base text-gray-900">{user.distance}km</p>
                        {/* {fancyButton} */}
                        <FancyButton fancyState={user.fancy} onClick={() => toggleFancy(user)} />
                      </div>
                    </div>
                  }
                />
              </div>
            ))
          ) : (
            <CardsSkeleton style="bg-green-300 opacity-50" />
          )}
        </>
      }
    />
  );
}

export default UserCards;
