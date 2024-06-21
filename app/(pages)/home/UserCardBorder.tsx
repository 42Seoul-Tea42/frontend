'use client';

import { Fancy, FancyColor } from '@/redux/enum';
import _ from 'lodash';
import { useEffect, useState } from 'react';

interface UserCardBorderProps {
  user: any;
  props: JSX.Element;
  fancyState: Fancy;
}

function UserCardBorder({ user, props, fancyState }: UserCardBorderProps) {
  const [borderColor, setBorderColor] = useState<string>('border-gray-100');

  useEffect(() => {
    switch (user.fancy) {
      case Fancy.NONE:
        setBorderColor(FancyColor.none);
        break;
      case Fancy.SEND:
        setBorderColor(FancyColor.send);
        break;
      case Fancy.RECV:
        setBorderColor(FancyColor.recv);
        break;
      case Fancy.CONN:
        setBorderColor(FancyColor.connect);
        break;
      default:
        setBorderColor(FancyColor.none);
        break;
    }
  }, [fancyState]);

  return (
    <div className={`shadow-xl rounded-xl border-4 ${borderColor}`}>
      <div className="border border-white rounded-lg">{props}</div>
    </div>
  );
}
export default UserCardBorder;
