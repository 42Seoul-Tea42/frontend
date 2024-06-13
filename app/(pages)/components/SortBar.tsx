import { SortButton } from '@/ui';

type SortBarProps = {
  items: { text: string; sortBy: string }[];
  setSortBy: (sortBy: string) => void;
  setSortOrder: (sortOrder: 'descending' | 'ascending') => void;
};

function SortBar({ items, setSortBy, setSortOrder }: SortBarProps) {
  return (
    <div className="flex justify-between gap-10 border p-2 pl-4 pr-4 rounded-xl shadow-md">
      {items.map((item, index) => (
        <div key={index} className="text-lg flex jutify-center items-center gap-3">
          {item.text}
          <SortButton
            upClick={() => {
              setSortBy(item.sortBy);
              setSortOrder('descending');
            }}
            downClick={() => {
              setSortBy(item.sortBy);
              setSortOrder('ascending');
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default SortBar;
