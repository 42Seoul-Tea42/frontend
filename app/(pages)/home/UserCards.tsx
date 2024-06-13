import { Key } from 'react';
import UserCardPhoto from './UserCardPhoto';
import { useDispatch } from 'react-redux';
import { getProfileDetail, setProfileModalVisible } from '@/redux/slices/profileInquirySlice';
import { CardsSkeleton, FancyButton, UserCardGrid } from '@/ui';
import { patchFancy, patchUnFancy } from '@/redux/slices/fancySlice';
import { Fancy } from '@/redux/enum';

type UserCardsProps = {
  // Add your prop types here
  users: any[];
};

function UserCards({ users }: UserCardsProps) {
  const dispatch = useDispatch();

  // 유저 상세 조회 클릭시 동작
  const clickUserDetail = (userId: string) => {
    dispatch(setProfileModalVisible(true));
    dispatch<any>(getProfileDetail(userId));
  };

  const formatName = (name: string) => {
    return name.substring(0, 4);
  };

  return (
    <UserCardGrid
      items={
        <>
          {users.length > 0 ? (
            users.map((user: any, index: Key) => (
              <div key={index}>
                <div className="shadow-xl rounded-xl border-4 border-gray-100 w-[200px]">
                  <div className="relative w-48 h-48 rounded-t-xl">
                    {/* 넘길 유저의 아이디가 필요해서 해당 컴포넌트에서 구현해야함 */}
                    <div onClick={() => clickUserDetail(user.id)}>
                      <UserCardPhoto src={user.picture} alt={user.firstname} />
                    </div>
                  </div>
                  <div className="w-48 h-8 bg-white rounded-b-lg border-t-1 pl-2">
                    <div className="flex items-end gap-1">
                      <p className="w-12 font-semibold text-xl text-gray-700">{formatName(user.firstname)}</p>
                      <p className="mr-1 pl-1 pr-1 border rounded-full text-xl text-gray-500">{user.age}</p>
                      <p className="font-thin text-base text-gray-900">{Math.round(user.distance)}km</p>
                      {/* {fancyButton} */}
                      <FancyButton
                        fancyState={user.fancy}
                        onClick={
                          user.fancy === Fancy.NONE || Fancy.RECV
                            ? () => dispatch<any>(patchFancy(user.id))
                            : () => dispatch<any>(patchUnFancy(user.id))
                        }
                      />
                    </div>
                  </div>
                </div>
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
