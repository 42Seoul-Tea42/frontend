import { DirectionSVG } from '../../../svg';

type SortButtonProps = {
  upClick: () => void;
  downClick: () => void;
};

const SortButton: React.FC<SortButtonProps> = ({ upClick, downClick }) => {
  return (
    <div className="flex flex-col size-3 gap-1 justify-center">
      <button onClick={upClick} className="hover:text-red-400">
        <DirectionSVG direction="top" size="1" />
      </button>
      <hr className="border-1 border-black mb-0.5" />
      <button onClick={downClick} className="hover:text-red-400">
        <DirectionSVG direction="down" size="1" />
      </button>
    </div>
  );
};

export default SortButton;
