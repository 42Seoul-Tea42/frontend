'use client';
import { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import InputRangeStarBar from './components/InputRangeStarBar';
import InputMinMaxAge from './components/InputMinMaxAge';
import InputRangeDistance from './components/InputRangeDistance';
import SearchResultTable from './components/SearchResultTable';
import TagSelector from '../../auth/signup/components/TagSelector';
import { DirectionSVG, SearchSVG } from '../../svg';
import { Drawer } from 'flowbite';
import DrawerOpenButton from './components/SearchButton';

const Search: React.FC = () => {
  const searchParams = useSelector((state: RootState) => state.searchSlice.searchParams);

  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isBounce, setIsBounce] = useState<boolean>(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
      setIsDrawerOpen(false);
    }
  };

  const handleScroll = () => {
    document.body.style.overflow = isDrawerOpen ? 'hidden' : 'auto';
  };

  useEffect(() => {
    if (isDrawerOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('scroll', handleScroll);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'auto';
    };
  }, [isDrawerOpen]);

  const handleSearchButton = () => {
    toggleDrawer();
  };

  const drawerItems = [
    { title: '검색할 나이를 선택해주세요.', content: <InputMinMaxAge /> },
    { title: '검색할 태그를 선택해주세요.', content: <TagSelector /> },
    { title: '검색할 거리를 선택해주세요.', content: <InputRangeDistance /> },
    { title: '검색할 등급을 선택해주세요.', content: <InputRangeStarBar /> }
  ];

  useEffect(() => {
    setTimeout(() => {
      setIsBounce(true);
    }, 3000);
    setIsBounce(false);
  }, []);

  return (
    <div className="flex h-screen">
      <div className="w-full">
        <DrawerOpenButton onClick={() => setIsDrawerOpen(true)} />
        {isDrawerOpen && (
          <>
            <div className="fixed z-50 top-0 left-0 w-full h-full bg-black opacity-50" />
            <div
              ref={drawerRef}
              className="fixed z-50 bg-gray-100 border-t border-gray-200 dark:border-gray-700 dark:bg-gray-800 transition-transform top-0 left-0 right-0 transform translate-y-0"
            >
              <div className="mx-auto p-4 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-medium text-gray-800 dark:text-gray-200">검색 옵션</h2>
              </div>
              <div className="md:min-w-72 md:grid md:grid-cols-2">
                {drawerItems.map((item, index) => (
                  <div key={index} className="p-4 border border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg mb-5 font-medium text-gray-800 dark:text-gray-200">{item.title}</h3>
                    {item.content}
                  </div>
                ))}
              </div>
              <div className="flex justify-end m-5">
                <button
                  type="button"
                  className="flex items-center text-white bg-gray-700 hover:bg-gray-800 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 gap-2"
                  onClick={handleSearchButton}
                >
                  <SearchSVG />
                  검색하기
                </button>
              </div>
            </div>
          </>
        )}
        <SearchResultTable />
      </div>
    </div>
  );
};

export default Search;
