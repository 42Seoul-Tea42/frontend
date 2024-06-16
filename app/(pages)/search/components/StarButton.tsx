'use client';

import { setSearchParamsRating } from '@/redux/slices/searchSlice';
import { StarFullSVG } from '@/svg';
import { useDispatch } from 'react-redux';

interface StarButtonProps {
  star: number;
  isFilled: boolean;
  who: 'me' | 'other';
}

const StarButton: React.FC<StarButtonProps> = ({ star, isFilled, who }) => {
  const dispatch = useDispatch();

  const isReadOnly = () => {
    if (who === 'me') {
      dispatch(setSearchParamsRating(star));
    } else if (who === 'other') {
      // do nothing
    }
  };

  return (
    <button onClick={isReadOnly}>
      <StarFullSVG color={isFilled ? 'green' : 'gray'} width="10" height="10" />
    </button>
  );
};

export default StarButton;
