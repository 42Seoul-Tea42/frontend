'use client';

import { useDispatch } from 'react-redux';
import { toggleEmailView } from '../../../store/slices/loginViewSlice';

const toggleEmailFormButton: React.FC = () => {
  const dispatch = useDispatch();
  const useToggleEmailView = () => dispatch(toggleEmailView());
  return (
    <button
      onClick={useToggleEmailView}
      className="absolute left-15 top-15 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
    >
      <svg
        className="w-5 h-5 text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 8 14"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
        />
      </svg>
    </button>
  );
};

export default toggleEmailFormButton;
