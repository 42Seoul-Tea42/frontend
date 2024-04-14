import { useEffect, useState } from 'react';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import _ from 'lodash';

/**
 * @type custom hook
 * @description search params의 파라미터에 의해 필터링된 유저, on off 함수를 반환하는 훅
 * @returns [fileteredUsers, setTrigger] as const
 */
const useFilter = (users: any[]): any[] => {
  const [fileteredUsers, setFilteredUsers] = useState<any[]>([]);
  const [trigger, setTrigger] = useState<boolean>(true);
  const params = useSelector((state: RootState) => state.searchSlice.searchParams);

  useEffect(() => {
    if (!users) return;

    // 트리거로 필터링을 on off하도록 함
    if (!trigger) {
      setFilteredUsers(users);
      return;
    }

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

    setFilteredUsers(filetered);
  }, [trigger]);

  return [fileteredUsers, setTrigger] as const;
};

export default useFilter;
