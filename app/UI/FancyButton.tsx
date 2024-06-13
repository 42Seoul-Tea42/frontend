import { Fancy } from '@/redux/enum';
import { HeartSVG, ThumbsUpSVG } from '../svg';

type FancyButtonProps = {
  onClick: () => void;
  fancyState: Fancy;
};

function FancyButton({ fancyState, onClick }: FancyButtonProps) {
  const colorPicker = () => {
    switch (fancyState) {
      case Fancy.NONE:
        return 'gray';
      case Fancy.SEND:
        return 'green';
      case Fancy.RECV:
        return 'blue';
      case Fancy.CONN:
        return 'red';
      default:
        return 'white';
    }
  };
  const textPicker = () => {
    switch (fancyState) {
      case Fancy.NONE:
        return '';
      case Fancy.SEND:
        return 'sen';
      case Fancy.RECV:
        return 'rec';
      case Fancy.CONN:
        return 'con';
      default:
        return '';
    }
  };

  return (
    <button onClick={onClick} className="relative">
      <div className="hover:animate-bounce flex items-center">
        <ThumbsUpSVG color={colorPicker()} />
        <p className="w-4 font-thin text-sm">{textPicker()}</p>
      </div>
    </button>
  );
}

export default FancyButton;
