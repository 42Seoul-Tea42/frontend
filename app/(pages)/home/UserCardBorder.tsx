'use client';

import { Fancy } from '@/redux/enum';
import { RootState } from '@/redux/store';
import _, { set } from 'lodash';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

interface UserCardBorderProps {
  userId: number;
  fancy: Fancy;
  props: JSX.Element;
}

function UserCardBorder({ userId, fancy, props }: UserCardBorderProps) {
  const [borderColor, setBorderColor] = useState<string>('');

  const match = useSelector((state: RootState) => state.suggestionSlice.match);
  useEffect(() => {
    switch (match) {
      case Fancy.NONE:
        setBorderColor('border-gray-100');
        break;
      case Fancy.SEND:
        setBorderColor('border-gray-100');
        break;
      case Fancy.RECV:
        setBorderColor('border-blue-300');
        break;
      case Fancy.CONN:
        setBorderColor('border-blue-400');
        break;
      default:
        setBorderColor('border-gray-100');
        break;
    }
  }, [match]);

  return (
    <div className={`shadow-xl rounded-xl border-4 ${borderColor}`}>
      <div className="border border-white rounded-lg">{props}</div>
    </div>
  );
}
export default UserCardBorder;
