import React from 'react';

interface DirectionSVGProps {
  direction: 'top' | 'down' | 'left' | 'right';
  size: string;
}

const DirectionSVG: React.FC<DirectionSVGProps> = ({ direction, size }) => {
  let rotate = '';
  let viewBox = '';

  switch (direction) {
    case 'top':
      rotate = 'M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7';
      viewBox = '0 0 14 10';
      break;
    case 'down':
      rotate = 'm1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1';
      viewBox = '0 0 14 10';
      break;
    case 'left':
      rotate = 'M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13';
      viewBox = '0 0 10 15';
      break;
    case 'right':
      rotate = 'm1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1';
      viewBox = '0 0 10 15';
      break;
    default:
      break;
  }

  return (
    <svg
      className={`w-${size} h-${size} text-gray dark:text-gray-800 rtl:rotate-180`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox={viewBox}
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
