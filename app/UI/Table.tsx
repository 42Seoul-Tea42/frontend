type TableProps = {
  thead: JSX.Element;
  tbody: JSX.Element;
};

function Table({ thead, tbody }: TableProps) {
  return (
    <div className="relative mt-40 shadow overflow-x-scroll">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-lg text-gray-700 uppercase bg-gray-50">
          <tr className="">{thead}</tr>
        </thead>
        <tbody>{tbody}</tbody>
      </table>
    </div>
  );
}

export default Table;
