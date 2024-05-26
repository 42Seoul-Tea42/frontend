import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { setSearchParamsDistance } from '../../../redux/slices/searchSlice';

const InputRangeDistance: React.FC = () => {
  const distance = useSelector((state: RootState) => state.searchSlice.searchParams.distance);
  const dispatch = useDispatch();

  return (
    <div className="relative mt-4 mb-4">
      <input
        id="labels-range-input"
        type="range"
        value={distance}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        onChange={e => dispatch(setSearchParamsDistance(parseInt(e.target.value)))}
        min="1"
        max="100"
        step={1}
      />
      <div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-6 text-gray-500"
        style={{ left: `${(distance / 100) * 100}%` }}
      >
        {distance}km
      </div>
      <span className="text-sm text-gray-500 absolute start-0 -bottom-6">1km</span>
      <span className="text-sm text-gray-500 absolute end-0 -bottom-6">100km</span>
    </div>
  );
};

export default InputRangeDistance;
