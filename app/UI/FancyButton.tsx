import { useState } from 'react';
import { HeartSVG } from '../svg';

type FancyButtonProps = {
  onClick: () => void;
};

function FancyButton({ onClick }: FancyButtonProps) {
  const [color, setColor] = useState<string>('white');

  const submitFancyUser = () => {
    setColor(color === 'white' ? 'pink' : 'white');
    onClick();
  };

  return (
    <button onClick={submitFancyUser} className="hover:animate-ping">
      <HeartSVG color={color} />
    </button>
  );
}

export default FancyButton;
