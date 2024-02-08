import React, { useState } from 'react';
import StarButton from './StarButton';
import { RootState } from '../../../store';
import { useSelector } from 'react-redux';

const StarRatingBar: React.FC = () => {
  const starValue: number = useSelector((state: RootState) => state.searchValue.fame);

  return (
    <div>
      {[1, 2, 3, 4, 5].map(el => (
        <StarButton key={el} star={el} isFilled={el <= starValue} />
      ))}
      {starValue}점
    </div>
  );
};

export default StarRatingBar;
