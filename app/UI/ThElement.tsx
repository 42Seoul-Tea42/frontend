import SortButton from './SortButton';

type ThElementProps = {
  text: string;
  sortBy: () => void;
  up: () => void;
  down: () => void;
};

const ThElement: React.FC<ThElementProps> = ({ text, sortBy, up, down }) => {
  return (
    <div className="flex items-center">
      <p className="mr-2">{text}</p>
      <SortButton
        upClick={() => {
          sortBy();
          up();
        }}
        downClick={() => {
          sortBy();
          down();
        }}
      />
    </div>
  );
};

export default ThElement;
