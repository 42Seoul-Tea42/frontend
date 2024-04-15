type TableProps = {
  thead: JSX.Element;
  tbody: JSX.Element;
};

function Table({ thead, tbody }: TableProps) {
  return (
    <div className="relative mt-40 shadow overflow-x-scroll sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="">{thead}</tr>
        </thead>
        <tbody>{tbody}</tbody>
      </table>
    </div>
  );
}

export default Table;
