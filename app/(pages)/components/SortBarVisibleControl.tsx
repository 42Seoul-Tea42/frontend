import { DirectionSVG } from '@/svg';
import { useCloseOnOutsideClick } from '../hooks';

type SortBarVisibleControlProps = {
  props: JSX.Element;
};

function SortBarVisibleControl({ props }: SortBarVisibleControlProps) {
  const [hoverRef, isHoverOn, setIsHoverOn] = useCloseOnOutsideClick({ initialState: false });
  return (
    <div ref={hoverRef} className="flex flex-col h-10 mb-10 ">
      {isHoverOn ? (
        <div className={isHoverOn ? '' : 'hidden'}>{props}</div>
      ) : (
        <div className="flex justify-end">
          <button
            className="flex items-center text-lg h-12 font-thin text-gray-500 border-2 p-1 rounded-xl"
            onMouseEnter={() => setIsHoverOn(true)}
          >
            <DirectionSVG direction="left" size="4" />
            <p className="text-gray-800">정렬</p>
          </button>
        </div>
      )}
    </div>
  );
}

export default SortBarVisibleControl;
