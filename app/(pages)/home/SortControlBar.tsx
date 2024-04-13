import ThElement from '../search/components/ThElement';

type SortControlBarProps = {
  items: { text: string; setSortBy: string }[];
  setSortBy: (sortBy: string) => void;
  setSortOrder: (sortOrder: 'descending' | 'ascending') => void;
};

const SortControlBar: React.FC<SortControlBarProps> = ({ items, setSortBy, setSortOrder }) => {
  return (
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
  );
};

export default SortControlBar;
