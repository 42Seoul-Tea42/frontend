import React from 'react';
import StarButton from './StarButton';
import { RootState } from '../../../redux/store';
import { useSelector } from 'react-redux';

const StarRatingBar: React.FC = () => {
  const starValue: number = useSelector((state: RootState) => state.searchSlice.searchParams.fame);

  return (
    <div className="flex justify-center">
      {[1, 2, 3, 4, 5].map(el => (
        <StarButton key={el} star={el} isFilled={el <= starValue} />
      ))}
    </div>
  );
};

export default StarRatingBar;
