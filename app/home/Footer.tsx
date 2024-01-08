"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link href="#" className="hover:underline me-4 md:me-6">
              후원하기
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline me-4 md:me-6">
              약관
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline me-4 md:me-6">
              개인정보 이용방침
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline">
              고객센터
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
