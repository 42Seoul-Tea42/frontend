'use client';

import { setSearchParamsRating } from '@/redux/slices/searchSlice';
import { StarFullSVG } from '@/svg';
import { useDispatch } from 'react-redux';

interface StarButtonProps {
  star: number;
  isFilled: boolean;
  readOnly: boolean;
}

const StarButton: React.FC<StarButtonProps> = ({ star, isFilled, readOnly }) => {
  const dispatch = useDispatch();

  const isReadOnly = () => {
    if (readOnly === false) {
      dispatch(setSearchParamsRating(star));
    } else if (readOnly === true) {
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
