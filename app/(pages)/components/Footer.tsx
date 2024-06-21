'use client';

import { getLogout } from '@/redux/slices/loginSlice';
import { useDispatch } from 'react-redux';

const Footer = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch<any>(getLogout());
  };

  return (
    <footer className="fixed bottom-0 w-full border-t bg-white">
      <ul className="flex sm:flex-row grid-cols-2 flex-col items-center justify-center px-5 py-5 text-md font-medium text-gray-500 sm:mt-0">
        <li className="mx-5 sm:mb-0">
          <button onClick={handleLogout} className="hover:underline">
            로그아웃
          </button>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
