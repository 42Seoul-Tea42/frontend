'use client';

import DirectionSVG from '../../../svg/DirectionSVG';

interface toggleEmailFormButtonProps {
  handle: () => void;
  state: boolean;
}

const ToggleEmailFormButton: React.FC<toggleEmailFormButtonProps> = ({ handle, state }) => {
  const handleDirection = () => {
    if (state) return 'left';
    else return 'down';
  };

  return (
    <button onClick={handle} className="items-center hover:text-gray-400">
      <DirectionSVG direction={handleDirection()} />
    </button>
  );
};

export default ToggleEmailFormButton;
