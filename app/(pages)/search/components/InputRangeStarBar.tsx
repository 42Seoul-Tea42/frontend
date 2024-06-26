import React from 'react';
import StarButton from './StarButton';

interface InputStarRatingBarProps {
  readOnly: boolean;
  star: number;
}

function InputStarRatingBar({ readOnly, star }: InputStarRatingBarProps) {
  return (
    <div className="flex justify-start gap-2">
      {[1, 2, 3, 4, 5].map(el => (
        <StarButton key={el} star={el} isFilled={el <= star} readOnly={readOnly} />
      ))}
    </div>
  );
}

export default InputStarRatingBar;
