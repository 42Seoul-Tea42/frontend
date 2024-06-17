import { Fancy, FancyColor } from '@/redux/enum';
import { HeartSVG, ThumbsUpSVG } from '../svg';
import { useEffect, useState } from 'react';

type FancyButtonProps = {
  onClick: () => void;
  fancyState: Fancy;
};

function FancyButton({ fancyState, onClick }: FancyButtonProps) {
  const [color, setColor] = useState('gray');

  useEffect(() => {
    if (fancyState === Fancy.CONN) {
      setColor(FancyColor.thumbConn);
    } else if (fancyState === Fancy.SEND) {
      setColor(FancyColor.thumbSend);
    } else {
      setColor(FancyColor.thumbNone);
    }
  }, [fancyState]);

  return (
    <button onClick={onClick} className="relative">
      <div className="hover:brightness-75 flex items-center">
        <ThumbsUpSVG color={color} />
      </div>
    </button>
  );
}

export default FancyButton;
