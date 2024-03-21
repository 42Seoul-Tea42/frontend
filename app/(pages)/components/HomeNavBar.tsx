'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import HomeNavBarButton from './HomeNavBarButton';
import {
  HamburgerSVG,
  HistorySVG,
  HomeFillSVG,
  SearchSVG,
  StarFullSVG,
  UserSVG
} from '../../svg/HomeNavBarSVG';

export const NavigationItems = [
  { name: 'Fancy', icon: <StarFullSVG /> },
  { name: 'Search', icon: <SearchSVG /> },
  { name: 'Home', icon: <HomeFillSVG /> },
  { name: 'History', icon: <HistorySVG /> },
  { name: 'Setting', icon: <UserSVG /> }
];

const HomeNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const pushPathPage = (path: string) => {
    router.push(path);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen flex flex-wrap items-center justify-start md:justify-center mx-auto p-4 shadow">
        <button
          type="button"
          onClick={toggleMenu}
          className="inline-flex items-center w-8 h-8 justify-center border text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          data-collapse-toggle="navbar-default"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <HamburgerSVG />
        </button>
        <div
          className={`w-full md:block md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}
          id="navbar-default"
        >
          <ul className="font-midium text-xl flex flex-col p-4 gap-5 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {NavigationItems.map((item, idx) => (
              <li key={idx}>
                <HomeNavBarButton
                  buttonName={item.name}
                  icon={item.icon}
                  handleClick={() => pushPathPage(item.name.toLowerCase())}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HomeNavBar;
