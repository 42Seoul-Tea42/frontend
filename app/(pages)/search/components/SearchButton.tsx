import { SearchSVG } from '../../../svg';

interface SearchButtonProps {
  onClick: () => void;
}
const SearchButton: React.FC<SearchButtonProps> = ({ onClick }) => {
  return (
    <button
      type="button"
      className="flex items-center text-white bg-gray-700 hover:bg-gray-800 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 gap-2"
      onClick={onClick}
    >
      <SearchSVG />
      검색하기
    </button>
  );
};

export default SearchButton;
