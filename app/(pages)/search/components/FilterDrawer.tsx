import { useEffect, useRef, useState } from 'react';
import DrawerOpenButton from './DrawerOpenButton';
import DrawerItem from './DrawerItem';
import DrawerSubmitButton from './DrawerSubmitButton';
import InputRangeStarBar from './InputRangeStarBar';
import InputRangeDistance from './InputRangeDistance';
import TagSelector from '../../../auth/signup/components/TagSelector';
import InputMinMaxAge from './InputMinMaxAge';

type FilterDrawerProps = {
  onClick: () => void;
};

const FilterDrawer: React.FC<FilterDrawerProps> = ({ onClick }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  // 드로어 밖을 클릭하면 드로어를 닫기.
  const drawerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        setIsDrawerOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // 드로어 폼 제출시 동작정의
  const submitDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div>
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
              <DrawerItem
                items={[
                  { title: '검색할 나이를 선택해주세요.', content: <InputMinMaxAge /> },
                  { title: '검색할 태그를 선택해주세요.', content: <TagSelector /> },
                  { title: '검색할 거리를 선택해주세요.', content: <InputRangeDistance /> },
                  { title: '검색할 등급을 선택해주세요.', content: <InputRangeStarBar /> }
                ]}
              />
            </div>
            <div className="flex justify-end m-5">
              <DrawerSubmitButton onClick={submitDrawer} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FilterDrawer;
