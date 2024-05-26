import { HeartSVG, ThumbsUpSVG } from '../svg';
import { Fancy } from '../redux/interface/enum';

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
        return 'send';
      case Fancy.RECV:
        return 'recv';
      case Fancy.CONN:
        return 'connect';
      default:
        return '';
    }
  };

  return (
    <button onClick={onClick} className="relative">
      <div className="hover:animate-bounce">
        <ThumbsUpSVG color={colorPicker()} />
      </div>
      <p className="absolute top-4 font-thin text-sm">{textPicker()}</p>
    </button>
  );
}

export default FancyButton;
