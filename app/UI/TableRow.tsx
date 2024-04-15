type RowProps = {
  columns: any[];
  option?: { image: string };
};

const TableRow = ({ columns, option }: RowProps) => (
  <tr className="text-lg bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
    <td className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
      <img className="w-10 h-10 rounded-full" src={option?.image} alt={`${columns[0]} image`} />
      <div className="ps-3">
        <div className="text-base font-semibold">{columns[0]}</div>
      </div>
    </td>
    {columns.map((col, index) => (
      <td key={index} className="px-6 py-4">
        {col}
      </td>
    ))}
  </tr>
);

export default TableRow;
