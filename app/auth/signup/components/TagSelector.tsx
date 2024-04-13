import TagButton from './TagButton';
import { Interests } from '../../../redux/interface/submodules/utilInterface';
import { useDispatch } from 'react-redux';
import { toggleSearchParamsInterests } from '../../../redux/slices/searchSlice';

export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0) + str.slice(1).toLowerCase();
};

const TagSelector: React.FC = () => {
  const dispatch = useDispatch();

  const userInterests: Interests = {
    SPORTS: 1 << 0,
    TRAVEL: 1 << 1,
    FOOD: 1 << 2,
    GAME: 1 << 3,
    BOOK: 1 << 4,
    IT_SCIENCE: 1 << 5,
    VIDEO: 1 << 6,
    LANGUAGE: 1 << 7,
    FASHION: 1 << 8,
    PETS: 1 << 9,
    ART: 1 << 10,
    SMOKE: 1 << 11,
    DRINK: 1 << 12
  };

  const items = Object.entries(userInterests).map(([key, value]) => ({
    text: capitalizeFirstLetter(key.replace('_', ' / ')),
    value: value as number // 해당 관심사의 넘버 값을 가져옵니다.
  }));

  return (
    <>
      {items.map((item, index) => (
        <TagButton onClick={() => dispatch(toggleSearchParamsInterests(item.value))} key={index} text={item.text} />
      ))}
    </>
  );
};

export default TagSelector;
