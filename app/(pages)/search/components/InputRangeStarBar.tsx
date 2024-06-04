import React from 'react';
import StarButton from './StarButton';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const StarRatingBar: React.FC = () => {
  const starValue: number = useSelector((state: RootState) => state.searchSlice.searchParams.rating);

  return (
    <div className="flex justify-start gap-2">
      {[1, 2, 3, 4, 5].map(el => (
        <StarButton key={el} star={el} isFilled={el <= starValue} />
      ))}
    </div>
  );
};

export default StarRatingBar;
