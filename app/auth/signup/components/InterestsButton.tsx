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
      className="relative inline-flex border border-gray-700 m-1 items-center justify-center rounded-lg group"
      onClick={onClick}
      style={{
        border: interests?.includes(value) ? '2px solid transparent' : '',
        borderImage: interests?.includes(value) ? 'linear-gradient(45deg, #FFD700, #FF8C00) 1' : ''
      }}
    >
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        {text}
      </span>
    </button>
  );
};

export default InterestsButton;
