import React, { useState } from 'react';

const StarRatingBar: React.FC = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (starValue: number) => {
    setRating(starValue);
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map(starValue => (
        <StarButton key={starValue} starValue={starValue} isFilled={starValue <= rating} onClick={handleStarClick} />
      ))}
    </div>
  );
};

interface StarButtonProps {
  starValue: number;
  isFilled: boolean;
  onClick: (starValue: number) => void;
}

const StarButton: React.FC<StarButtonProps> = ({ starValue, isFilled, onClick }) => {
  return (
    <button onClick={() => onClick(starValue)} style={{ color: isFilled ? 'yellow' : 'gray', border: 'none', cursor: 'pointer' }}>
      ★
    </button>
  );
};

export default StarRatingBar;
