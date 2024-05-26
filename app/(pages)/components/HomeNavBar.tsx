'use client';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { usePathname, useRouter } from 'next/navigation';
import { HamburgerSVG, HistorySVG, HomeFillSVG, SearchSVG, StarFullSVG, UserSVG } from '../../svg';
import HomeNavBarButton from '../../UI/HomeNavBarButton';
import NavigationNoti from './NavigationNoti';
import requestUserLocation from '../../api/location';

const HomeNavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  // dev test용 주석
  // 로그인 체크
  // useEffect(() => {
  //   dispatch<any>(getLogin());
  // }, []);

  // 로그인 유저 체크 훅
  const isLogin = useSelector((state: RootState) => state.loginSlice.steps.isLogin);
  // useLoginSteps({ trigger: isLogin });

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (!isLogin) {
      return;
    }
    requestUserLocation();
  }, []);

  const NavigationItems = [
    { name: 'Fancy', icon: <StarFullSVG color="gray-700" /> },
    { name: 'History', icon: <HistorySVG /> },
    { name: 'Home', icon: <HomeFillSVG /> },
    { name: 'Search', icon: <SearchSVG /> },
    { name: 'Setting', icon: <UserSVG /> }
  ];

  const pushPathPage = (itemName: string) => {
    const path = itemName.toLowerCase();
    router.push(path);
    setIsMenuOpen(false);
  };

  // 현재 경로와 아이템 이름이 일치하는지 확인하는 함수
  const pathname = usePathname();
  const isActive = (itemName: string) => {
    return pathname === `/${itemName.toLowerCase()}`;
  };

  // 현재 아이템에 따라 아이콘 색상을 설정하는 함수
  const getIconColor = (itemName: string) => {
    return isActive(itemName) ? 'text-green-400' : 'currentColor';
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-gray-200">
      <div className="max-w-screen flex flex-wrap items-center justify-start md:justify-center mx-auto p-4 shadow">
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="inline-flex items-center w-8 h-8 justify-center border text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <span className="sr-only">Open main menu</span>
          <HamburgerSVG />
        </button>
        <div className={`w-full md:block md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-default">
          <ul className="flex flex-col p-4 gap-5 md:p-0 mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white text-xl">
            {NavigationItems.map((item, idx) => (
              <li key={idx} className="relative">
                <HomeNavBarButton
                  buttonName={item.name}
                  icon={item.icon}
                  iconStyle={getIconColor(item.name)}
                  handleClick={() => pushPathPage(item.name)}
                />
                {/* 알림 */}
                <NavigationNoti name={item.name} />
                {/* 밑줄 */}
                <div className={isActive(item.name) ? '' : 'hidden'}>
                  <span className="animate bg-green-200 absolute w-24 h-2 border-2 border-white  rounded-full"></span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HomeNavBar;
