'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import HomeNavBarButton from '../../UI/HomeNavBarButton';
import getGeoLocation from '../../utils/location';
import { useDispatch, useSelector } from 'react-redux';
import { setFancyNoti, setHistoryNoti } from '../../redux/oldslices/socketEventSlice';
import { RootState } from '../../redux/store';
import { HamburgerSVG, HistorySVG, HomeFillSVG, SearchSVG, StarFullSVG, UserSVG } from '../../svg';
import useLoginSteps from '../hooks/useLoginSteps';
import { getLogin } from '../../redux/slices/loginSlice';

const HomeNavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isPageMoved, setIsPageMoved] = useState<boolean>(false);
  const [fancyIconStyle, setFancyIconStyle] = useState<string>('');
  const [historyIconStyle, setHistoryIconStyle] = useState<string>('');
  const fancyNoti = useSelector((state: RootState) => state.socketEvent.fancyNoti);
  const historyNoti = useSelector((state: RootState) => state.socketEvent.historyNoti);

  // dev test용 주석
  // 로그인 체크
  // useEffect(() => {
  //   dispatch<any>(getLogin());
  // }, []);

  // 로그인 유저 체크 훅
  // const isLogin = useSelector((state: RootState) => state.loginSlice.steps.isLogin);
  // useLoginSteps({ trigger: isLogin });

  const dispatch = useDispatch();
  const router = useRouter();

  const NavigationItems = [
    { name: 'Home', icon: <HomeFillSVG /> },
    { name: 'Search', icon: <SearchSVG /> },
    { name: 'Setting', icon: <UserSVG /> }
  ];

  const pushPathPage = (itemName: string) => {
    const path = itemName.toLowerCase();
    router.push(path);
    setIsMenuOpen(false);
    setIsPageMoved(!isPageMoved);
    if (itemName === 'Fancy') {
      dispatch(setFancyNoti(false));
    }
    if (itemName === 'History') {
      dispatch(setHistoryNoti(false));
    }
  };

  const getUserLocation = async () => {
    try {
      const { latitude, longitude } = await getGeoLocation();
      localStorage.setItem('user-location', JSON.stringify({ latitude, longitude }));
    } catch (error) {
      console.table(error);
    }
  };

  useEffect(() => {
    getUserLocation();
  }, [isPageMoved]);

  useEffect(() => {
    if (fancyNoti) {
      setFancyIconStyle('animate-pulse text-yellow-400');
    } else {
      setFancyIconStyle('');
    }
  }, [fancyNoti]);

  useEffect(() => {
    if (historyNoti) {
      setHistoryIconStyle('animate-pulse text-green-400');
    } else {
      setHistoryIconStyle('');
    }
  }, [historyNoti]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen flex flex-wrap items-center justify-start md:justify-center mx-auto p-4 shadow">
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="inline-flex items-center w-8 h-8 justify-center border text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          data-collapse-toggle="navbar-default"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <HamburgerSVG />
        </button>
        <div className={`w-full md:block md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-default">
          <ul className="flex flex-col p-4 gap-5 md:p-0 mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 text-xl">
            <li>
              <HomeNavBarButton
                buttonName="Fancy"
                icon={<StarFullSVG />}
                iconStyle={fancyIconStyle}
                handleClick={() => pushPathPage('Fancy')}
              />
            </li>
            <li>
              <HomeNavBarButton
                buttonName="History"
                icon={<HistorySVG />}
                iconStyle={historyIconStyle}
                handleClick={() => pushPathPage('History')}
              />
            </li>
            {NavigationItems.map((item, idx) => (
              <li key={idx} className="">
                <HomeNavBarButton buttonName={item.name} icon={item.icon} handleClick={() => pushPathPage(item.name)} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HomeNavBar;
