import React from 'react';

interface TagButtonProps {
  text: string;
  onClick: () => void;
}

const TagButton: React.FC<TagButtonProps> = ({ text, onClick }) => {
  return (
    <button
      type="button"
      className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium bg-gray-300 text-gray-900 rounded-lg group 
                   hover:text-white dark:text-white focus:ring-4 focus:outline-none"
      onClick={onClick}
    >
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        {text}
      </span>
    </button>
  );
};

export default TagButton;
