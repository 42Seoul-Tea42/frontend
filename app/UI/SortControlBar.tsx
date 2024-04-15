import ThElement from './ThElement';

type SortControlBarProps = {
  items: { text: string; setSortBy: string }[];
  setSortBy: (sortBy: string) => void;
  setSortOrder: (sortOrder: 'descending' | 'ascending') => void;
};

const SortControlBar: React.FC<SortControlBarProps> = ({ items, setSortBy, setSortOrder }) => {
  return (
    <div className="flex flex-col m-10">
      <div className="flex justify-center gap-10">
        {items.map((item, index) => (
          <ThElement
            key={index}
            text={item.text}
            sortBy={() => setSortBy(item.setSortBy)}
            up={() => setSortOrder('descending')}
            down={() => setSortOrder('ascending')}
          />
        ))}
      </div>
    </div>
  );
};

export default SortControlBar;
