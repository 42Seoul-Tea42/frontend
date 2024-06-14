import { Fancy } from '@/redux/enum';
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
    if (fancyState === Fancy.CONN || fancyState === Fancy.SEND) {
      setColor('pink');
      setText('like');
    } else {
      setColor('gray');
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
