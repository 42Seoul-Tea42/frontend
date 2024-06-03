import { Key } from 'react';
import UserCardPhoto from './UserCardPhoto';
import { CardsSkeleton, FancyButton, UserCardGrid } from '../../UI';
import { getProfileDetail, setProfileModalVisible } from '../../redux/slices/profileInquirySlice';
import { useDispatch } from 'react-redux';
import { patchFancy } from '../../redux/slices/fancySlice';

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
                    <div onClick={() => clickUserDetail(user.identity.id)}>
                      <UserCardPhoto src={user.photo.mainPhoto} alt={user.identity.firstname} />
                    </div>
                  </div>
                  <div className="w-48 h-12 bg-white rounded-b-lg border-t-2 p-1 pl-2">
                    <div className="flex items-end gap-2">
                      <p className="font-semibold text-2xl text-gray-700">{user.identity.firstname}</p>
                      <p className="mr-2 font-md text-xl text-gray-500">{user.ageGender.age}</p>
                      <p className="font-thin text-base text-gray-900">{user.another.distance}km</p>
                      {/* {fancyButton} */}
                      <FancyButton
                        fancyState={user.another.fancy}
                        onClick={() => dispatch<any>(patchFancy(user.identity.id))}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <CardsSkeleton style="bg-red-300 opacity-50" />
          )}
        </>
      }
    />
  );
}

export default UserCards;
