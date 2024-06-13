import InputRangeStarBar from './InputRangeStarBar';
import InputRangeDistance from './InputRangeDistance';
import InputMinMaxAge from './InputMinMaxAge';
import { DrawerItem, DrawerOpenButton, SubmitButton } from '@/ui';
import { useCloseOnOutsideClick } from '@/(pages)/hooks';
import InterestsSelector from '@/auth/signup/components/InterestsSelector';

type FilterControlDrawerProps = {
  onSubmit: () => void;
  shape: JSX.Element;
};

const FilterControlDrawer: React.FC<FilterControlDrawerProps> = ({ onSubmit, shape }) => {
  const [drawerRef, isDrawerOpen, setIsDrawerOpen] = useCloseOnOutsideClick({ initialState: false });

  // 드로어 폼 제출시 동작정의
  const submitDrawer = () => {
    onSubmit();
    setIsDrawerOpen(false);
  };

  return (
    <div>
      <DrawerOpenButton shape={shape} onClick={() => setIsDrawerOpen(true)} />
      {isDrawerOpen && (
        <>
          <div className="fixed z-50 top-0 left-0 w-full h-full bg-black opacity-50" />
          <div
            ref={drawerRef}
            className="fixed z-50 bg-gray-100 border-t border-gray-200 transition-transform top-0 left-0 right-0 transform translate-y-0"
          >
            <div className="mx-auto p-4 border-b border-gray-200 ">
              <h2 className="text-xl font-medium text-gray-800">필터 옵션</h2>
            </div>
            <div className="md:min-w-72 md:grid md:grid-cols-2">
              <DrawerItem
                items={[
                  { title: '필터링할 나이를 선택해주세요.', content: <InputMinMaxAge /> },
                  { title: '필터링할 태그를 선택해주세요.', content: <InterestsSelector /> },
                  { title: '필터링할 거리를 선택해주세요.', content: <InputRangeDistance /> },
                  { title: '필터링할 등급을 선택해주세요.', content: <InputRangeStarBar /> }
                ]}
              />
            </div>
            <div className="flex justify-end m-5">
              <SubmitButton text="검색하기" onClick={submitDrawer} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FilterControlDrawer;
