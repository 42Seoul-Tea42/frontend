'use client';

import { useDispatch } from 'react-redux';
import StarSVG from '../../../svg/StarSVG';
import { setSearchParamsRating } from '../../../redux/slices/searchSlice';

interface StarButtonProps {
  star: number;
  isFilled: boolean;
}

const StarButton: React.FC<StarButtonProps> = ({ star, isFilled }) => {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(setSearchParamsRating(star))}>
      <StarSVG color={isFilled ? 'yellow' : 'gray'} />
    </button>
  );
};

export default StarButton;
