type UserRowProps = {
  key: number;
  name: string;
  age: number;
  distance: number;
  rating: number;
  interestsCount: number;
};

const SearchResultTableRow = ({ name, age, distance, rating, interestsCount }: UserRowProps) => (
  <tr className="text-lg bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
    <td className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
      <img className="w-10 h-10 rounded-full" src="emoji/1.jpg" alt={`${name} image`} />
      <div className="ps-3">
        <div className="text-base font-semibold">{name}</div>
      </div>
    </td>
    <td className="px-6 py-4">{age}</td>
    <td className="px-6 py-4">{distance} km</td>
    <td className="px-6 py-4">{rating}</td>
    <td className="px-6 py-4">{interestsCount}</td>
  </tr>
);
export default SearchResultTableRow;
