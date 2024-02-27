import React from 'react';
import { useDispatch } from 'react-redux';
import { addSelectedTags, removeSelectedTags } from '../../../store/slices/signupSlice';

interface TagButtonProps {
  text: string;
  gradientFrom: string;
  gradientTo: string;
  dtoValue: number;
}

const TagButton: React.FC<TagButtonProps> = ({ text, gradientFrom, gradientTo, dtoValue }) => {
  const [isClicked, setIsClicked] = React.useState(false);
  const dispatch = useDispatch();

  const toggleTag = () => {
    if (isClicked) dispatch(removeSelectedTags(dtoValue));
    else dispatch(addSelectedTags(dtoValue));
    setIsClicked(!isClicked);
  };

  const tagStyle = {
    backgroundImage: isClicked
      ? `linear-gradient(to bottom right, ${gradientFrom}, ${gradientTo})`
      : 'none'
  };

  return (
    <button
      type="button"
      className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium bg-gray-300 text-gray-900 rounded-lg group 
                   hover:text-white dark:text-white focus:ring-4 focus:outline-none"
      style={tagStyle}
      onClick={toggleTag}
    >
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        {text}
      </span>
    </button>
  );
};

export default TagButton;
