import React from 'react';

interface InterestsButtonProps {
  readOnly: false | true;
  value: number;
  text: string;
  onClick?: () => void;
  interests: number[];
}

const InterestsButton: React.FC<InterestsButtonProps> = ({ readOnly, text, onClick, value, interests }) => {
  const otherHidden = () => {
    if (readOnly === true) {
      return 'hidden';
    }
    return '';
  };

  return (
    <button
      type="button"
      className={`relative inline-flex justify-center items-center m-1 rounded-lg border ${
        interests?.includes(value) ? 'text-green-400' : otherHidden()
      }`}
      onClick={onClick}
    >
      <span className="relative px-5 py-2.5 bg-white rounded-md group-hover:bg-opacity-0">{text}</span>
      <span
        className={`${
          interests?.includes(value)
            ? 'bg-green-500 absolute top-0 w-4 h-2 border-2 border-white  rounded-full'
            : 'hidden'
        }`}
      ></span>
    </button>
  );
};

export default InterestsButton;
