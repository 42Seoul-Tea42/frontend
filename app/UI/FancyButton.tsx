import { HeartSVG } from '../svg';
import { Fancy } from '../redux/interface/enum';

type FancyButtonProps = {
  onClick: () => void;
  fancyState: Fancy;
};

function FancyButton({ fancyState, onClick }: FancyButtonProps) {
  const colorPicker = () => {
    switch (fancyState) {
      case Fancy.NONE:
        return 'white';
      case Fancy.SEND:
        return 'green';
      case Fancy.RECV:
        return 'yellow';
      case Fancy.CONN:
        return 'red';
      default:
        return 'white';
    }
  };
  const textPicker = () => {
    switch (fancyState) {
      case Fancy.NONE:
        return 'NONE';
      case Fancy.SEND:
        return 'SEND';
      case Fancy.RECV:
        return 'RECV';
      case Fancy.CONN:
        return 'CONN';
      default:
        return 'white';
    }
  };
  return (
    <button onClick={onClick} className="hover:brightness-50">
      <p className="absolute font-thin text-sm">{textPicker()}</p>
      <HeartSVG color={colorPicker()} />
    </button>
  );
}

export default FancyButton;
