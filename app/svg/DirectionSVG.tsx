import React from 'react';

interface DirectionSVGProps {
  direction: 'top' | 'down' | 'left' | 'right';
}

const DirectionSVG: React.FC<DirectionSVGProps> = ({ direction }) => {
  let rotate = '';

  switch (direction) {
    case 'top':
      rotate = 'M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7';
      break;
    case 'down':
      rotate = 'm1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1';
      break;
    case 'left':
      rotate = 'M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13';
      break;
    case 'right':
      rotate = 'm1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1';
      break;
    default:
      break;
  }

  return (
    <svg
      className="w-5 h-5 text-gray dark:text-gray-800 rtl:rotate-180"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 10"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d={rotate}
      />
    </svg>
  );
};

export default DirectionSVG;
