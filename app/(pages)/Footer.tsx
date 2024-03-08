'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Footer = () => {
  const router = useRouter();

  return (
    <footer>
      <ul className="flex flex-col border-t sm:flex-row items-center justify-center px-5 py-5 text-md font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
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
          <Link href="/home/setting" className="hover:underline">
            설정
          </Link>
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
