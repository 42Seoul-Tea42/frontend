import { DirectionSVG } from '../../../svg';

interface AllSignOptionButtonProps {
  onClick: () => void;
}

const AllSignOptionButton: React.FC<AllSignOptionButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="absolute flex top-1 left-1 w-4 h-4 text-blue-700 hover:underline">
      <div className="flex items-start">
        <div className="mt-1 mr-1">
          <DirectionSVG direction="left" size="3" />
        </div>
        <p className="text-light text-sm whitespace-nowrap size-0"> all sign option</p>
      </div>
    </button>
  );
};

export default AllSignOptionButton;
