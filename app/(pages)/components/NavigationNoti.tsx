import { RootState } from '@/redux/store';
import React from 'react';
import { useSelector } from 'react-redux';

type NavigationNotiProps = {
  item: any;
};

function NavigationNoti({ item }: NavigationNotiProps) {
  const historyNoti = useSelector((state: RootState) => state.suggestionSlice.historyNoti);
  const fancyNoti = useSelector((state: RootState) => state.suggestionSlice.fancyNoti);

  const visibleControl = (name: string) => {
    if ((name === 'Fancy' && fancyNoti === true) || (name === 'History' && historyNoti === true)) {
      return '';
    }
    return 'hidden';
  };

  return (
    <div className={item.noti === 'on' ? '' : 'hidden'}>
      <div className={visibleControl(item.name)}>
        <span className="animate-pulse bg-red-500 absolute left-0 bottom-0 w-4 h-4 border-2 border-white rounded-full"></span>
      </div>
    </div>
  );
}

export default NavigationNoti;
