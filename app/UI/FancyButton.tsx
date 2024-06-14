import { Fancy, FancyColor } from '@/redux/enum';
import { HeartSVG, ThumbsUpSVG } from '../svg';
import { useEffect, useState } from 'react';

type FancyButtonProps = {
  onClick: () => void;
  fancyState: Fancy;
};

function FancyButton({ fancyState, onClick }: FancyButtonProps) {
  const [color, setColor] = useState('gray');
  const [text, setText] = useState('');

  useEffect(() => {
    if (fancyState === Fancy.CONN) {
      setColor(FancyColor.connect);
      setText('like');
    } else if (fancyState === Fancy.SEND) {
      setColor(FancyColor.send);
      setText('like');
    } else {
      setColor(FancyColor.none);
      setText('');
    }
  }, [fancyState]);

  return (
    <button onClick={onClick} className="relative">
      <div className="hover:brightness-75 flex items-center">
        <ThumbsUpSVG color={color} />
        <p className="w-4 font-thin text-sm">{text}</p>
      </div>
    </button>
  );
}

export default FancyButton;
