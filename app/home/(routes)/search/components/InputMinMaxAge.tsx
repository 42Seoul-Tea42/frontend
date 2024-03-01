import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputNumber from '../../../../components/InputNumber';
import { setMaxAge, setMinAge } from '../../../../store/slices/searchValueDataSlice';
import { RootState } from '../../../../store';

export const InputMinMaxAge: React.FC = () => {
  const dispatch = useDispatch();
  const minAgeState = useSelector((state: RootState) => state.searchValue.minAge);
  const maxAgeState = useSelector((state: RootState) => state.searchValue.maxAge);

  const handleMinAgeChange = (minAge: number) => {
    dispatch(setMinAge(minAge));
  };

  const handleMaxAgeChange = (maxAge: number) => {
    dispatch(setMaxAge(maxAge));
  };

  return (
    <div className="flex grid grid-cols-2">
      <InputNumber text="min" handle={handleMinAgeChange} viewControl={minAgeState} />
      <InputNumber text="max" handle={handleMaxAgeChange} viewControl={maxAgeState} />
    </div>
  );
};

export default InputMinMaxAge;
