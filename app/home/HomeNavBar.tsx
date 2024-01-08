"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

// 홈 레이아웃 컴포넌트
function HomeNavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-start md:justify-center mx-auto p-4">
        <button
          type="button"
          onClick={toggleMenu}
          className="inline-flex items-center  w-8 h-8 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          data-collapse-toggle="navbar-default"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        {/*  작은 화면에서 보이는 메뉴 안쪽 내용 */}
        <div
          className={`w-full md:block md:w-auto ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li className="flex items-center">
              <button
                type="button"
                onClick={() => router.push("/home/chat")}
                className=""
              >
                <h2>Chat</h2>
                {/* 채팅 아이콘 */}
              </button>
            </li>
            <li className="flex items-center">
              <button
                type="button"
                onClick={() => router.push("/home/fancy")}
                className=""
              >
                <h2>Fancy</h2>
                {/* 팬시 아이콘 */}
              </button>
            </li>
            <li className="flex items-center">
              <button
                type="button"
                onClick={() => router.push("/home")}
                className=""
              >
                <h2>Home</h2>
                {/* tea for two 아이콘 */}
              </button>
            </li>
            <li className="flex items-center">
              <button
                type="button"
                onClick={() => router.push("/home/search")}
                className=""
              >
                <h2>Search</h2>
                {/*  검색 아이콘 */}
              </button>
            </li>
            <li className="flex items-center">
              <button
                type="button"
                onClick={() => router.push("/home/history")}
                className=""
              >
                <h2>History</h2>
                {/* 기록 아이콘 */}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default HomeNavBar;
