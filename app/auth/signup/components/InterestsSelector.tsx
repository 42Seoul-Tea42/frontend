import InterestsButton from './InterestsButton';
import { useDispatch } from 'react-redux';
import { setAccountInterests } from '@/redux/slices/accountSlice';
import { setSearchParamsInterests } from '@/redux/slices/searchSlice';

export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0) + str.slice(1).toLowerCase();
};

const InterestsSelector: React.FC = () => {
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

  return (
    <>
      {items.map((item, index) => (
        <InterestsButton
          value={item.value}
          onClick={() => {
            dispatch(setAccountInterests(item.value));
            dispatch(setSearchParamsInterests(item.value));
          }}
          key={index}
          text={item.text}
        />
      ))}
    </>
  );
};

export default InterestsSelector;
