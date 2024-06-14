'use client';

import { Fancy, FancyColor } from '@/redux/enum';
import { RootState } from '@/redux/store';
import _, { set } from 'lodash';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

interface UserCardBorderProps {
  user: any;
  props: JSX.Element;
}

function UserCardBorder({ user, props }: UserCardBorderProps) {
  const [borderColor, setBorderColor] = useState<string>('');

  useEffect(() => {
    switch (user.fancy) {
      case Fancy.NONE:
        setBorderColor(`border-${FancyColor.none}-100`);
        break;
      case Fancy.SEND:
        setBorderColor(`border-${FancyColor.send}-300`);
        break;
      case Fancy.RECV:
        setBorderColor(`border-${FancyColor.recv}-200`);
        break;
      case Fancy.CONN:
        setBorderColor(`border-${FancyColor.connect}-400`);
        break;
      default:
        setBorderColor(`border-${FancyColor.none}-100`);
        break;
    }
  }, [user.fancy]);

  return (
    <div className={`shadow-xl rounded-xl border-4 ${borderColor}`}>
      <div className="border border-white rounded-lg">{props}</div>
    </div>
  );
}
export default UserCardBorder;
