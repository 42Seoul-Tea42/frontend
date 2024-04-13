import { DirectionSVG } from '../../../svg';

interface SearchParameterDrawerButtonProps {
  onClick: () => void;
}

const DrawerOpenButton: React.FC<SearchParameterDrawerButtonProps> = ({ onClick }) => {
  return (
    <button
      className="fixed top-14 w-full h-12 flex justify-center items-center text-gray-400 hover:bg-gray-100 font-medium px-5 py-2.5 mb-2"
      type="button"
      onClick={onClick}
    >
      <DirectionSVG direction="down" size="6" />
    </button>
  );
};

export default DrawerOpenButton;
