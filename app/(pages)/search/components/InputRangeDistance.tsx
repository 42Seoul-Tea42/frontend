import { setSearchParamsDistance } from '@/redux/slices/searchSlice';
import { RootState } from '@/redux/store';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const InputRangeDistance: React.FC = () => {
  const distance = useSelector((state: RootState) => state.searchSlice.searchParams.distance);
  const dispatch = useDispatch();

  return (
    <div className="relative mt-4 mb-4">
      <style jsx>{`
        input[type='range']::-webkit-slider-thumb {
          appearance: none;
          width: 20;
          height: 20;
          border-radius: 50%;
          background-color: #31c48d; /* 원하는 색상 */
          cursor: pointer;
        }
        input[type='range']::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: #31c48d; /* 원하는 색상 */
          cursor: pointer;
        }
      `}</style>
      <input
        id="labels-range-input"
        type="range"
        value={distance}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
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
      <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">1km</span>
      <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">100km</span>
    </div>
  );
};

export default InputRangeDistance;
