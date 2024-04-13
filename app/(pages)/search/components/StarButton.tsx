'use client';

import { useDispatch } from 'react-redux';
import StarSVG from '../../../svg/StarSVG';
import { setSearchParamsFame } from '../../../redux/slices/searchSlice';

interface StarButtonProps {
  star: number;
  isFilled: boolean;
}

const StarButton: React.FC<StarButtonProps> = ({ star, isFilled }) => {
  const dispatch = useDispatch();

  const handleStarClick = () => {
    dispatch(setSearchParamsFame(star));
  };

  return (
    <button onClick={handleStarClick}>
      <StarSVG color={isFilled ? 'yellow' : 'gray'} />
    </button>
  );
};

export default StarButton;
