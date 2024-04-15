type TableSchemaProps = {
  text: string;
  button: JSX.Element | string | undefined;
};

const TableSchema: React.FC<TableSchemaProps> = ({ text, button }) => {
  return (
    <th scope="col" className="px-6 py-3">
      <div className="flex items-center">
        <p className="mr-2">{text}</p>
        {button}
      </div>
    </th>
  );
};

export default TableSchema;
