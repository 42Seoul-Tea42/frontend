'use client';

import { useDispatch } from 'react-redux';
import { setStarCount } from '../../../store/slices/searchValueDataSlice';
import IconStar from './IconStar';

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
      <IconStar color={isFilled ? 'yellow' : 'gray'} />
    </button>
  );
};

export default StarButton;
