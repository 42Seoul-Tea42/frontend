import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { setSearchParamsMaxAge, setSearchParamsMinAge } from '../../../redux/slices/searchSlice';

const InputMinMaxAge = () => {
  const min = 1;
  const max = 100;
  const minRef = useRef<HTMLInputElement>(null); // Update the type of minRef
  const maxRef = useRef<HTMLInputElement>(null); // Update the type of maxRef
  const [minThumb, setMinThumb] = useState(0);
  const [maxThumb, setMaxThumb] = useState(0);
  const minValue = useSelector((state: RootState) => state.searchSlice.searchParams.minAge);
  const maxValue = useSelector((state: RootState) => state.searchSlice.searchParams.maxAge);

  const dispatch = useDispatch();

  const handleMinChange = () => {
    if (!minRef.current) return;
    const value = parseInt(minRef.current.value);
    const validValue = Math.min(Math.max(value, min), maxValue - 1);
    setMinThumb(((validValue - min) / (max - min)) * 100);
    dispatch(setSearchParamsMinAge(validValue));
  };

  const handleMaxChange = () => {
    if (!maxRef.current) return;
    const value = parseInt(maxRef.current.value); // Update the type of value
    const validValue = Math.max(Math.min(value, max), minValue + 1);
    setMaxThumb(((max - validValue) / (max - min)) * 100);
    dispatch(setSearchParamsMaxAge(validValue));
  };

  return (
    <div className="h-12 flex justify-center items-center">
      <div className="relative max-w-sm w-full">
        <div>
          <input
            type="range"
            ref={maxRef}
            step="1"
            onChange={handleMaxChange}
            value={maxValue}
            className="absolute pointer-events-visiblePainted appearance-none z-20 h-2 top-4 w-full opacity-0 cursor-pointer"
          />
          <input
            type="range"
            ref={minRef}
            step="1"
            onInput={() => handleMinChange()}
            value={minValue}
            className="absolute pointer-events-visiblePainted appearance-none z-20 h-2 w-full opacity-0 cursor-pointer"
          />
          <div className="relative z-10 h-2.5">
            <div className="absolute z-10 left-0 right-0 bottom-0 top-0 rounded-md bg-gray-200"></div>

            <div
              className="absolute z-20 top-0 bottom-0 rounded-md bg-blue-600"
              style={{ right: `${maxThumb}%`, left: `${minThumb}%` }}
            ></div>

            <div
              className="absolute z-30 w-5 h-5 top-0 left-0 bg-blue-600 rounded-full -mt-1 -ml-1"
              style={{ left: `${minThumb}%` }}
            >
              <p className="absolute top-5">{minValue}</p>
            </div>

            <div
              className="absolute z-30 w-5 h-5 top-0 right-0 bg-blue-600 rounded-full -mt-1 -mr-2"
              style={{ right: `${maxThumb}%` }}
            >
              <p className="absolute top-5">{maxValue}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputMinMaxAge;
