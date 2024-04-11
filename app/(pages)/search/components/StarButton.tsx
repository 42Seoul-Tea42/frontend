'use client';

import { useDispatch } from 'react-redux';
import { setStarCount } from '../../../redux/oldslices/searchParamSlice';
import StarSVG from '../../../svg/StarSVG';

interface StarButtonProps {
  star: number;
  isFilled: boolean;
}

const StarButton: React.FC<StarButtonProps> = ({ star, isFilled }) => {
  const dispatch = useDispatch();

  const handleStarClick = () => {
    dispatch(setStarCount(star));
  };

  return (
    <button onClick={handleStarClick}>
      <StarSVG color={isFilled ? 'yellow' : 'gray'} />
    </button>
  );
};

export default StarButton;
