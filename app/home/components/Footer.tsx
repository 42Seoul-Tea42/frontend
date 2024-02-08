'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import HomeNavBarButton from './HomeNavBarButton';

const Footer = () => {
  const router = useRouter();

  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
      <ul className="flex flex-col sm:flex-row items-center justify-center px-5 py-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li className="mx-5 mb-5 sm:mb-0">
          <Link href="#" className="hover:underline">
            후원하기
          </Link>
        </li>
        <li className="mx-5 mb-5 sm:mb-0">
          <Link href="#" className="hover:underline">
            약관
          </Link>
        </li>
        <li className="mx-5 mb-5 sm:mb-0">
          <Link href="#" className="hover:underline">
            개인정보 이용방침
          </Link>
        </li>
        <li className="mx-5 mb-5 sm:mb-0">
          <Link href="#" className="hover:underline">
            고객센터
          </Link>
        </li>
        <li className="mx-5 mb-5 sm:mb-0">
          <HomeNavBarButton router={router} path={'setting'} buttonName={'설정'} style={'hover:underline'} />
        </li>
        <li className="mx-5 sm:mb-0">
          <Link href="#" className="hover:underline">
            로그아웃
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
