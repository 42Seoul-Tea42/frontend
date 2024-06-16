import React from 'react';
import StarButton from './StarButton';

interface InputStarRatingBarProps {
  who: 'me' | 'other';
  star: number;
}

function InputStarRatingBar({ who, star }: InputStarRatingBarProps) {
  return (
    <div className="flex justify-start gap-2">
      {[1, 2, 3, 4, 5].map(el => (
        <StarButton key={el} star={el} isFilled={el <= star} who={who} />
      ))}
    </div>
  );
}

export default InputStarRatingBar;
