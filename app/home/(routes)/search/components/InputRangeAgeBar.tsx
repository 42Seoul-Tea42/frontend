'use client';

import { useDispatch, useSelector } from 'react-redux';
import { setAge } from '../../../../store/slices/searchValueDataSlice';
import { RootState } from '../../../../store';
import MultiRangeSlider from './MultiSlider';
import { useState } from 'react';

const InputRangeAgeBar: React.FC = () => {
  const minValue = useSelector((state: RootState) => state.searchValue.age.min);
  const maxValue = useSelector((state: RootState) => state.searchValue.age.max);
  const dispatch = useDispatch();

  const handleMinValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setAge({ min: Number(event.target.value), max: maxValue }));
  };

  const handleMaxValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setAge({ min: minValue, max: Number(event.target.value) }));
  };

  function handleInput(e: any) {
    throw new Error('Function not implemented.');
  }
  const [ageRange, setAgeRange] = useState<{ min: number; max: number }>({ min: 0, max: 100 });

  const handleAgeRangeChange = (values: { min: number; max: number }): void => {
    setAgeRange(values);
  };
  return (
    <div className="flex flex-col items-center">
      {/* <div className="text font-bold mb-4">나이</div>
      <div className="flex justify-center items-center w-96"> */}
      {/* <input
          type="range"
          min="0"
          max="12"
          step="4"
          value={maxValue}
          onChange={handleMaxValueChange}
          className="rotate-180 mr-2 w-48"
        />
        <input
          id="large-range"
          type="range"
          min="0"
          max="12"
          step="4"
          value={minValue}
          onChange={handleMinValueChange}
          className="w-48"
        />
      </div>
      <div className="flex justify-between w-96 ml-2 text-lg">
        <span>-12</span>
        <span>-8</span>
        <span>-4</span>
        <span>0</span>
        <span>+4</span>
        <span>+8</span>
        <span>+12</span>
      </div> */}
      <MultiRangeSlider min={0} max={100} onChange={handleAgeRangeChange} />
    </div>
  );
};

export default InputRangeAgeBar;
