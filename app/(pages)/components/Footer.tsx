'use client';

import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { getLogout } from '../../redux/slices/loginSlice';

const Footer = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  //test
  // useLoginRedirect({ trigger: isLogin });

  return (
    <footer>
      <ul className="flex flex-col border-t sm:flex-row items-center justify-center px-5 py-5 text-md font-medium text-gray-500sm:mt-0">
        <li className="mx-5 mb-5 sm:mb-0">
          <button onClick={() => {}} className="hover:underline">
            후원하기
          </button>
        </li>
        <li className="mx-5 mb-5 sm:mb-0">
          <button onClick={() => {}} className="hover:underline">
            약관
          </button>
        </li>
        <li className="mx-5 mb-5 sm:mb-0">
          <button onClick={() => {}} className="hover:underline">
            개인정보 이용방침
          </button>
        </li>
        <li className="mx-5 mb-5 sm:mb-0">
          <button onClick={() => {}} className="hover:underline">
            고객센터
          </button>
        </li>
        <li className="mx-5 sm:mb-0">
          <button
            onClick={() => {
              dispatch<any>(getLogout());
            }}
            className="hover:underline"
          >
            로그아웃
          </button>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
