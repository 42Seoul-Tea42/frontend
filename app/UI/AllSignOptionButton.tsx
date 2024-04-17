import { ButtonType } from '../redux/types';
import { DirectionSVG } from '../svg';
import HyperBlueLink from './HyperBlueLink';

function AllSignOptionButton({ onClick }: ButtonType) {
  return (
    <div className="absolute flex top-1 left-1 w-4 h-4">
      <div className="flex items-start">
        <div className="mt-1 mr-1 text-blue-700">
          <DirectionSVG direction="left" size="3" />
        </div>
        <p className="text-light text-sm whitespace-nowrap size-0">
          <HyperBlueLink onClick={onClick} text="all sign option" />
        </p>
      </div>
    </div>
  );
}

export default AllSignOptionButton;
