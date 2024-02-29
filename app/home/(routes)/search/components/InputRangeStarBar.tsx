import React from 'react';
import StarButton from './StarButton';
import { RootState } from '../../../../store';
import { useSelector } from 'react-redux';

const StarRatingBar: React.FC = () => {
  const starValue: number = useSelector((state: RootState) => state.searchValue.fame);

  return (
    <div className="flex justify-center min-w-72">
      {[1, 2, 3, 4, 5].map(el => (
        <StarButton key={el} star={el} isFilled={el <= starValue} />
      ))}
    </div>
  );
};

export default StarRatingBar;
