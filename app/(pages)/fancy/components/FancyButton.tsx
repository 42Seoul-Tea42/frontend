import { useState } from 'react';
import HeartSVG from '../../../svg/HeartSVG';

interface FancyButtonProps {
  targetId: number;
}

const FancyButton: React.FC<FancyButtonProps> = ({ targetId }) => {
  const [color, setColor] = useState<string>('white');

  const fancyUser = () => {
    // const response = axiosInstance.post('/history/fancy', {
    //   target_id: targetId
    // })
    setColor(color === 'white' ? 'pink' : 'white');
  };

  return (
    <button onClick={fancyUser} className="hover:animate-ping">
      <HeartSVG color={color} />
    </button>
  );
};

export default FancyButton;
