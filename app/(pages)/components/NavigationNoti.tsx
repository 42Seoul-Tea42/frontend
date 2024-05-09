import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

type NavigationNotiProps = {
  name: string;
};

function NavigationNoti({ name }: NavigationNotiProps) {
  const historyNoti = useSelector((state: RootState) => state.historySlice.historyNoti);
  const fancyNoti = useSelector((state: RootState) => state.fancySlice.fancyNoti);
  const handleNotiStyle = (name: string) => {
    if ((name === 'Fancy' && fancyNoti) || (name === 'History' && historyNoti)) {
      return '';
    }
    return 'hidden';
  };
  return (
    <div className={handleNotiStyle(name)}>
      <span className="animate-pulse bg-red-500 absolute left-0 bottom-0 w-4 h-4 border-2 border-white dark:border-gray-800 rounded-full"></span>
    </div>
  );
}

export default NavigationNoti;
