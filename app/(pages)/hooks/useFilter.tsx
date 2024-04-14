import { useEffect, useState } from 'react';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import _ from 'lodash';

/**
 * @type custom hook
 * @description search params의 파라미터에 의해 필터링된 유저, filter를 호출로 켜는 함수
 * @param users: ProfileInquirySet[]
 * @returns [fileteredUsers: ProfileInquirySet[], onFilter: () => void] as const
 */
const useFilter = (users: any[]): any[] => {
  const [fileteredUsers, setFilteredUsers] = useState<any[]>([]);
  const params = useSelector((state: RootState) => state.searchSlice.searchParams);

  const onFilter = () => {
    if (!users) return;

    const filetered = [...users].filter(user => {
      // 나이 범위가 필터에 포함되어야함
      const isAgeMatch = user.ageGender.age >= params.minAge && user.ageGender.age <= params.maxAge;
      // 유저가 필터보다 가까워야함
      const isDistanceMatch = user.another.distance <= params.distance;
      // 유저의 등급이 필터보다 높아야함
      const isRatingMatch = user.profile.rating >= params.rating;
      // 유저의 관심사가 필터에 포함되어야함
      const isInterestMatch =
        user.profile.interests.length === 0 ||
        _.some(user.profile.interests, interest => _.includes(params.interests, interest));

      return isAgeMatch && isDistanceMatch && isRatingMatch && isInterestMatch;
    });

    console.log(filetered);
    setFilteredUsers(filetered);
  };

  return [fileteredUsers, onFilter] as const;
};

export default useFilter;
