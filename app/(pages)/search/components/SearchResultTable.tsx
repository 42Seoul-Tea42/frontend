import { SortButton, Table, TableSchema } from '@/UI';

type SearchResultTableProps = {
  schema: { text: string; sortBy?: string | undefined }[];
  body: JSX.Element;
  setSortBy: (sortBy: string) => void;
  setSortOrder: (order: 'ascending' | 'descending') => void;
};

const SearchResultTable: React.FC<SearchResultTableProps> = ({ schema, body, setSortBy, setSortOrder }) => {
  return (
    <Table
      thead={
        <>
          {schema.map((item, index) => (
            <TableSchema
              key={index}
              text={item.text}
              button={
                item.sortBy && (
                  <SortButton
                    upClick={() => {
                      setSortBy(item.sortBy || '');
                      setSortOrder('descending');
                    }}
                    downClick={() => {
                      setSortBy(item.sortBy || '');
                      setSortOrder('ascending');
                    }}
                  />
                )
              }
            />
          ))}
        </>
      }
      tbody={body}
    />
  );
};

export default SearchResultTable;
