import { DirectionSVG } from '../../../svg';

const SearchButton: React.FC = () => {
  return (
    <button
      className="fixed top-14 w-full h-12 flex justify-center items-center text-gray-400 hover:bg-gray-100 font-medium px-5 py-2.5 mb-2"
      type="button"
      onClick={toggleDrawer}
    >
      <div className={`${isBounce} && animate-bounce`}></div>
      <DirectionSVG direction="down" size="6" />
    </button>
  );
};

export default SearchButton;
