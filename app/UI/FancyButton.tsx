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
  return (
    <button onClick={onClick} className="hover:animate-ping">
      <HeartSVG color={colorPicker()} />
    </button>
  );
}

export default FancyButton;
