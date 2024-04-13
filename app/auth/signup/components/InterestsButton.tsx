import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

interface InterestsButtonProps {
  value: number;
  text: string;
  onClick: () => void;
}

const InterestsButton: React.FC<InterestsButtonProps> = ({ text, onClick, value }) => {
  const interests = useSelector((state: RootState) => state.accountSlice.user.profile.interests);
  return (
    <button
      type="button"
      className={`${
        interests.includes(value) && 'border-2 border-blue-500'
      } relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium bg-gray-300 text-gray-900 rounded-lg group 
                   hover:text-white dark:text-white focus:ring-4 focus:outline-none`}
      onClick={onClick}
    >
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        {text}
      </span>
    </button>
  );
};

export default InterestsButton;
