import InterestsButton from './InterestsButton';
import { useDispatch, useSelector } from 'react-redux';
import { setAccountInterests } from '@/redux/slices/accountSlice';
import { setSearchParamsInterests } from '@/redux/slices/searchSlice';
import { RootState } from '@/redux/store';

export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0) + str.slice(1).toLowerCase();
};

interface InterestsSelectorProps {
  who: 'me' | 'other';
}

const InterestsSelector: React.FC<InterestsSelectorProps> = ({ who }) => {
  const dispatch = useDispatch();

  const userInterests = {
    SPORTS: 1,
    TRAVEL: 2,
    FOOD: 3,
    GAME: 4,
    BOOK: 5,
    IT_SCIENCE: 6,
    VIDEO: 7,
    LANGUAGE: 8,
    FASHION: 9,
    PETS: 10,
    ART: 11,
    SMOKE: 12,
    DRINK: 13
  };

  const items = Object.entries(userInterests).map(([key, value]) => ({
    text: capitalizeFirstLetter(key.replace('_', ' / ')),
    value: value as number // 해당 관심사의 넘버 값을 가져옵니다.
  }));

  const selectUserInterests = (who: 'me' | 'other') => {
    if (who === 'me') {
      return useSelector((state: RootState) => state.accountSlice.user.interests);
    }
    if (who === 'other') {
      return useSelector((state: RootState) => state.profileInquirySlice.user.interests);
    }
  };

  // const interests = useSelector((state: RootState) => state.accountSlice.user.interests);
  return (
    <div className="max-w-96">
      {items.map((item, index) => (
        <InterestsButton
          who={who}
          interests={selectUserInterests(who)}
          value={item.value}
          onClick={() => {
            if (who === 'me') {
              dispatch(setAccountInterests(item.value));
              dispatch(setSearchParamsInterests(item.value));
            }
          }}
          key={index}
          text={item.text}
        />
      ))}
    </div>
  );
};

export default InterestsSelector;
