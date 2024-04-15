import { SortButton } from '../../UI';
import { DirectionSVG } from '../../svg';
import { useCloseOnOutsideClick } from '../hooks';

type SortControlBarProps = {
  items: { text: string; sortBy: string }[];
  setSortBy: (sortBy: string) => void;
  setSortOrder: (sortOrder: 'descending' | 'ascending') => void;
};

const SortControlBar: React.FC<SortControlBarProps> = ({ items, setSortBy, setSortOrder }) => {
  const [hoverRef, isHoverOn, setIsHoverOn] = useCloseOnOutsideClick();
  return (
    <div ref={hoverRef} className="flex flex-col h-10 mb-10 ">
      {isHoverOn ? (
        <div className={isHoverOn ? '' : 'hidden'}>
          <div className="flex justify-between gap-10 border p-2 pl-4 pr-4 rounded-xl shadow-md">
            {items.map((item, index) => (
              <div key={index} className="text-lg flex jutify-center items-center gap-3">
                {item.text}
                <SortButton
                  upClick={() => {
                    setSortBy(item.sortBy);
                    setSortOrder('descending');
                  }}
                  downClick={() => {
                    setSortBy(item.sortBy);
                    setSortOrder('ascending');
                  }}
                />
              </div>
            ))}
          </div>
        </div>
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
};

export default SortControlBar;
