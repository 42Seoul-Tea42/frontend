'use client';

import { useDispatch } from 'react-redux';
import { setSearchParamsRating } from '../../../redux/slices/searchSlice';
import { StarFullSVG } from '../../../svg';

interface StarButtonProps {
  star: number;
  isFilled: boolean;
}

const StarButton: React.FC<StarButtonProps> = ({ star, isFilled }) => {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(setSearchParamsRating(star))}>
      <StarFullSVG color={isFilled ? 'green' : 'gray'} width="10" height="10" />
    </button>
  );
};

export default StarButton;
