type RowProps = {
  columns: any[];
  head: string;
  option?: { image: string };
  onClick?: () => void;
};

const TableRow = ({ head, columns, option, onClick }: RowProps) => (
  <tr className="text-lg bg-white border-b hover:bg-gray-50" onClick={() => onClick && onClick()}>
    <td className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
      <img className="w-10 h-10 rounded-full" src={option?.image} alt={`${head} image`} />
      <div className="ps-3">
        <div className="text-base font-semibold">{head}</div>
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
