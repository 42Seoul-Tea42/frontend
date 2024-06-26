import InterestsButton from './InterestsButton';

export const capitalizeFirstLetter = (str: string) => {
  if (str[0] === 'I') {
    return 'IT / Science';
  }
  return str.charAt(0) + str.slice(1).toLowerCase();
};

interface InterestsSelectorProps {
  readOnly: boolean;
  onClick?: (value: number) => void;
  interests: number[];
}

const InterestsSelector: React.FC<InterestsSelectorProps> = ({ readOnly, onClick, interests }) => {
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
    <div className="max-w-96">
      {items.map((item, index) => (
        <InterestsButton
          readOnly={readOnly}
          interests={interests}
          value={item.value}
          onClick={onClick && (() => onClick(item.value))}
          key={index}
          text={item.text}
        />
      ))}
    </div>
  );
};

export default InterestsSelector;
